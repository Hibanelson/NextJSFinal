"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";

interface SectionRowProps {
  title: string;
  movies: Movie[];
}

export default function SectionRow({ title, movies }: SectionRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (movies.length === 0) return null;

  return (
    <section className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 mb-4">
        <h2 className="text-lg sm:text-xl font-bold tracking-tight">{title}</h2>
        <div className="hidden sm:flex items-center gap-1">
          <button
            onClick={() => scroll("left")}
            className="p-1.5 rounded-lg transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "#a0a0b0",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-1.5 rounded-lg transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "#a0a0b0",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 px-4 sm:px-8 md:px-12 overflow-x-auto hide-scrollbar pb-2"
      >
        {movies.map((movie, i) => (
          <MovieCard key={movie.id} movie={movie} index={i} />
        ))}
      </div>
    </section>
  );
}
