import cors from 'cors';
import 'dotenv/config';
import express, { type Request, type RequestHandler, type Response } from 'express';
import fs from 'fs';
import https from 'https';

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/api/word', (async (request: Request, response: Response) => {
	try {
		const { word }: { word?: string } = request.query;

		if (word === null) {
			return response.status(400).json({ error: 'Invalid or missing "word" parameter.' });
		}

		const url = `${process.env.DICTIONARY_BASE_URL}/${word}?key=${process.env.DICTIONARY_TOKEN}`;
		const dictionaryApiResponse = await fetch(url);
		const dictionaryApiData = await dictionaryApiResponse.json();

		response.json(dictionaryApiData);
	} catch (error) {
		console.log(error);
		response.status(500).json({ error: 'Internal server error.' });
	}
}) as RequestHandler);

const httpsOptions = {
	key: fs.readFileSync(process.env.SERVER_KEY as string),
	cert: fs.readFileSync(process.env.SERVER_CERT as string),
	ca: fs.readFileSync(process.env.SERVER_CA as string)
};

// Start the HTTPS server
https.createServer(httpsOptions, app).listen(443, () => {
	console.log('Server is running!');
});
