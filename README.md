
![Skelly Admin Banner](./image.png)

# skelly-admin

> A clean, typed, no-nonsense admin frontend for product-first builders.

<p align="center">
  <a href="./LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-FF6100?style=flat-square"></a>
  <img alt="React 19" src="https://img.shields.io/badge/React-19-FF6100?style=flat-square&logo=react&logoColor=white">
  <img alt="Vite 7" src="https://img.shields.io/badge/Vite-7-FF6100?style=flat-square&logo=vite&logoColor=white">
  <img alt="TypeScript 5.9" src="https://img.shields.io/badge/TypeScript-5.9-FF6100?style=flat-square&logo=typescript&logoColor=white">
  <img alt="Tailwind CSS 4" src="https://img.shields.io/badge/Tailwind%20CSS-4-FF6100?style=flat-square&logo=tailwindcss&logoColor=white">
  <img alt="tRPC 11" src="https://img.shields.io/badge/tRPC-11-FF6100?style=flat-square&logo=trpc&logoColor=white">
</p>

Skelly Admin exists to answer a different question than the backend:

**“Can I see and control my product without fighting my frontend?”**

If yes, good. That’s the job.

---

## What This Is

Skelly Admin is a **Vite + React admin application** designed to pair cleanly with Skelly Backend.

It is built for:

* Internal admin tools
* Operator dashboards
* Early product control panels
* Typed, end-to-end workflows

It assumes:

* You control the backend
* You value clarity over polish
* You want types to flow, not drift

---

## What This Is (and Can Become)

Right now (v0), Skelly Admin is:

* A Vite + React app
* Typed end-to-end with tRPC
* Styled with Tailwind + shadcn/ui
* Theme-aware (light/dark)

It is meant to be:

* Forked
* Hacked
* Extended
* Re-skinned

If you want to:

* Add auth
* Replace the UI kit
* Split roles and permissions
* Turn this into a full dashboard

Do it.

This repo is a starting point, not a finished product.

---

## Tech Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS + shadcn/ui
* **Data:** tRPC + TanStack Query
* **Theming:** next-themes
* **Runtime:** Browser

No Next.js. No server components. No magic.

---

## Project Structure

```
skelly-admin/
├─ src/
│  ├─ components/
│  │  ├─ ui/                # shadcn components
│  │  ├─ layout/            # app shell, sidebar, toolbar
│  │  ├─ dashboard/         # dashboard widgets
│  │  ├─ mode-toggle.tsx    # theme switcher
│  │  └─ theme-provider.tsx
│  ├─ routes/               # login, dashboard, settings
│  ├─ hooks/
│  ├─ types/                # nav config types
│  ├─ lib/
│  │  ├─ app-router.d.ts    # generated backend contract (bun run sync:types)
│  │  └─ trpc.ts            # typed tRPC client
│  ├─ App.tsx               # routes
│  ├─ main.tsx              # providers + bootstrap
│  └─ index.css
├─ public/
├─ scripts/
│  └─ sync-types.ts        # refreshes app-router.d.ts from skelly-backend
├─ package.json
├─ vite.config.ts
└─ README.md
```

---

## How It Connects to the Backend

Skelly Admin talks to Skelly Backend via **tRPC**.

Types flow from the backend router:

```
AppRouter -> @trpc/react-query -> UI
```

If the backend changes, sync and the frontend knows. If types break, the build breaks.

The `AppRouter` type lives in this repo as a generated file, `src/lib/app-router.d.ts`,
so a fresh clone typechecks and builds with no backend anywhere near it. It is not live:
when the backend's router changes, refresh it and commit the result.

```bash
bun run sync:types   # emits the contract from ../skelly-backend and copies it in
```

Set `SKELLY_BACKEND` to the backend's path if it is not checked out beside this repo.

The trade: a generated file can go stale. This swaps "always live, often broken" for
"explicitly refreshed, always green". The backend's own `bun run build` emits the same
file, so the refresh is one copy away from automatic — but someone can still forget, and
the types are stale until the next sync.

`bun run build` runs `tsc -b` before Vite, so a type error fails the build instead of
being stripped.

---

## Local Development

Make sure the backend is running first.

Then:

```bash
bun install
bun run dev
```

Admin app:

```
http://localhost:5173
```

Backend expected at:

```
http://localhost:3001/trpc
```

---

## Health Check

The default UI performs a simple health check:

```
health.check
```

If you see data rendered on screen, the pipe is connected.

If not, fix the backend first.

---

## Styling and UI

This project uses:

* Tailwind for layout and spacing
* shadcn/ui for primitives
* Minimal global CSS

The goal is:

* Fast iteration
* Predictable components
* Easy replacement

Design systems should serve the product, not the other way around.

---

## Philosophy (Short Version)

* UI is a tool, not a trophy
* Types are part of the UX
* Internal tools deserve clarity
* Delete components aggressively

Skelly Admin is intentionally boring.
Boring scales.

---

## When to Outgrow This

You will know it’s time when:

* Routing becomes complex
* Permissions need structure
* Multiple operators exist
* The UI stops fitting on one screen

Until then, this is enough.

---

## Final Note ☠️

If this admin feels almost too simple,
that’s correct.

Build the product first.
Polish later.

---

## Project Docs

* [ARCHITECTURE.md](./ARCHITECTURE.md) - how it is put together and why
* [SECURITY.md](./SECURITY.md) - what it touches, and what it is not
* [LICENSE](./LICENSE) - MIT
* [Skellys](https://github.com/yeahitsmejayyy/skellys) - install all three as agent skills
