# Architecture

How this admin is put together, and the reasoning behind the parts that are not obvious.

---

## The shape

```
src/
├─ App.tsx                  routes: / -> /login, /login, then /dashboard + /settings
│                           inside <AppLayout>
├─ main.tsx                 providers; the tRPC client's backend URL
├─ lib/
│  ├─ trpc.ts               createTRPCReact<AppRouter>()
│  └─ app-router.d.ts       GENERATED backend contract
├─ types/app-nav.ts         the nav item types
├─ components/
│  ├─ layout/               the shell: sidebar, breadcrumb, toolbar
│  └─ dashboard/            widgets; health-status-widget.tsx is the example query
└─ routes/                  login, dashboard, settings
```

`AppLayout` is a layout route rather than a wrapper component: authenticated pages nest inside
it in `App.tsx`, so they inherit the sidebar without each one rendering it.

---

## Types come from a file, not a path

`src/lib/app-router.d.ts` is a committed copy of the backend's router type, refreshed with
`bun run sync:types`.

The obvious alternative — importing `../../../skelly-backend/src/appRouter` — is what this
template used to do, and it was broken in a way that took a while to see. Typechecking the
admin pulled the backend's *source* into this TypeScript program, and that source imports
`bun:sqlite` and `node:fs`. It only worked because this repo carried `@types/bun`: a browser
app holding server runtime globals. Clone it alone and it did not typecheck at all, silently,
because `build` was a bare `vite build` that strips types rather than checking them.

So the contract is a snapshot now. The trade is explicit:

| | Live import | Committed snapshot |
|---|---|---|
| Freshness | always current | until the next sync |
| Standalone clone | broken | builds |
| Type error | at build, if the sibling exists | at build, always |

A snapshot can go stale. The backend's own `bun run build` emits it, so the refresh is one
copy away from automatic — but someone can still forget. That is the honest cost, and it buys
a repository that builds on its own.

`bun run build` runs `tsc -b` before Vite, so a type error fails the build. That is the whole
point of the arrangement; do not "fix" a red build by skipping the typecheck.

---

## Navigation

Nav items live in the `APP_NAV` array inside `src/components/layout/app-nav.tsx`, typed by
`src/types/app-nav.ts`. Adding a page means adding a route in `App.tsx` and an entry in that
array.

It being declared inside the component body rather than beside its types is the one genuinely
surprising thing in this codebase, and worth moving out if you grow the nav.

---

## What this template is not

The login screen has no session behind it. There is no authorisation, no role model, and no
real user store — `/login` sets a flag and the guard reads it. It is a shape to replace, not
security. The backend URL is hardcoded in `main.tsx`; move it to an environment variable
before you deploy.
