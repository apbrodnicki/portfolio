export const fetchMovie = async (title: string, year: number): Promise<unknown> => {
	// .env not working in production right now, import.meta.env.TMDB_TOKEN
	const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=395bbfebcfe3ef4bbf3a0b32ef848709&year=${year}`);
	return await response.json();
};
