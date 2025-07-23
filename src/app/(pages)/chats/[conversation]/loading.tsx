export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header Skeleton */}
      <div className="p-4 flex items-center gap-3 border-b border-gray-200">
        <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse" />
        <div className="flex-1">
          <div className="w-24 h-4 bg-gray-300 animate-pulse mb-1 rounded" />
          <div className="w-16 h-3 bg-gray-200 animate-pulse rounded" />
        </div>
      </div>

      {/* Message Skeletons */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={idx}
            className={`flex ${
              idx % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="max-w-xs p-3 bg-gray-200 rounded-lg animate-pulse w-[60%]" />
          </div>
        ))}
      </div>
    </div>
  );
}
