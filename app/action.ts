"use server";

import { createAction, procedure } from "@/lib/trpc";

export const action = createAction(
  procedure.mutation(() => {
    console.log("Hello from tRPC Server Action");
  })
);
