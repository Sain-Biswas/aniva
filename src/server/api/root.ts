import { createCallerFactory, createTRPCRouter } from "~/integrations/trpc/init";
import { todosRouter } from "~/server/api/routes/todo";

export const appRouter = createTRPCRouter({
	todos: todosRouter
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
