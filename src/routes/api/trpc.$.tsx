import { createTRPCContext } from "~/integrations/trpc/init";
import { createFileRoute } from "@tanstack/react-router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "~/server/api/root";

const createContext = () => {
	return createTRPCContext();
};

function handler({ request }: { request: Request }) {
	return fetchRequestHandler({
		req: request,
		router: appRouter,
		endpoint: "/api/trpc",
		createContext: () => createContext()
	});
}

export const Route = createFileRoute("/api/trpc/$")({
	server: {
		handlers: {
			GET: handler,
			POST: handler
		}
	}
});
