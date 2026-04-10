"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import GenreBadge from "@/components/GenreBadge";
import EmptyState from "@/components/EmptyState";
import { movies, searchMovies } from "@/data/movies";
import { Search } from "lucide-react";

const allGenres = ["All", ...Array.from(new Set(movies.flatMap((m) => m.genres))).sort()];

function DiscoverContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredMovies = useMemo(() => {
    let results = query ? searchMovies(query) : [...movies];

    if (selectedGenre !== "All") {
      results = results.filter((m) => m.genres.includes(selectedGenre));
    }

    return results;
  }, [query, selectedGenre]);

  return (
    <div className="pt-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto" id="discover-page">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">Discover</h1>
        <p className="text-sm" style={{ color: "#6b6b80" }}>
          Browse our collection of animated movies
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <SearchBar onSearch={setQuery} initialValue={initialQuery} />
      </div>

      {/* Genre filters */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 mb-6">
        {allGenres.map((genre) => (
          <GenreBadge
            key={genre}
            genre={genre}
            active={selectedGenre === genre}
            onClick={() => setSelectedGenre(genre)}
          />
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm mb-4" style={{ color: "#6b6b80" }}>
        {filteredMovies.length} movie{filteredMovies.length !== 1 ? "s" : ""} found
        {query && <span> for &quot;{query}&quot;</span>}
      </p>

      {/* Grid */}
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pb-8">
          {filteredMovies.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} index={i} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No results found"
          description={`We couldn't find any cartoon movies matching "${query}". Try a different search term.`}
          icon={<Search size={48} style={{ color: "#2a2a3e" }} />}
        />
      )}
    </div>
  );
}

export default function DiscoverPage() {
  return (
    <Suspense fallback={<div className="pt-20 px-4"><p>Loading...</p></div>}>
      <DiscoverContent />
    </Suspense>
  );
}
