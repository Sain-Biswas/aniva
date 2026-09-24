import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/react-router";

import { TanstackDevtoolsProvider } from "~/integrations/tanstack/devtools/provider";

interface AnivaRouterContext {}

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
		]
	}),

	shellComponent: () => {
		return (
			<html lang="en">
				<head>
					<HeadContent />
				</head>
				<body>
					<Outlet />
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
