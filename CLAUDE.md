# CLAUDE.md — nFactorial Teens curriculum

This repo is the **kids' presentation site** for the nFactorial Teens camp. But the camp
curriculum lives in **two places at once**: this site AND a Notion workspace. They must
stay in sync.

## CRITICAL RULE: any curriculum change must be synced across ALL surfaces

When you change a day's content, a prompt, the schedule, the Stripe/analytics decision,
age wording, idea lists, references, etc. — **do not change it in only one place.** Apply
the same change to every surface below that carries it, then verify nothing was missed.

If a change only makes sense for one audience (e.g. a mentor-only framework reference),
say so explicitly — otherwise assume it belongs everywhere.

### The surfaces (all must agree)

1. **Site slide decks** — `src/data/days.js` (this repo). The decks shown to kids each day.
   - No schedule/timetable lives here — only slide content. Schedule changes do NOT apply.
   - After editing, run `npm run build` to verify it compiles.

2. **Notion — Mentor day plans** — pages titled `День N — <English subtitle>`
   (page IDs start `3654e3c8…`). The hour-by-hour mentor scripts. Source of truth for timing.

3. **Notion — Kids day plans** — pages titled `День N — <Russian title>`, under **For Kids**
   (page IDs start `3664e3c8…`). Kid-facing guides. No clock schedule.

4. **Notion — shared pages**: `nFactorial School`, `Adaptive Tracks`, `For Parents`,
   `💡 Идеи` (idea bank), and the master `Шаблон дня` block on the `🚀 nFactorial Teens` root.

### Sync checklist before declaring a curriculum change done

- [ ] Site `days.js` updated + `npm run build` green
- [ ] Mentor Notion page(s) updated
- [ ] Kids Notion page(s) updated (or explicitly noted as mentor-only)
- [ ] Shared pages checked (School / Adaptive Tracks / For Parents / Идеи / Шаблон дня)
- [ ] Searched Notion for stale copies of the old wording (e.g. removed "Stripe", "14+")
- [ ] **Slide ORDER matches the mentor plan order** (see below)

### ALWAYS sync Notion, and keep the ORDER matched

Editing or building a day is NOT done until BOTH happen:

1. **Sync all three text surfaces** — site `days.js`, mentor Notion, kids Notion. Never update
   only the site. If Notion is disconnected, say so and sync as soon as it reconnects; don't
   silently skip it.
2. **Match the order.** The site slide sequence must follow the **mentor plan's section order**
   for that day (recap → safety → concept → LIVE → prompts → tools → Kahoot → workshop →
   your-turn → Testing Party → итог). Before finishing a day: fetch the mentor page, list its
   blocks top-to-bottom, and confirm the slides appear in the same order. Move slides to match —
   don't leave the deck and the plan in different sequences.

Per-day workflow: build/edit site slides → fetch mentor page, align order → update mentor page →
update kids page (kid-facing tone) → `npm run build` → commit + push.

## BATCH 2 (current) — stack switch from Lovable to real-world dev

Batch 1 ran on **Lovable** and it's now retired: token-metered, kids burned €700 in 3 days.
Batch 2 (24 kids) runs on the **real developer stack** — flat monthly cost, real skills.

- **Tools (locked):** **Codex (4 shared accounts, ~6 kids each) + Claude (1 account)**. Codex is
  the everyday tool; Claude/Claude Code is the premium tool for the mentor + the fastest kids.
- **Stack (locked):** **Vite + React + TypeScript + Supabase + Vercel**, with **GitHub + git +
  Node + VSCode** as the local toolchain. Supabase = managed DB + auth + storage (no server to
  run). Vercel = auto-deploy on every `git push`, plus preview URLs per branch.
- **Per-kid infrastructure:** each kid owns **their own GitHub repo + Supabase project + Vercel
  project**. Fully isolated; they keep everything after camp.
- **Starter template repo:** `presentations/nfact-teens-starter/` (sibling of `nfact-presentations/`).
  Vite+React+TS pre-wired to Supabase (env vars), example table + auth + profile, `vercel.json`,
  `.env.example`, kid-readable README. Kids click **"Use this template"** on GitHub — they do NOT
  scaffold from zero. The mentor uploads this repo to GitHub before camp and shares its link.
