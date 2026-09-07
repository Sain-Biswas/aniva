// oxlint-disable react-hooks/rules-of-hooks
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	loader: async ({ context }) => {
		await context.queryClient.query(context.trpc.todos.list.queryOptions());
	},
	pendingComponent: () => <main>Loading...</main>,
	component: () => {
		const { trpc } = Route.useRouteContext();
		const { data } = useSuspenseQuery(trpc.todos.list.queryOptions());

		return (
			<div className="p-8">
				<h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
				<p className="mt-4 text-lg">
					Edit <code>src/routes/index.tsx</code> to get started.
				</p>

				<div>
					{data?.map((e) => (
						<p
							className="trpc-item"
							key={e.id}
						>
							{e.name}
						</p>
					))}
				</div>
			</div>
		);
	}
});
