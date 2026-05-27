# Kahoot-квизы лагеря

Готовые квизы для ежедневной паузы. Один квиз на день.

| День | Папка | Тема |
|------|-------|------|
| 1 | [day1/](day1/) | Vibe coding, промпты, Lovable |
| 2 | [day2/](day2/) | Память, база данных, архитектура |
| 3 | [day3/](day3/) | Дорогой дизайн, цвета, анимации |
| 4 | [day4/](day4/) | Геймификация, крючки, Hook, Octalysis |
| 5 | [day5/](day5/) | AI внутри продукта, system prompt, guardrails, DeepSeek |
| 6 | [day6/](day6/) | Фидбэк, правило 5 секунд, запуск к людям |
| 7 | [day7/](day7/) | Онбординг, первый экран, success state, tooltips |

## Как запустить

1. Открой `dayN/quiz.csv` — это формат импорта Kahoot.
2. На kahoot.com → **Create** → **Import questions** (spreadsheet) → загрузи `quiz.csv`.
3. Проверь правильные ответы (`quiz.md` — человекочитаемая версия с пометкой ✅).
4. Запусти **Play → Teach**, покажи PIN/QR на экране (слайд «Пауза · Kahoot»).

Формат CSV: `Question, Answer 1..4, Time limit (sec), Correct answer(s)`.
Колонка `Correct answer(s)` — номер правильного варианта (1–4).
