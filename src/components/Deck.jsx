import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide.jsx';

export default function Deck({ day }) {
  const [i, setI] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const total = day.slides.length;

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
      } else if (e.key.toLowerCase() === 'n') {
        setShowNotes((s) => !s);
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

  const slide = day.slides[i];

  return (
    <div className="deck">
      <div className="bar">
        <div className="bar__left">
          <Link to="/">← Все дни</Link>
          <span>
            {day.emoji} {day.title}
          </span>
        </div>
        <div className="bar__left">
          <button onClick={() => setShowNotes((s) => !s)}>
            Заметки (N): {showNotes ? 'вкл' : 'выкл'}
          </button>
          <button onClick={toggleFullscreen}>Фуллскрин (F)</button>
          <span className="counter">
            {i + 1} / {total}
          </span>
        </div>
      </div>

      <Slide slide={slide} />

      {showNotes && slide.speaker ? (
        <div className="notes">
          <b>Спикер:</b> {slide.speaker}
        </div>
      ) : null}

      <div className="progress" style={{ width: `${((i + 1) / total) * 100}%` }} />
    </div>
  );
}
