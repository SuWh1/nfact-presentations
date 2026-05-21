import { useParams, Link } from 'react-router-dom';
import { getDay } from '../data/days.js';
import Deck from '../components/Deck.jsx';

export default function DeckPage() {
  const { id } = useParams();
  const day = getDay(id);

  if (!day) {
    return (
      <div className="home">
        <h1 className="home__title">День не найден</h1>
        <Link to="/">← Все дни</Link>
      </div>
    );
  }

  return <Deck day={day} />;
}
