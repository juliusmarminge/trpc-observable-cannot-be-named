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
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
 ✓ Generating static pages (4/4)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    430 B          84.6 kB
└ ○ /_not-found                          882 B          85.1 kB
+ First Load JS shared by all            84.2 kB
  ├ chunks/817-69f6e3f5f7e79ef9.js       28.9 kB
  ├ chunks/d2d8da58-45b4b0522612982b.js  53.4 kB
  └ other shared chunks (total)          1.87 kB


○  (Static)  prerendered as static content
```

Then install `11.0.0-next-beta-208` (this is the version published after bumping rollup: https://github.com/trpc/trpc/actions/runs/7581886883/job/20650347179#step:10:20):

```bash
$ pnpm install
Packages: +4 -4
++++----
Progress: resolved 41, reused 33, downloaded 0, added 4, done

dependencies:

- @trpc/client 11.0.0-next-beta.206
+ @trpc/client 11.0.0-next-beta-208
- @trpc/next 11.0.0-next-beta.206
+ @trpc/next 11.0.0-next-beta-208
- @trpc/server 11.0.0-next-beta.206
+ @trpc/server 11.0.0-next-beta-208

Done in 1.6s

```

```bash
$ pnpm build

pnpm build

> trpc-observable-cannot-be-named@0.1.0 build /Users/julius/dev/sandbox/trpc-observable-cannot-be-named
> next build

   ▲ Next.js 14.1.1-canary.5

   Creating an optimized production build ...
Failed to compile.

./node_modules/.pnpm/@trpc+client@11.0.0-next-beta.208/node_modules/@trpc/client/dist/index.mjs + 19 modules
Cannot get final name for export 'observable' of ./node_modules/.pnpm/@trpc+core@11.0.0-next-beta.208/node_modules/@trpc/core/dist/observable/index.mjs
```
