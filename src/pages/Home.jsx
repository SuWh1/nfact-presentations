import { Link } from 'react-router-dom';
import { days } from '../data/days.js';

export default function Home() {
  const logo = import.meta.env.BASE_URL + 'nfactorial-logo.png';
  return (
    <div className="home">
      <img className="home__logo" src={logo} alt="nFactorial" />
      <div className="home__brand">nFactorial Teens</div>
      <h1 className="home__title">Презентации по дням</h1>
      <p className="home__sub">
        Слайды для показа детям. На компьютере — стрелки ←/→, F — полный экран. На телефоне —
        свайп или тап по краям экрана. Промпты копируются одной кнопкой.
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
