import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../backend/src/appRouter";

// AppRouter drives all client-side types
export const trpc = createTRPCReact<AppRouter>();
