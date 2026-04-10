import { Film } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function EmptyState({
  title = "Nothing here yet",
  description = "Start exploring cartoon movies!",
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 animate-fade-in-up" id="empty-state">
      <div
        className="p-6 rounded-2xl mb-4"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        {icon || <Film size={48} style={{ color: "#2a2a3e" }} />}
      </div>
      <h3 className="text-lg font-semibold mb-2" style={{ color: "#a0a0b0" }}>
        {title}
      </h3>
      <p className="text-sm text-center max-w-xs" style={{ color: "#6b6b80" }}>
        {description}
      </p>
    </div>
  );
}
