export default function RecentSearches({ searches, onSearch }) {
  return (
    <div className="mt-4">
      <h2 className="text-white font-semibold mb-2">Recent Searches</h2>
      <div className="flex gap-2 flex-wrap">
        {searches.map((city, index) => (
          <button
            key={index}
            onClick={() => onSearch(city)}
            className="px-3 py-1 bg-white text-gray-700 rounded shadow hover:bg-gray-200"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
