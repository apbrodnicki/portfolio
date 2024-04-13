import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [tsconfigPaths()],
		define: {
			VITE_LEXICON_SERVER_PORT: JSON.stringify(env.VITE_LEXICON_SERVER_PORT),
			VITE_EC2_INSTANCE_IP: JSON.stringify(env.VITE_EC2_INSTANCE_IP),
		},
	};
});
