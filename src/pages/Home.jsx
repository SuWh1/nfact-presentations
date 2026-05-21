import { Link } from 'react-router-dom';
import { days } from '../data/days.js';

export default function Home() {
  return (
    <div className="home">
      <div className="home__brand">nFactorial Teens</div>
      <h1 className="home__title">Презентации по дням</h1>
      <p className="home__sub">
        Слайды для показа детям. Стрелки ←/→ листают, F — фуллскрин, N — заметки спикера.
        Промпты копируются одной кнопкой.
      </p>

      <div className="grid">
        {days.map((d) => (
          <Link
            key={d.id}
            to={d.ready ? `/day/${d.id}` : '#'}
            className={'card' + (d.ready ? '' : ' card--soon')}
          >
            <div className="card__num">День {d.id}</div>
            <div className="card__emoji">{d.emoji}</div>
            <div className="card__title">{d.title}</div>
            <div className="card__meta">
              {d.subtitle} · {d.ready ? `${d.slides.length} слайдов` : 'скоро'}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
