import { useState, useRef } from "react";

export default function App() {
  const PREMIUM_LINK = "https://payhip.com/TU_PRODUCTO";
  const clickSound = useRef(null);

  const [view, setView] = useState("home");
  const [open, setOpen] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const products = [
    { id: 1, title: "Webs con IA", type: "premium", desc: "Crea sitios web con IA", full: "Contenido completo de webs con IA" },
    { id: 2, title: "Marketing viral", type: "premium", desc: "Estrategias virales", full: "Aprende marketing viral real" },
    { id: 3, title: "Ideas de negocio", type: "free", desc: "Ideas simples", full: "Ideas para emprender" },
    { id: 4, title: "Cómo vender online", type: "free", desc: "Guía básica", full: "Vende en internet paso a paso" },
  ];

  const goPremium = () => {
    playSound();
    window.open(PREMIUM_LINK, "_blank");
  };

  const toggleFav = (id) => {
    playSound();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const playSound = () => {
    try {
      const audio = new Audio(
        "https://assets.mixkit.co/sfx/preview/mixkit-click-234.wav"
      );
      audio.volume = 0.2;
      audio.play();
    } catch {}
  };

  const Page = ({ children }) => (
    <div style={styles.page}>{children}</div>
  );

  return (
    <div style={styles.app}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={{ letterSpacing: 1 }}>⚡ Prompt Forge</h2>

        <button onClick={() => {playSound(); setView("home");}} style={styles.sideBtn}>🏠 Inicio</button>
        <button onClick={() => {playSound(); setView("favorites");}} style={styles.sideBtn}>⭐ Favoritos</button>
        <button onClick={() => {playSound(); setView("premium");}} style={styles.sideBtn}>💎 Premium</button>

        <div style={styles.social}>
          <p style={{ fontSize: 12, opacity: 0.6 }}>Redes</p>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">YouTube</a>
        </div>
      </div>

      {/* MAIN */}
      <div style={styles.main}>

        {/* HOME */}
        {view === "home" && (
          <Page>
            <h1 style={styles.title}>Marketplace Digital</h1>

            <div style={styles.grid}>
              {products.map((p) => (
                <div
                  key={p.id}
                  style={styles.card}
                  onClick={() => {
                    playSound();
                    setOpen(p);
                  }}
                >
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>

                  <span style={{
                    ...styles.badge,
                    background: p.type === "free"
                      ? "rgba(34,197,94,0.2)"
                      : "rgba(139,92,246,0.25)"
                  }}>
                    {p.type === "free" ? "🆓 Gratis" : "💎 Premium"}
                  </span>

                  <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFav(p.id);
                      }}
                      style={{
                        ...styles.favBtn,
                        color: favorites.includes(p.id) ? "gold" : "white",
                        transform: favorites.includes(p.id) ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      {favorites.includes(p.id) ? "⭐" : "☆"}
                    </button>

                    {p.type === "premium" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goPremium();
                        }}
                        style={styles.premiumBtn}
                      >
                        💎 Acceder
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Page>
        )}

        {/* FAVORITES */}
        {view === "favorites" && (
          <Page>
            <h1>⭐ Favoritos</h1>

            <div style={styles.grid}>
              {products.filter(p => favorites.includes(p.id)).map(p => (
                <div key={p.id} style={styles.card}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </Page>
        )}

        {/* PREMIUM */}
        {view === "premium" && (
          <Page>
            <h1>💎 Premium</h1>

            <div style={styles.glassBox}>
              <p>Accede a contenido exclusivo</p>

              <button onClick={goPremium} style={styles.premiumBtnBig}>
                💎 Desbloquear Premium
              </button>
            </div>
          </Page>
        )}

      </div>

      {/* MODAL */}
      {open && (
        <div style={styles.overlay} onClick={() => setOpen(null)}>
          <div style={styles.modal}>
            <h2>{open.title}</h2>
            <p>{open.full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* 🎨 STYLES ULTRA PREMIUM */
const styles = {
  app: {
    display: "flex",
    height: "100vh",
    background: "radial-gradient(circle at top, #111827, #05070f)",
    color: "white",
    fontFamily: "Arial",
  },

  sidebar: {
    width: 240,
    padding: 20,
    backdropFilter: "blur(20px)",
    background: "rgba(255,255,255,0.04)",
    borderRight: "1px solid rgba(255,255,255,0.1)",
  },

  sideBtn: {
    width: "100%",
    marginTop: 10,
    padding: 12,
    borderRadius: 12,
    border: "none",
    color: "white",
    background: "rgba(255,255,255,0.05)",
    cursor: "pointer",
    transition: "0.3s",
  },

  social: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 5,
    fontSize: 13,
    opacity: 0.8,
  },

  main: {
    flex: 1,
    padding: 20,
    overflowY: "auto",
  },

  page: {
    animation: "fade 0.4s ease",
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
    gap: 20,
  },

  card: {
    background: "rgba(255,255,255,0.06)",
    padding: 15,
    borderRadius: 16,
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255,255,255,0.1)",
    cursor: "pointer",
    transition: "0.3s",
  },

  badge: {
    padding: "4px 10px",
    borderRadius: 8,
    fontSize: 12,
    display: "inline-block",
    marginTop: 5,
  },

  favBtn: {
    background: "transparent",
    border: "none",
    fontSize: 18,
    cursor: "pointer",
    transition: "0.3s",
  },

  premiumBtn: {
    padding: "6px 10px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    color: "white",
    background: "linear-gradient(135deg,#7c3aed,#2563eb)",
  },

  premiumBtnBig: {
    marginTop: 15,
    padding: 12,
    borderRadius: 12,
    border: "none",
    cursor: "pointer",
    color: "white",
    background: "linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4)",
  },

  glassBox: {
    padding: 20,
    borderRadius: 16,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    background: "#111827",
    padding: 25,
    borderRadius: 16,
    width: "50%",
    animation: "scale 0.3s ease",
  },
};