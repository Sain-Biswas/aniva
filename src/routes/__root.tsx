import { createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";

import { TanstackDevtoolsProvider } from "~/integrations/tanstack/devtools/provider";

import globalStyles from "~/styles/styles.css?url";

import type { QueryClient } from "@tanstack/react-query";

import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import type { AppRouter } from "~/server/api/root";

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

	shellComponent: ({ children }: { children: React.ReactNode }) => {
		return (
			<html lang="en">
				<head>
					<HeadContent />
				</head>
				<body>
					{children}
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
