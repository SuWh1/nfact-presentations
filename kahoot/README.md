# Kahoot-квизы лагеря

Готовые квизы для ежедневной паузы. Один квиз на день.

| День | Папка | Тема |
|------|-------|------|
| 1 | [day1/](day1/) | Vibe coding, промпты, Lovable |

## Как запустить

1. Открой `dayN/quiz.csv` — это формат импорта Kahoot.
2. На kahoot.com → **Create** → **Import questions** (spreadsheet) → загрузи `quiz.csv`.
3. Проверь правильные ответы (`quiz.md` — человекочитаемая версия с пометкой ✅).
4. Запусти **Play → Teach**, покажи PIN/QR на экране (слайд «Пауза · Kahoot»).

Формат CSV: `Question, Answer 1..4, Time limit (sec), Correct answer(s)`.
Колонка `Correct answer(s)` — номер правильного варианта (1–4).
