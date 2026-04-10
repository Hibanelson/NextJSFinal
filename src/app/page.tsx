"use client";

import { useState, useEffect } from "react";
import HeroBanner from "@/components/HeroBanner";
import SectionRow from "@/components/SectionRow";
import LoadingState from "@/components/LoadingState";
import { getFeaturedMovies, getMoviesByCategory, categories } from "@/data/movies";
import { Movie } from "@/types/movie";

export default function HomePage() {
  const [featured, setFeatured] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth UX
    const timer = setTimeout(() => {
      const featuredMovies = getFeaturedMovies();
      const randomFeatured = featuredMovies[Math.floor(Math.random() * featuredMovies.length)];
      setFeatured(randomFeatured);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingState />;

  return (
    <div id="home-page">
      {/* Hero Banner */}
      {featured && <HeroBanner movie={featured} />}

      {/* Category Sections */}
      <div className="mt-[-40px] relative z-10 space-y-2">
        {categories.map((cat) => (
          <SectionRow
            key={cat.id}
            title={cat.name}
            movies={getMoviesByCategory(cat.slug)}
          />
        ))}
      </div>
    </div>
  );
}
