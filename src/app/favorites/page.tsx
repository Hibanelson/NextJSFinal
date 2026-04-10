"use client";

import { useFavorites } from "@/context/FavoritesContext";
import { movies } from "@/data/movies";
import MovieCard from "@/components/MovieCard";
import EmptyState from "@/components/EmptyState";
import { Heart, Trash2 } from "lucide-react";

export default function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites();

  const favoriteMovies = movies.filter((m) => favorites.includes(m.id));

  return (
    <div className="pt-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto" id="favorites-page">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">My Favorites</h1>
          <p className="text-sm" style={{ color: "#6b6b80" }}>
            {favoriteMovies.length} movie{favoriteMovies.length !== 1 ? "s" : ""} saved
          </p>
        </div>
        {favoriteMovies.length > 0 && (
          <button
            onClick={clearFavorites}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(229,9,20,0.1)",
              color: "#e50914",
              border: "1px solid rgba(229,9,20,0.2)",
            }}
            id="clear-favorites-btn"
          >
            <Trash2 size={14} />
            Clear All
          </button>
        )}
      </div>

      {/* Content */}
      {favoriteMovies.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pb-8">
          {favoriteMovies.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} index={i} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No favorites yet"
          description="Tap the heart icon on any cartoon movie to add it to your favorites!"
          icon={<Heart size={48} style={{ color: "#2a2a3e" }} />}
        />
      )}
    </div>
  );
}
