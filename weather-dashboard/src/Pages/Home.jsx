import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import RecentSearches from "../components/RecentSearches";
import SkeletonCard from "../components/SkeletonCard";

export default function Home({ fetchWeather, searches, loading, weather }) {
  return (
    <main className="flex flex-col items-center justify-center flex-grow">
      <SearchBar onSearch={fetchWeather} />
      <RecentSearches searches={searches} onSearch={fetchWeather} />

      {loading && <SkeletonCard />}
      {!loading && weather && <WeatherCard weather={weather} />}
    </main>
  );
}
