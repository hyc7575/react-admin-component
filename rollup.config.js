import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import scss from 'rollup-plugin-scss'
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";

export default {
	input: "src/index.tsx",
	output: [{
			file: pkg.main,
			format: "cjs",
			exports: "named",
			sourcemap: true
		},
		{
			file: pkg.module,
			format: "es",
			exports: "named",
			sourcemap: true
		}
	],
	plugins: [
		scss(),
		external(),
		resolve(),
		typescript({
			rollupCommonJSResolveHack: true,
			clean: true
		}),
		commonjs({
			include: ["node_modules/**"],
			namedExports: {
				"node_modules/react/react.js": [
					"Children",
					"Component",
					"PropTypes",
					"createElement"
				],
				"node_modules/react-dom/index.js": ["render"]
			}
		})
	]
};