// visual can be:
//  - string  → placeholder ("capture this screenshot yourself")
//  - { type: 'logos', items: ['telegram','tiktok'] }
//  - { type: 'code', code: '...' }
//  - { type: 'table', head: [...], rows: [[...]] }
//  - { type: 'image', src, w, h, caption }   ← w/h reserve space, no layout jump
//  - { type: 'images', items: [{src,w,h} | 'a.png'], cover }
//  - { type: 'flow', steps: [{ emoji, title, sub }] }       ← boxes + arrows
//  - { type: 'compare', items: [{ tone:'bad'|'good', title, lines:[...] }] }
//  - { type: 'login' }                                      ← login/password card

import { useLightbox } from './Lightbox.jsx';

const resolve = (src) =>
  /^https?:\/\//.test(src) ? src : import.meta.env.BASE_URL + src;

function Img({ entry, className }) {
  const open = useLightbox();
  const src = typeof entry === 'string' ? entry : entry.src;
  const full = resolve(src);
  const dims = typeof entry === 'string' ? {} : { width: entry.w, height: entry.h };
  return (
    <img
      className={className}
      src={full}
      alt=""
      {...dims}
      loading="lazy"
      style={{ cursor: 'zoom-in' }}
      onClick={() => open(full)}
    />
  );
}

export default function Visual({ visual }) {
  const open = useLightbox();
  if (!visual) return null;

  if (typeof visual === 'string') {
    return (
      <div className="visual">
        📸 <b>Скрин сюда:</b> {visual}
      </div>
    );
  }

  if (visual.type === 'logos') {
    return (
      <div className="v-logos">
        {visual.items.map((slug) => {
          const src = `https://cdn.simpleicons.org/${slug}`;
          return (
            <img
              key={slug}
              src={src}
              alt={slug}
              height="64"
              loading="lazy"
              style={{ cursor: 'zoom-in' }}
              onClick={() => open(src)}
            />
          );
        })}
      </div>
    );
  }

  if (visual.type === 'code') {
    return <pre className="v-code">{visual.code}</pre>;
  }

  if (visual.type === 'flow') {
    return (
      <div className="v-flow">
        {visual.steps.map((s, i) => (
          <div className="v-flow__row" key={i}>
            <div className="v-flow__box">
              <div className="v-flow__emoji">{s.emoji}</div>
              <div className="v-flow__title">{s.title}</div>
              <div className="v-flow__sub">{s.sub}</div>
            </div>
            {i < visual.steps.length - 1 ? <div className="v-flow__arrow">→</div> : null}
          </div>
        ))}
      </div>
    );
  }

  if (visual.type === 'mvp') {
    const row = (data, tone) => (
      <div className={'v-mvp__row v-mvp__row--' + tone}>
        <div className="v-mvp__label">{tone === 'bad' ? '🚫' : '✅'} {data.label}</div>
        <div className="v-mvp__track">
          {data.steps.map((s, i) => (
            <div className="v-mvp__step" key={i}>
              <span className="v-mvp__chip">{s}</span>
              {i < data.steps.length - 1 ? <span className="v-mvp__arrow">→</span> : null}
            </div>
          ))}
        </div>
        <div className="v-mvp__cap">{data.caption}</div>
      </div>
    );
    return (
      <div className="v-mvp">
        {row(visual.bad, 'bad')}
        {row(visual.good, 'good')}
      </div>
    );
  }

  if (visual.type === 'compare') {
    return (
      <div className="v-compare">
        {visual.items.map((it, i) => (
          <div className={'v-compare__card v-compare__card--' + it.tone} key={i}>
            <div className="v-compare__head">{it.tone === 'bad' ? '🚫' : '✅'} {it.title}</div>
            <ul>
              {it.lines.map((l, j) => (
                <li key={j}>{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  if (visual.type === 'login') {
    return (
      <div className="v-login">
        <div className="v-login__row">
          <span className="v-login__label">Логин</span>
          <span className="v-login__value">···············</span>
        </div>
        <div className="v-login__row">
          <span className="v-login__label">Пароль</span>
          <span className="v-login__value">···············</span>
        </div>
        <div className="v-login__hint">lovable.dev — вписать перед занятием</div>
      </div>
    );
  }

  if (visual.type === 'table') {
    return (
      <table className="v-table">
        <thead>
          <tr>
            {visual.head.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visual.rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (visual.type === 'image') {
    return (
      <figure className="v-image">
        <Img entry={visual} />
        {visual.caption ? <figcaption>{visual.caption}</figcaption> : null}
      </figure>
    );
  }

  if (visual.type === 'images') {
    const cls =
      `v-gallery v-gallery--${visual.items.length}` + (visual.cover ? ' v-gallery--cover' : '');
    return (
      <div className={cls}>
        {visual.items.map((entry, i) => (
          <Img key={i} entry={entry} />
        ))}
      </div>
    );
  }

  return null;
}
