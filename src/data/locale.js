import { daysRu } from './days.js';
import { daysEn } from './days.en.js';

export const supportedLanguages = ['ru', 'en'];

export function normalizeLanguage(value) {
  return supportedLanguages.includes(value) ? value : 'ru';
}

export function getDays(language) {
  return normalizeLanguage(language) === 'en' ? daysEn : daysRu;
}

export function getLocalizedDay(id, language) {
  return getDays(language).find((day) => day.id === Number(id));
}

export const ui = {
  ru: {
    homeTitle: 'Презентации по дням',
    homeDescription:
      'Слайды для показа детям. На компьютере — стрелки ←/→, F — полный экран. На телефоне — свайп или тап по краям экрана. Промпты копируются одной кнопкой.',
    day: 'День',
    slides: 'слайдов',
    soon: 'скоро',
    allDays: '← Дни',
    notFound: 'День не найден',
    fullscreen: '⛶ Экран',
    fullscreenTitle: 'Полный экран (F)',
  },
  en: {
    homeTitle: 'Presentations by day',
    homeDescription:
      'Slides for the camp. On a computer, use ←/→ and F for fullscreen. On a phone, swipe or tap the screen edges. Copy prompts with one button.',
    day: 'Day',
    slides: 'slides',
    soon: 'coming soon',
    allDays: '← Days',
    notFound: 'Day not found',
    fullscreen: '⛶ Screen',
    fullscreenTitle: 'Fullscreen (F)',
  },
};
