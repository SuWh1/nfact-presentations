import { useEffect } from 'react';

const languages = [
  { code: 'ru', label: 'RU', ariaLabel: 'Русский' },
  { code: 'en', label: 'EN', ariaLabel: 'English' },
];

export default function LanguageSwitcher({ language, onChange, compact = false }) {
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className={'language-switcher' + (compact ? ' language-switcher--compact' : '')}>
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          className={'language-switcher__button' + (language === item.code ? ' is-active' : '')}
          aria-label={item.ariaLabel}
          aria-pressed={language === item.code}
          onClick={() => onChange(item.code)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
