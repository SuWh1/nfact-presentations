import Prompt from './Prompt.jsx';
import Visual from './Visual.jsx';

export default function Slide({ slide }) {
  const { kicker, title, hero, body, list, pills, visual, note, prompt } = slide;

  return (
    <section className={'slide' + (hero ? ' slide--hero' : '')}>
      {hero ? (
        <img
          className="slide__logo"
          src={import.meta.env.BASE_URL + 'nfactorial-logo.png'}
          alt="nFactorial"
        />
      ) : null}
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

      <Visual visual={visual} />

      {prompt ? <Prompt label={prompt.label} text={prompt.text} /> : null}

      {note ? <div className="slide__note">{note}</div> : null}
    </section>
  );
}
