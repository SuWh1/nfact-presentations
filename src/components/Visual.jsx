// visual can be:
//  - string  → placeholder ("capture this screenshot yourself")
//  - { type: 'logos', items: ['telegram','tiktok'] }
//  - { type: 'code', code: '...' }
//  - { type: 'table', head: [...], rows: [[...]] }
//  - { type: 'image', src, caption }

import { useLightbox } from './Lightbox.jsx';

const resolve = (src) =>
  /^https?:\/\//.test(src) ? src : import.meta.env.BASE_URL + src;

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
        <img
          src={resolve(visual.src)}
          alt={visual.caption || ''}
          loading="lazy"
          style={{ cursor: 'zoom-in' }}
          onClick={() => open(resolve(visual.src))}
        />
        {visual.caption ? <figcaption>{visual.caption}</figcaption> : null}
      </figure>
    );
  }

  if (visual.type === 'images') {
    const cls =
      `v-gallery v-gallery--${visual.items.length}` + (visual.cover ? ' v-gallery--cover' : '');
    return (
      <div className={cls}>
        {visual.items.map((src, i) => (
          <img
            key={i}
            src={resolve(src)}
            alt=""
            loading="lazy"
            style={{ cursor: 'zoom-in' }}
            onClick={() => open(resolve(src))}
          />
        ))}
      </div>
    );
  }

  return null;
}
