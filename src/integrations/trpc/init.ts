import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError, treeifyError } from "zod";

export const createTRPCContext = () => {
	return {};
};

const t = initTRPC.context<typeof createTRPCContext>().create({
	transformer: superjson,
	errorFormatter({ shape, error }) {
		return {
			...shape,
			data: {
				...shape.data,
				zodError: error.cause instanceof ZodError ? treeifyError(error.cause) : null
			}
		};
	}
});

export const createCallerFactory = t.createCallerFactory;

export const createTRPCRouter = t.router;

const timingMiddleware = t.middleware(async ({ next, path }) => {
	const start = performance.now();

	// oxlint-disable-next-line no-underscore-dangle
	if (t._config.isDev) {
		const wait = Math.floor(Math.random() * 400) + 100;
		// oxlint-disable-next-line no-promise-executor-return typescript/strict-void-return
		await new Promise((resolve) => setTimeout(resolve, wait));
	}

	const marker = performance.now();

	const result = await next();

	const end = performance.now();
	console.log(
		`[TRPC] ${path} took total ${(end - start).toFixed(4)}ms to execute for procedure ${(end - marker).toFixed(4)}ms`
	);

	return result;
});

export const publicProcedure = t.procedure.use(timingMiddleware);

export const protectedProcedure = t.procedure.use(timingMiddleware);
