import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";

export default function App() {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [view, setView] = useState("home");

  const products = [
    { id: 1, title: "Webs con IA", type: "premium", desc: "Crea sitios web con IA", full: "Contenido completo de webs con IA" },
    { id: 2, title: "Marketing viral", type: "premium", desc: "Estrategias virales", full: "Aprende marketing viral real" },
    { id: 3, title: "Ideas de negocio", type: "free", desc: "Ideas simples", full: "Ideas para emprender" },
    { id: 4, title: "Cómo vender online", type: "free", desc: "Guía básica", full: "Vende en internet paso a paso" },
  ];

  // 🔐 LOGIN
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      setUser({
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
        uid: result.user.uid,
      });

    } catch (error) {
      console.log(error);
    }
  };

  // 🚪 LOGOUT
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  // ⭐ FAVORITOS
  const toggleFav = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>

      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>⚡ Prompt Forge</h2>

        {!user ? (
          <button onClick={login}>🔐 Entrar con Google</button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={user.photo} width="40" style={{ borderRadius: "50%" }} />
            <span>{user.name}</span>
            <button onClick={logout}>🚪 Salir</button>
          </div>
        )}
      </div>

      <hr />

      {/* NAV */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setView("home")}>Inicio</button>
        <button onClick={() => setView("favorites")}>Favoritos</button>
      </div>

      {/* HOME */}
      {view === "home" && (
        <div style={{ display: "grid", gap: 10 }}>
          {products.map((p) => (
            <div key={p.id} style={{ border: "1px solid #ccc", padding: 10 }}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <button onClick={() => toggleFav(p.id)}>
                {favorites.includes(p.id) ? "⭐ Quitar" : "☆ Favorito"}
              </button>

              {p.type === "premium" && (
                <button style={{ marginLeft: 10 }}>
                  💎 Premium
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* FAVORITES */}
      {view === "favorites" && (
        <div>
          <h3>⭐ Favoritos</h3>

          {products
            .filter((p) => favorites.includes(p.id))
            .map((p) => (
              <div key={p.id}>
                {p.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}