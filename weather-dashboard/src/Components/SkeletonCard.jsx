export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-72 animate-pulse">
      <div className="h-5 w-20 bg-gray-300 rounded mx-auto mb-4"></div>
      <div className="h-16 w-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
      <div className="h-8 w-24 bg-gray-300 rounded mx-auto mb-2"></div>
      <div className="h-4 w-40 bg-gray-300 rounded mx-auto mb-1"></div>
      <div className="h-4 w-32 bg-gray-300 rounded mx-auto mb-1"></div>
      <div className="h-4 w-28 bg-gray-300 rounded mx-auto"></div>
    </div>
  );
}
