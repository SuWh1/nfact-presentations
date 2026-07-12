import { Link, useSearchParams } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher.jsx';
import { getDays, normalizeLanguage, ui } from '../data/locale.js';

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const language = normalizeLanguage(searchParams.get('lang'));
  const days = getDays(language);
  const labels = ui[language];
  const logo = import.meta.env.BASE_URL + 'nfactorial-logo.png';

  const changeLanguage = (nextLanguage) => {
    setSearchParams(nextLanguage === 'ru' ? {} : { lang: nextLanguage });
  };

  return (
    <div className="home">
      <div className="home__header">
        <div>
          <img className="home__logo" src={logo} alt="nFactorial" />
          <div className="home__brand">nFactorial Teens</div>
        </div>
        <LanguageSwitcher language={language} onChange={changeLanguage} />
      </div>
      <h1 className="home__title">{labels.homeTitle}</h1>
      <p className="home__sub">{labels.homeDescription}</p>

      <div className="grid">
        {days.map((d) => (
          <Link
            key={d.id}
            to={d.ready ? `/day/${d.id}${language === 'en' ? '?lang=en' : ''}` : '#'}
            className={'card' + (d.ready ? '' : ' card--soon')}
          >
            <div className="card__num">{labels.day} {d.id}</div>
            <div className="card__emoji">{d.emoji}</div>
            <div className="card__title">{d.title}</div>
            <div className="card__meta">
              {d.subtitle} · {d.ready ? `${d.slides.length} ${labels.slides}` : labels.soon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
