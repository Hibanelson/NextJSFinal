"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Info, Star } from "lucide-react";
import { Movie } from "@/types/movie";
import FavoriteButton from "./FavoriteButton";

interface HeroBannerProps {
  movie: Movie;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  return (
    <section className="relative w-full h-[85vh] sm:h-[80vh] md:h-[75vh] overflow-hidden" id="hero-banner">
      {/* Backdrop Image */}
      <div className="absolute inset-0">
        <Image
          src={movie.backdrop}
          alt={movie.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0a0a0f 0%, rgba(10,10,15,0.7) 40%, rgba(10,10,15,0.3) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,15,0.8) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-4 sm:px-8 md:px-12 pb-20 md:pb-16 max-w-7xl mx-auto">
        <div className="animate-fade-in-up max-w-xl">
          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-3">
            {movie.genres.map((genre) => (
              <span
                key={genre}
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{
                  background: "rgba(229,9,20,0.2)",
                  color: "#ff6b6b",
                  border: "1px solid rgba(229,9,20,0.3)",
                }}
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3 tracking-tight">
            {movie.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-3 text-sm mb-4" style={{ color: "#a0a0b0" }}>
            <span className="flex items-center gap-1">
              <Star size={14} fill="#ffd700" stroke="#ffd700" />
              <span className="font-semibold text-white">{movie.rating}</span>
            </span>
            <span>•</span>
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.duration}</span>
          </div>

          {/* Overview */}
          <p
            className="text-sm sm:text-base leading-relaxed mb-6 line-clamp-3"
            style={{ color: "#c0c0d0" }}
          >
            {movie.overview}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href={`/movie/${movie.id}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #e50914, #b20710)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(229,9,20,0.4)",
              }}
              id="hero-play-btn"
            >
              <Play size={18} fill="white" />
              Watch Now
            </Link>
            <Link
              href={`/movie/${movie.id}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
              }}
              id="hero-info-btn"
            >
              <Info size={18} />
              Details
            </Link>
            <FavoriteButton movieId={movie.id} size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
