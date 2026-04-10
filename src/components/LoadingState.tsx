export default function LoadingState() {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-8" id="loading-state">
      {/* Hero Skeleton */}
      <div className="skeleton w-full h-[50vh] rounded-2xl mb-10" />

      {/* Section Skeletons */}
      {[1, 2, 3].map((section) => (
        <div key={section} className="mb-8">
          <div className="skeleton h-6 w-48 mb-4" />
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <div key={card} className="flex-shrink-0 w-[140px] sm:w-[160px]">
                <div className="skeleton w-full rounded-xl" style={{ aspectRatio: "2/3" }} />
                <div className="skeleton h-3 w-3/4 mt-2" />
                <div className="skeleton h-2 w-1/2 mt-1" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