- **The Codex loop (the core skill):** *prompt Codex → read the diff → does it still run + does
  Vercel build pass → commit → auto-deploy*. Reading/approving real code changes is new vs Lovable's
  sandbox — teach the "does it run?" checkpoint.

## Locked curriculum decisions (don't silently reverse)

- **AI safety is Notion-only, NOT on slides.** Batch 2 removes all AI-safety slides from `days.js`.
  KEEP the AI-safety blocks in the Notion mentor + kids pages (still part of the daily plan, just
  not projected). Never add an AI-safety slide back to the deck.
- **No Stripe.** Removed everywhere (doesn't work in the US). Payments are never part of the build;
  the "real users" day is about sharing the live link + collecting feedback, not monetization.
- **Tone:** kids are 14–16 and tech-savvy. No Gen-Alpha slang, no babyish/condescending
  explanations, no "18+"/"14+" framing — soften to "only friendly topics" etc.
- **Palette:** slides use the premium Claude palette (cream `#F5F4EF`, clay `#D97757`,
  ink `#1A1A1A`, Inter). Product screenshots can be bright; slides stay premium.
- **Ideal day schedule:** front-load teaching (lecture + LIVE workshop in the morning),
  then ~3.5h of self-building split around a 30-min lunch, 5-min morning exercise, daily
  Kahoot, mid-morning 15-min Trivia, phones only at lunch. Lives in mentor pages +
  `Шаблон дня` + For Parents (not on the site).
- **10-day shape (batch 2):** Days 1–2 = setup (install + accounts + first deploy live).
  Days 3–7 = building (3 ideas+first feature, 4 DB+auth+profile combined, 5 AI, 6 design+gamification,
  7 real users). Days 8–10 = demo prep (8 adjustments/no-new-topic, 9 rehearsal+pitch, 10 Demo Day).
- **Combine fast days:** kids move fast — DB + auth + profile is ONE day; gamification (streaks/XP/
  leaderboards) is folded into the design/polish day, never its own day.
- **Idea ambition:** the goal is a product with real-world impact that **could be sold** —
  hard but achievable with Codex in 2 weeks. Lead with sellable SaaS/tools + games people
  actually play & pay for (Wordle-type daily puzzles, viral quizzes, idle). NOT throwaway
  childish clones. Games are welcome (incl. Flappy/arcades) — only avoid heavy 3D and
  realtime multiplayer (scope, not tooling). Idea bank = `💡 Идеи`.
  Filter test: "would someone pay $1 for this?" Beginners may start simple as a ramp.
- **Kahoot quizzes are real files**, not just a schedule line. Ready quizzes live in
  `kahoot/dayN/` (this repo): `quiz.md` (readable + ✅ answers) and `quiz.csv` (Kahoot import).
  They are ALSO mirrored in Notion under the **🎲 Kahoot — квизы по дням** folder (one sub-page
  per day, questions + ✅ answers). When you add/change a day's quiz, update both repo + Notion.
- **Ship daily:** every building day ends with a `git push` → Vercel auto-deploys → a fresh live
  URL by 15:00. The product must always work, even on crutches.

## Images in slides — always check size & shape, pick the right layout

Images broke layout twice (letterbox frames bigger than the photo; a square image
pushing all text off-screen). Before adding any image to `days.js`:

1. **Check intrinsic dimensions** (`file public/<img>` or `sips -g pixelWidth -g pixelHeight`).
   Always pass `w`/`h` on `{type:'image'|'images'}` entries — this reserves space so text
   doesn't jump while the image loads (CLS fix in `Visual.jsx`).
2. **Match the visual to the shape:**
   - **Tall / square image** (ratio ≲ 1.3, e.g. ikigai, portrait screenshot) → put it on a
     `split: true` slide (image one column, text the other). A big square stacked above/below
     text overflows the slide.
   - **Wide-short image** (ratio ≳ 2, e.g. an input bar) → single `{type:'image'}`, it sits
     fine inline; the frame hugs it (`.v-image` never letterboxes).
   - **Set of screenshots** → `{type:'images'}` grid. Tiles use `object-fit: contain` (whole
     image visible, may show a frame) and collapse to 2-up/1-up on narrow screens. Do NOT force
     `cover`-crop on the default gallery — on mobile it turned the 3-up into unreadable slivers.
3. **Never leave a placeholder for something shown live** (mentor's own screen, Kahoot PIN
   generated at host time) — make it text, not a `📸 Скрин сюда` card.
4. Prefer a **built diagram** (`flow`, `compare`, `login`, `mvp`, `palette`, `table`, `code`
   visual types) over a screenshot placeholder when the concept is explanatory rather than a real
   UI capture.

## Default to self-made visuals, NOT photos

A text-only slide should get a **built visual**, not a photo. Build it yourself with the existing
visual types (`flow`, `compare`, `palette`, `mvp`, `table`, `code`, `logos`) — these are on-brand,
never break layout, and need no asset. Add a new visual type to `Visual.jsx` if a concept needs
one. **Don't reach for a photo just to fill space.**

Use a real photo ONLY when the slide genuinely needs a specific real-world capture (a UI
screenshot of Codex / VSCode / Supabase / Vercel, the MVP cartoon). In that case:
- If the photo already exists in `public/`, use it (with `w`/`h`, right layout per the rules above).
- If it must be supplied later, leave a **placeholder** — the `visual: 'описание…'` string renders
  a `📸 Скрин сюда:` card. Describe exactly what photo goes there so it's obvious what to capture.
- Never leave a placeholder for something the mentor shows live (their own screen, a Kahoot PIN).

## Keep slide text short enough to fit one screen — especially in `split: true`

Slides DON'T scroll on desktop; whatever overflows the viewport is silently cut off. This
overflowed three times in a row (deepfake, gallery) — treat it as the #1 recurring bug.

**Why it happens:** the title font is huge (`clamp(30px, 5.2vw, 64px)`) and Russian text wraps
wide, so a long title alone can eat 4 lines. In `split: true` the WHOLE text stack (kicker +
title + body + list + note) is crammed into a ~half-width column — the big title wraps even
more, and body + note fall off the bottom.

**Budgets — stay under these:**

| field | full-width slide | `split: true` slide |
|-------|------------------|---------------------|
| `title` | ≤ ~40 chars (≤ 2 lines) | ≤ ~28 chars (it wraps to 3–4 lines in half width) |
| `body` | ≤ ~240 chars / 3 sentences | ≤ ~110 chars / 2 short sentences |
| `note` | 1 short line | 1 short line (or drop it) |

**Rules:**
- On a `split` slide, pick ONE of {long body} or {note} — never both long. Push everything
  else into `speaker` (presenter notes, NOT rendered on the slide face).
- A `list` of 3+ items on a `split` slide usually overflows — make it full-width, or convert
  to a `flow`/`compare` visual on a `split`.
- Shorten the TITLE first when something doesn't fit — it costs the most vertical space.
- Numbers/examples (e.g. "$25 млн", "10 секунд") can live in `speaker`; the slide face only
  needs the headline idea.
- After editing, actually look at the longest slide at 1920×1080 AND laptop 1440×900. If the
  bottom line is clipped, trim — don't ship it.
- **Gallery slides (`type: 'images'` with 3-4 wide screenshots) clip the bottom `note` almost
  every time** — the huge title + tall images fill the viewport. Default: keep title ≤22 chars
  AND push the explanation into `speaker`, not `note`. If you really want a `note`, drop the
  `kicker` and trim title to ≤18 chars to free vertical space. Caught 2026-05-31 — the games
  gallery (4 wide screenshots in 2×2) silently swallowed its note line.
- **Flow slides (`type: 'flow'` with 3 boxes) clip the bottom `note` when title wraps to 2
  lines OR body is more than 1 sentence.** The 3 flow boxes need vertical room; combined with
  huge title + multi-line body, a `note` at the bottom drops off. Default: title ≤25 chars
  (1 line), body ≤120 chars (1 sentence), no `note` — push elaboration into `speaker`. Caught
  2026-05-31 — the «Сначала через ChatGPT» slide hid its closing line.

## Site build

```bash
npm run dev      # local dev
npm run build    # TS check + Vite build — run before declaring site work done
```

Deploys to Vercel with clean URLs (`BrowserRouter` + `vercel.json` SPA rewrite, `base: '/'`).
