import { useState } from 'react';

export default function Prompt({ label, text }) {
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
      <button className="prompt__copy" onClick={copy}>
        {copied ? 'Скопировано ✓' : 'Копировать'}
      </button>
      {label ? <div style={{ opacity: 0.6, marginBottom: 10 }}>{label}</div> : null}
      {text}
    </div>
  );
}
