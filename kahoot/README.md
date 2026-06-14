# Kahoot-квизы лагеря

Готовые квизы для ежедневной паузы. Один квиз на день.

| День | Папка | Тема |
|------|-------|------|
| 1 | [day1/](day1/) | Инструменты и vibe coding (git, GitHub, Supabase, Vercel, Codex) |
| 2 | [day2/](day2/) | Git, деплой, Supabase, главный цикл |
| 3 | [day3/](day3/) | Идея и цикл с Codex, хороший промпт |
| 4 | [day4/](day4/) | Память, вход, профиль, RLS, миграции |
| 5 | [day5/](day5/) | AI внутри продукта, system prompt, guardrails, Edge Function |
| 6 | [day6/](day6/) | Дорогой дизайн + крючки удержания (streak/XP/лидерборд) |
| 7 | [day7/](day7/) | Реальные пользователи и онбординг (30 секунд, empty state) |
| 8 | [day8/](day8/) | Доводим до ума: баги, чек-лист, проверка на телефоне |

## Как запустить

1. Открой `dayN/quiz.csv` — это формат импорта Kahoot.
2. На kahoot.com → **Create** → **Import questions** (spreadsheet) → загрузи `quiz.csv`.
3. Проверь правильные ответы (`quiz.md` — человекочитаемая версия с пометкой ✅).
4. Запусти **Play → Teach**, покажи PIN/QR на экране (после обеда, по расписанию дня).

Формат CSV: `Question, Answer 1..4, Time limit (sec), Correct answer(s)`.
Колонка `Correct answer(s)` — номер правильного варианта (1–4).
