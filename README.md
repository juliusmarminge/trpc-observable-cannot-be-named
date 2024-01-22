## To reproduce:

```bash
pnpm install
pnpm build
```

Build output:

```bash
$ pnpm build

> trpc-observable-cannot-be-named@0.1.0 build /Users/julius/dev/sandbox/trpc-observable-cannot-be-named
> next build

   ▲ Next.js 14.1.1-canary.5

   Creating an optimized production build ...
Failed to compile.

./node_modules/.pnpm/@trpc+client@11.0.0-next-beta.216/node_modules/@trpc/client/dist/index.mjs + 19 modules
Cannot get final name for export 'observable' of ./node_modules/.pnpm/@trpc+core@11.0.0-next-beta.216/node_modules/@trpc/core/dist/observable/index.mjs
```
