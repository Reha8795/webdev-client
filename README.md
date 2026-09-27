# webdev-client — A1: HTML User Interfaces

Next.js (App Router + TypeScript) project for A1. Structure-first; visual polish is A2.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000 → redirects to `/account/signin`.
Labs live at `/labs`.

## Deploy (required for submission)
1. Create a **public** GitHub repo named `webdev-client`, push this code.
2. On Vercel: **Add New → Project → Import** `webdev-client`.
3. In the Vercel project: **Settings → Deployment Protection → OFF** (graders must open it without logging in).
4. Submit the public Vercel URL on the course site (GitHub URL optional but graders look for it + the `wd-github` link on Labs).

## Route map
| URL | Purpose |
|---|---|
| `/` | redirect → `/account/signin` |
| `/labs` | Labs index (Lab 1–5 + Kambaz link, `wd-github`, name) |
| `/labs/lab1` | All Lab 1 components |
| `/account/signin` `/signup` `/profile` | Account screens |
| `/dashboard` | 3 CourseCards → `/courses/[cid]/home` |
| `/courses/[cid]/home` | Modules + Course Status |
| `/courses/[cid]/modules` | Modules |
| `/courses/[cid]/assignments` | Assignments list |
| `/courses/[cid]/assignments/[aid]` | Assignment Editor |
| piazza / zoom / quizzes / grades / people | placeholders |

## ⚠️ Personalize before you submit (search the code for these)
- **Full Canvas name**: currently `Reha Jambavadekar` in `wd-name` (labs index, Lab 1 page). Must match the roster **exactly** (first then last). Add your real **section**.
- **`wd-github`** (2 places: `labs/page.tsx`, `labs/lab1/page.tsx`) — replace `your-username` with your real repo URL.
- **`wd-your-github`** in `AnchorTag.tsx` — your real GitHub profile.
- **`teslabot.jpg`** in `public/images/` is a placeholder — drop in the real image (Images.tsx). `wd-your-image` also points at it; swap to your own photo/image if you like.
- Personal content marked `{/* ← customize */}` (paragraphs, recipe, books, goals) — make it genuinely yours.
- **`wd-toc-book-link`** (TOC.tsx) — labeled "Chapter 1"; point it at the actual Chapter 1 book URL if you have the direct link.

## Manual-check rows (staff grade on your deploy; Run checks won't mark them)
Forms With-AI (reuses `wd-your-form`), both HighlightedParagraph rows, both HighlightedBox rows, and the TOC personal note. These are built and rendered — just make sure the content is real/yours.
