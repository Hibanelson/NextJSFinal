"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Clock, Calendar, Play, Users } from "lucide-react";
import { getMovieById, getSimilarMovies } from "@/data/movies";
import FavoriteButton from "@/components/FavoriteButton";
import SectionRow from "@/components/SectionRow";
import { notFound } from "next/navigation";

interface MovieDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { id } = use(params);
  const movie = getMovieById(Number(id));

  if (!movie) {
    notFound();
  }

  const similar = getSimilarMovies(movie);

  return (
    <div id="movie-detail-page">
      {/* Backdrop */}
      <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh]">
        <Image
          src={movie.backdrop}
          alt={movie.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0a0a0f 0%, rgba(10,10,15,0.5) 50%, rgba(10,10,15,0.3) 100%)",
          }}
        />

        {/* Back button */}
        <Link
          href="/"
          className="absolute top-20 left-4 sm:left-8 z-20 p-2 rounded-full transition-all duration-300 hover:scale-110"
          style={{
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          id="back-btn"
        >
          <ArrowLeft size={20} />
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-[-120px] px-4 sm:px-8 md:px-12 max-w-5xl mx-auto">
        <div className="flex gap-5 sm:gap-8 animate-fade-in-up">
          {/* Poster */}
          <div className="flex-shrink-0 w-[120px] sm:w-[160px] md:w-[200px]">
            <div
              className="relative overflow-hidden rounded-xl shadow-2xl"
              style={{
                aspectRatio: "2/3",
                boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
              }}
            >
              <Image
                src={movie.poster}
                alt={movie.title}
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 pt-6 sm:pt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              {movie.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm mb-4" style={{ color: "#a0a0b0" }}>
              <span className="flex items-center gap-1">
                <Star size={14} fill="#ffd700" stroke="#ffd700" />
                <span className="font-semibold text-white">{movie.rating}</span>
                <span>/10</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={13} />
                {movie.year}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={13} />
                {movie.duration}
              </span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-5">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(229,9,20,0.15)",
                    color: "#ff6b6b",
                    border: "1px solid rgba(229,9,20,0.25)",
                  }}
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mb-6">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #e50914, #b20710)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(229,9,20,0.4)",
                }}
                id="watch-now-btn"
              >
                <Play size={18} fill="white" />
                Watch Now
              </button>
              <FavoriteButton movieId={movie.id} size={22} showLabel />
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <h2 className="text-lg font-bold mb-3">Overview</h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#c0c0d0" }}>
            {movie.overview}
          </p>
        </div>

        {/* Cast */}
        {movie.cast.length > 0 && (
          <div
            className="mt-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Users size={18} style={{ color: "#6b6b80" }} />
              Cast
            </h2>
            <div className="flex flex-wrap gap-2">
              {movie.cast.map((actor) => (
                <span
                  key={actor}
                  className="text-xs px-3 py-1.5 rounded-lg font-medium"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "#a0a0b0",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {actor}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Similar Movies */}
      {similar.length > 0 && (
        <div className="mt-12 pb-8">
          <SectionRow title="Similar Cartoons" movies={similar} />
        </div>
      )}
    </div>
  );
}
