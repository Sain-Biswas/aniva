import { defineConfig } from "oxlint";

export default defineConfig({
	plugins: ["eslint", "jsdoc", "jsx-a11y", "node", "oxc", "promise", "react", "react-perf", "typescript", "unicorn"],

	categories: {
		correctness: "error",
		pedantic: "warn",
		perf: "error",
		suspicious: "warn"
	},

	rules: {
		/* React rules updates */
		"react/rules-of-hooks": "error",
		"react/only-export-components": "off",
		"react/react-in-jsx-scope": "off",

		/* Typescript rules updates */
		"typescript/prefer-readonly-parameter-types": "off"
	},

	options: {
		typeAware: true,
		typeCheck: true
	},

	env: {
		builtin: true
	}
});
