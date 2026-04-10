import Link from "next/link";
import { Home, Film } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" id="not-found-page">
      <div
        className="p-6 rounded-2xl mb-6"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <Film size={64} style={{ color: "#2a2a3e" }} />
      </div>
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg mb-1" style={{ color: "#a0a0b0" }}>
        Page not found
      </p>
      <p className="text-sm mb-6 text-center max-w-sm" style={{ color: "#6b6b80" }}>
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #e50914, #b20710)",
          color: "#fff",
        }}
      >
        <Home size={16} />
        Back to Home
      </Link>
    </div>
  );
}
