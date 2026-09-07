import {
	TanStackDevtools,
	type TanStackDevtoolsReactInit,
	type TanStackDevtoolsReactPlugin
} from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";

const config: NonNullable<TanStackDevtoolsReactInit["config"]> = {
	position: "bottom-right",
	hideUntilHover: true
};

const plugins: TanStackDevtoolsReactPlugin[] = [
	{
		name: "Tanstack Router",
		render: <TanStackRouterDevtoolsPanel />
	},
	{
		name: "Tanstack Query",
		render: <ReactQueryDevtoolsPanel />
	}
];

export function TanstackDevtoolsProvider() {
	if (!import.meta.env.DEV) return null;

	return (
		<TanStackDevtools
			config={config}
			plugins={plugins}
		/>
	);
}
