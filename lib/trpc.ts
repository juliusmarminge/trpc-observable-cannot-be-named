import "server-only";

import { experimental_createServerActionHandler } from "@trpc/next/app-dir/server";
import { initTRPC } from "@trpc/server";
import { cache } from "react";

const createContext = cache(async () => {
  return {};
});

const t = initTRPC.context<typeof createContext>().create();

export const procedure = t.procedure;

export const createAction = experimental_createServerActionHandler(t, {
  createContext,
});
