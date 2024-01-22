"use client";

import { action } from "./action";

export function ClientComponent() {
  return (
    <button
      onClick={async () => {
        await action();
      }}
    >
      Trigger SA
    </button>
  );
}
