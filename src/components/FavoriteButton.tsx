"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/context/FavoritesContext";

interface FavoriteButtonProps {
  movieId: number;
  size?: number;
  showLabel?: boolean;
}

export default function FavoriteButton({ movieId, size = 18, showLabel = false }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(movieId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(movieId);
      }}
      className="flex items-center gap-1.5 transition-all duration-300 hover:scale-110 active:scale-90"
      style={{ color: fav ? "#e50914" : "#a0a0b0" }}
      aria-label={fav ? "Remove from favorites" : "Add to favorites"}
      id={`fav-btn-${movieId}`}
    >
      <Heart
        size={size}
        fill={fav ? "#e50914" : "none"}
        className="transition-all duration-300"
      />
      {showLabel && (
        <span className="text-sm font-medium">
          {fav ? "Favorited" : "Favorite"}
        </span>
      )}
    </button>
  );
}
