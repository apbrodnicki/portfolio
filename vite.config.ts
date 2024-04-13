import replace from '@rollup/plugin-replace';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tsconfigPaths(),
		replace({
			preventAssignment: true,
			values: {
				'process.env.VITE_LEXICON_SERVER_PORT': JSON.stringify(process.env.VITE_LEXICON_SERVER_PORT),
				'process.env.VITE_EC2_INSTANCE_IP': JSON.stringify(process.env.VITE_EC2_INSTANCE_IP)
			}
		})
	],
});

