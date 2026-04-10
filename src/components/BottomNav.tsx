"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Heart } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/discover", label: "Discover", icon: Compass },
  { href: "/favorites", label: "Favorites", icon: Heart },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden" id="bottom-nav">
      <div
        className="flex items-center justify-around px-2 py-2"
        style={{
          background: "linear-gradient(to top, rgba(10,10,15,0.98), rgba(10,10,15,0.85))",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl transition-all duration-300"
              style={{
                color: isActive ? "#e50914" : "#6b6b80",
                transform: isActive ? "scale(1.05)" : "scale(1)",
              }}
            >
              <Icon
                size={22}
                fill={isActive && item.label === "Favorites" ? "#e50914" : "none"}
                strokeWidth={isActive ? 2.5 : 1.8}
              />
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
              {isActive && (
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ background: "#e50914" }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
