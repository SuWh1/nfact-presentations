import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const LightboxContext = createContext(() => {});

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }) {
  const [src, setSrc] = useState(null);
  const open = useCallback((s) => setSrc(s), []);

  useEffect(() => {
    if (!src) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setSrc(null);
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [src]);

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {src ? (
        <div className="lightbox" onClick={() => setSrc(null)}>
          <img src={src} alt="" onClick={(e) => e.stopPropagation()} />
          <button className="lightbox__close" onClick={() => setSrc(null)}>
            ✕
          </button>
        </div>
      ) : null}
    </LightboxContext.Provider>
  );
}
