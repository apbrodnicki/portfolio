import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [tsconfigPaths()],
		define: {
			__APP_ENV__: JSON.stringify(env.APP_ENV),
		},
	};
});
