import { defineConfig } from "oxfmt";

export default defineConfig({
	printWidth: 120,
	tabWidth: 4,
	trailingComma: "none",
	useTabs: true,

	/* HTML-JSX-TSX specific options */
	htmlWhitespaceSensitivity: "strict",
	singleAttributePerLine: true
});
