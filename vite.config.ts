import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import babel from "@rolldown/plugin-babel";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
	plugins: [devtools(), nitro(), tanstackStart(), react(), svgr(), babel({ presets: [reactCompilerPreset()] })],

	resolve: {
		tsconfigPaths: true
	},

	css: {
		transformer: "lightningcss"
	},

	build: {
		cssMinify: "lightningcss"
	}
});
