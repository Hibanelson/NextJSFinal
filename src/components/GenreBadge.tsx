interface GenreBadgeProps {
  genre: string;
  active?: boolean;
  onClick?: () => void;
}

export default function GenreBadge({ genre, active = false, onClick }: GenreBadgeProps) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
      style={{
        background: active
          ? "linear-gradient(135deg, #e50914, #b20710)"
          : "rgba(255,255,255,0.06)",
        color: active ? "#fff" : "#a0a0b0",
        border: active
          ? "1px solid rgba(229,9,20,0.5)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: active ? "0 2px 12px rgba(229,9,20,0.3)" : "none",
      }}
    >
      {genre}
    </button>
  );
}
