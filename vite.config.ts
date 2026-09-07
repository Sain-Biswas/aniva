import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { nitro } from "nitro/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		devtools(),
		nitro(),
		tanstackStart(),
		react(),
		babel({ presets: [reactCompilerPreset({ target: "19" })] })
	],

	resolve: {
		tsconfigPaths: true
	}
});
