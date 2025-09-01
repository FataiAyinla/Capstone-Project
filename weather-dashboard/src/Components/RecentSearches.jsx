export default function RecentSearches({ searches, onSearch }) {
  return (
    <div className="mt-2">
      {searches.map((city, idx) => (
        <button
          key={idx}
          onClick={() => onSearch(city)}
          className="mr-2 mb-2 px-2 py-1 border rounded"
        >
          {city}
        </button>
      ))}
    </div>
  );
}
