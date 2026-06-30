export default function PromptCard({
  title,
  description,
  premium,
  isFavorite,
  onFavorite,
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* FAVORITO */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ fontSize: "20px", color: "#22c55e" }}>
          {title}
        </h2>

        <span
          onClick={onFavorite}
          style={{ cursor: "pointer", fontSize: "20px" }}
        >
          {isFavorite ? "❤️" : "🤍"}
        </span>
      </div>

      {/* DESCRIPCIÓN */}
      <p style={{ color: "#cbd5e1", marginTop: "10px" }}>
        {description}
      </p>

      {/* PREMIUM OVERLAY */}
      {premium && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
            🔒 Contenido Premium
          </p>

          <button
            style={{
              background: "#22c55e",
              border: "none",
              padding: "10px 16px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => alert("Aquí iría el pago 💳")}
          >
            Desbloquear
          </button>
        </div>
      )}

      {/* BOTÓN */}
      <button
        style={{
          marginTop: "15px",
          background: premium ? "#fbbf24" : "#22c55e",
          border: "none",
          padding: "8px 14px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Ver Prompt
      </button>
    </div>
  );
}