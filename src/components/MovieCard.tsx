"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Movie } from "@/types/movie";
import FavoriteButton from "./FavoriteButton";

interface MovieCardProps {
  movie: Movie;
  index?: number;
}

export default function MovieCard({ movie, index = 0 }: MovieCardProps) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
      id={`movie-card-${movie.id}`}
    >
      <div className="relative overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
        style={{ aspectRatio: "2/3" }}
      >
        {/* Poster */}
        <Image
          src={movie.poster}
          alt={movie.title}
          fill
          className="object-cover transition-all duration-500 group-hover:brightness-110"
          sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 180px"
        />

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-xs">
              <Star size={10} fill="#ffd700" stroke="#ffd700" />
              {movie.rating}
            </span>
            <FavoriteButton movieId={movie.id} size={14} />
          </div>
        </div>

        {/* Rating Badge */}
        <div
          className="absolute top-2 left-2 flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-semibold"
          style={{
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(4px)",
          }}
        >
          <Star size={8} fill="#ffd700" stroke="#ffd700" />
          {movie.rating}
        </div>
      </div>

      {/* Title */}
      <div className="mt-2 px-0.5">
        <h3
          className="text-xs sm:text-sm font-medium truncate transition-colors duration-300 group-hover:text-white"
          style={{ color: "#c0c0d0" }}
        >
          {movie.title}
        </h3>
        <p className="text-[10px] mt-0.5" style={{ color: "#6b6b80" }}>
          {movie.year} · {movie.genres[0]}
        </p>
      </div>
    </Link>
  );
}
