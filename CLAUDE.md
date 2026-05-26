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

## Locked curriculum decisions (don't silently reverse)

- **No Stripe.** Removed everywhere (doesn't work in the US). Day 8 afternoon = analytics
  for everyone + extra for fast kids (own domain, integrations, more real users).
- **Tone:** kids are 14–16 and tech-savvy. No Gen-Alpha slang, no babyish/condescending
  explanations, no "18+"/"14+" framing — soften to "only friendly topics" etc.
- **Palette:** slides use the premium Claude palette (cream `#F5F4EF`, clay `#D97757`,
  ink `#1A1A1A`, Inter). The Quiz Battle product itself stays bright; slides stay premium.
- **Ideal day schedule:** front-load teaching (lecture + LIVE workshop in the morning),
  then ~3.5h of self-building split around a 30-min lunch, 5-min morning exercise, daily
  Kahoot, mid-morning 15-min Trivia, phones only at lunch. Lives in mentor pages +
  `Шаблон дня` + For Parents (not on the site).
- **Idea ambition:** the goal is a product with real-world impact that **could be sold** —
  hard but achievable in Lovable in 2 weeks. Lead with sellable SaaS/tools + games people
  actually play & pay for (Wordle-type daily puzzles, viral quizzes, idle). NOT throwaway
  childish clones. Games are welcome (incl. Flappy/arcades) — only avoid heavy 3D and
  realtime multiplayer. Idea bank = `💡 Идеи`.
  Filter test: "would someone pay $1 for this?" Beginners may start simple as a ramp.
- **Lovable CAN do games (reversed 2026-05-26).** Earlier the deck banned Snake/Flappy
  ("needs a game engine") — that was wrong, verified in Lovable. Lovable handles real
  games: Flappy-style arcades, clickers, runners, puzzles, quizzes. Only **heavy 3D** and
  **realtime multiplayer / low-latency co-op** are out. Be generous with game ideas.
- **Kahoot quizzes are real files**, not just a schedule line. Ready quizzes live in
  `kahoot/dayN/` (this repo): `quiz.md` (readable + ✅ answers) and `quiz.csv` (Kahoot import).
- **Ship daily:** 10 releases in 10 days — by 15:00 each day a new live version is up. The
  product must always work, even on crutches.

## Site build

```bash
npm run dev      # local dev
npm run build    # TS check + Vite build — run before declaring site work done
```

Deploys to Vercel with clean URLs (`BrowserRouter` + `vercel.json` SPA rewrite, `base: '/'`).
