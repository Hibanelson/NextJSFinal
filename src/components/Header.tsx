"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Film, Home, Compass, Heart, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/discover?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery("");
    }
  };

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/discover", label: "Discover", icon: Compass },
    { href: "/favorites", label: "Favorites", icon: Heart },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "linear-gradient(to bottom, rgba(10,10,15,0.95), rgba(10,10,15,0.0))",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      id="header"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" id="logo">
          <div
            className="p-1.5 rounded-lg transition-all duration-300 group-hover:scale-110"
            style={{ background: "linear-gradient(135deg, #e50914, #b20710)" }}
          >
            <Film size={20} className="text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight hidden sm:block">
            Cartoon<span style={{ color: "#e50914" }}>Flix</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" id="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                style={{
                  color: isActive ? "#fff" : "#a0a0b0",
                  background: isActive ? "rgba(229,9,20,0.15)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Search */}
        <div className="flex items-center gap-2">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search cartoons..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="px-3 py-1.5 rounded-lg text-sm outline-none transition-all duration-300 w-40 sm:w-60"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                }}
                id="header-search-input"
              />
              <button
                type="button"
                onClick={() => { setSearchOpen(false); setQuery(""); }}
                className="text-sm px-2 py-1 rounded"
                style={{ color: "#a0a0b0" }}
              >
                ✕
              </button>
            </form>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
              style={{ color: "#a0a0b0" }}
              id="header-search-btn"
            >
              <Search size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
