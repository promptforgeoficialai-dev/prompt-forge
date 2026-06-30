export default function SearchBar({ search, setSearch }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "58px" }}>
        Encuentra el prompt perfecto
      </h1>

      <p style={{ color: "#94a3b8", fontSize: "20px" }}>
        Miles de prompts para ChatGPT, Gemini y Claude.
      </p>

      <input
        placeholder="Buscar un prompt..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "500px",
          marginTop: "35px",
          padding: "18px",
          borderRadius: "12px",
          border: "none",
          fontSize: "18px",
        }}
      />
    </div>
  );
}