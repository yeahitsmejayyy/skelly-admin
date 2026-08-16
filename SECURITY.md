# Security Policy

Skelly Admin is a starting point, not a finished product. Treat this policy the
same way: it covers the template as shipped, not whatever you build on top of it.

---

## What Is Supported

Only the latest commit on `main` is supported.

This repo is a template. There are no releases, no version branches, and no
backports. If you forked it, your fork is yours — fixes here do not reach it
automatically.

---

## What This Actually Is

Skelly Admin is a browser-only Vite + React app. It has no server, no build-time
code generation, and no install scripts. At runtime it does one thing that leaves
the browser: it talks to a backend you point it at over tRPC (`src/lib/trpc.ts`).

There is no auth in this template. There are no roles, no permissions, and no
session handling. The default UI renders a health check and nothing else.

That means the security of anything you deploy is mostly decided by the backend
you connect and the code you add — not by this repo.

---

## Before You Ship This

This template is expected to be reviewed and adapted. At minimum:

* Add authentication and authorization — there is none here
* Set the backend URL per environment instead of the hardcoded default
* Decide what an operator is allowed to see and do before exposing the app
* Audit dependencies (`bun.lock` / `package.json`) on your own schedule

If you deploy it as-is, you are deploying an unauthenticated admin UI.

---

## Reporting

Open an issue: <https://github.com/yeahitsmejayyy/skelly-admin/issues>

If it is a vulnerability, say so in the **title** and leave the details out.
Do not post a reproduction, an exploit, or affected URLs in a public issue —
wait until there is a private channel to send them to.

For anything else — a bad default, a misleading doc, a dependency worth
replacing — a normal issue is fine.
