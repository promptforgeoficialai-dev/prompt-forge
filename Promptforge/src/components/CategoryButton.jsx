export default function CategoryButton({ text, onClick, active }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active
          ? "#22c55e"
          : "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "white",
        padding: "10px 16px",
        borderRadius: "12px",
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      {text}
    </button>
  );
}