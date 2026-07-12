import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Deck({ day, language, onLanguageChange, labels }) {
  const [i, setI] = useState(0);
  const total = day.slides.length;
  const touchX = useRef(null);

  const go = useCallback(
    (delta) => setI((prev) => Math.min(Math.max(prev + delta, 0), total - 1)),
    [total]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        go(1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        go(-1);
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      } else if (e.key === 'Home') {
        setI(0);
      } else if (e.key === 'End') {
        setI(total - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, total]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  const onTouchStart = (e) => {
    touchX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const slide = day.slides[i];

  return (
    <div className="deck" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="bar">
        <div className="bar__side">
          <Link to={language === 'en' ? '/?lang=en' : '/'}>{labels.allDays}</Link>
        </div>
        <div className="bar__center">
          <img
            className="bar__logo"
            src={import.meta.env.BASE_URL + 'nfactorial-logo.png'}
            alt="nFactorial"
          />
          <span className="bar__day">
            {day.emoji} {day.title}
          </span>
        </div>
        <div className="bar__side bar__side--right">
          <LanguageSwitcher language={language} onChange={onLanguageChange} compact />
          <button onClick={toggleFullscreen} title={labels.fullscreenTitle}>
            {labels.fullscreen}
          </button>
          <span className="counter">
            {i + 1} / {total}
          </span>
        </div>
      </div>

      <Slide slide={slide} language={language} />

      <a
        className="notion-qr"
        href="https://www.notion.so/nfactorial-group/Batch-251-Teens-36827798ee09802e9c3ae66ec31609a3?source=copy_link"
        target="_blank"
        rel="noreferrer"
        title="Notion · Batch 251 Teens"
      >
        <img src={import.meta.env.BASE_URL + 'notion-qr.png'} alt="QR · Notion Batch 251 Teens" />
        <span>Notion</span>
      </a>

      <div className="navzones" aria-hidden="true">
        <button className="navzone navzone--prev" onClick={() => go(-1)} tabIndex={-1} />
        <button className="navzone navzone--next" onClick={() => go(1)} tabIndex={-1} />
      </div>

      <div className="progress" style={{ width: `${((i + 1) / total) * 100}%` }} />
    </div>
  );
}
