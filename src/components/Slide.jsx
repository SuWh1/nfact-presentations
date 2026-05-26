import Prompt from './Prompt.jsx';
import Visual from './Visual.jsx';

export default function Slide({ slide }) {
  const { kicker, title, hero, body, list, pills, visual, note, prompt, split } = slide;

  const text = (
    <>
      {kicker ? <div className="slide__kicker">{kicker}</div> : null}
      {title ? (
        <h1 className={'slide__title' + (hero ? ' slide__title--hero' : '')}>{title}</h1>
      ) : null}

      {body ? <p className="slide__body">{body}</p> : null}

      {list ? (
        <ul className="slide__list">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : null}

      {pills ? (
        <div style={{ marginTop: 22 }}>
          {pills.map((p, i) => (
            <span className="pill" key={i}>
              {p}
            </span>
          ))}
        </div>
      ) : null}

      {!split ? <Visual visual={visual} /> : null}

      {prompt ? <Prompt label={prompt.label} text={prompt.text} /> : null}

      {note ? <div className="slide__note">{note}</div> : null}
    </>
  );

  if (split && visual) {
    return (
      <section className="slide slide--split">
        <div className="slide__col slide__col--text">{text}</div>
        <div className="slide__col slide__col--media">
          <Visual visual={visual} />
        </div>
      </section>
    );
  }

  return (
    <section className={'slide' + (hero ? ' slide--hero' : '')}>
      {hero ? (
        <img
          className="slide__logo"
          src={import.meta.env.BASE_URL + 'nfactorial-logo.png'}
          alt="nFactorial"
        />
      ) : null}
      {text}
    </section>
  );
}
