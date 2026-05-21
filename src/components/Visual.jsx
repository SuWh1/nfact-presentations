// visual can be:
//  - string  → placeholder ("capture this screenshot yourself")
//  - { type: 'logos', items: ['telegram','tiktok'] }
//  - { type: 'code', code: '...' }
//  - { type: 'table', head: [...], rows: [[...]] }
//  - { type: 'image', src, caption }

export default function Visual({ visual }) {
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
        {visual.items.map((slug) => (
          <img
            key={slug}
            src={`https://cdn.simpleicons.org/${slug}`}
            alt={slug}
            height="64"
            loading="lazy"
          />
        ))}
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
        <img src={visual.src} alt={visual.caption || ''} loading="lazy" />
        {visual.caption ? <figcaption>{visual.caption}</figcaption> : null}
      </figure>
    );
  }

  return null;
}
