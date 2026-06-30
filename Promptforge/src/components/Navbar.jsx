export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
      }}
    >
      <h2 style={{ color: "#22c55e" }}>PromptForge</h2>

      <div style={{ display: "flex", gap: "30px" }}>
        <span>Inicio</span>
        <span>Explorar</span>
        <span>Precios</span>
        <span>Iniciar sesión</span>
      </div>
    </nav>
  );
}