import { useState } from 'react';

export default function Prompt({ label, text, language = 'ru' }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="prompt">
      <div className="prompt__head">
        <span className="prompt__label">{label || (language === 'en' ? 'Prompt' : 'Промпт')}</span>
        <button className="prompt__copy" onClick={copy}>
          {copied
            ? language === 'en' ? 'Copied ✓' : 'Скопировано ✓'
            : language === 'en' ? 'Copy' : 'Копировать'}
        </button>
      </div>
      <div className="prompt__text">{text}</div>
    </div>
  );
}
