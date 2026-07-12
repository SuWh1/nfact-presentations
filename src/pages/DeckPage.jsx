import { useParams, Link, useSearchParams } from 'react-router-dom';
import { getLocalizedDay, normalizeLanguage, ui } from '../data/locale.js';
import Deck from '../components/Deck.jsx';

export default function DeckPage() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const language = normalizeLanguage(searchParams.get('lang'));
  const day = getLocalizedDay(id, language);
  const labels = ui[language];

  const changeLanguage = (nextLanguage) => {
    setSearchParams(nextLanguage === 'ru' ? {} : { lang: nextLanguage });
  };

  if (!day) {
    return (
      <div className="home">
        <h1 className="home__title">{labels.notFound}</h1>
        <Link to={language === 'en' ? '/?lang=en' : '/'}>{labels.allDays}</Link>
      </div>
    );
  }

  return <Deck day={day} language={language} onLanguageChange={changeLanguage} labels={labels} />;
}
