import { Home, Star, Crown, Sparkles } from "lucide-react";

export default function Sidebar({ setView, playSound }) {
  const go = (v) => {
    playSound();
    setView(v);
  };

  return (
    <div className="sidebar">

      <div className="logo">
        ⚡ Prompt Forge
      </div>

      <button onClick={() => go("home")}>
        <Home size={18} /> Inicio
      </button>

      <button onClick={() => go("favorites")}>
        <Star size={18} /> Favoritos
      </button>

      <button onClick={() => go("premium")} className="premium">
        <Crown size={18} /> Premium
      </button>

      <button>
        <Sparkles size={18} /> Explorar
      </button>

    </div>
  );
}