import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/react-router";

import { TanstackDevtoolsProvider } from "~/integrations/tanstack/devtools/provider";

import globalStyles from "~/styles/styles.css?url";

import type { QueryClient } from "@tanstack/react-query";

import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import type { AppRouter } from "~/server/api/root";
import { ThemeProvider } from "#/integrations/dark-mode/provider";

interface AnivaRouterContext {
	queryClient: QueryClient;
	trpc: TRPCOptionsProxy<AppRouter>;
}

export const Route = createRootRouteWithContext<AnivaRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8"
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				title: "Aniva"
			}
		],

		links: [
			{
				rel: "stylesheet",
				href: globalStyles
			}
		]
	}),

	shellComponent: () => {
		return (
			<html lang="en">
				<head>
					<HeadContent />
				</head>
				<body>
					<ThemeProvider
						defaultTheme="system"
						storageKey="aniva-ui-theme"
					>
						<Outlet />
					</ThemeProvider>
					<TanstackDevtoolsProvider />
					<Scripts />
				</body>
			</html>
		);
	},

	notFoundComponent: () => {
		return (
			<main>
				<h1>Page not found</h1>
			</main>
		);
	}
});
