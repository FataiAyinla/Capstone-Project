import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import RecentSearches from "./components/RecentSearches";
import SkeletonCard from "./components/SkeletonCard";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;


export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searches, setSearches] = useState([]);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
      setCity(cityName);

      // save recent searches (unique only)
      if (!searches.includes(cityName)) {
        setSearches([cityName, ...searches.slice(0, 4)]);
      }
    } catch (err) {
      alert(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-r from-blue-400 to-indigo-600 p-6">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow">
        <SearchBar onSearch={fetchWeather} />
        <RecentSearches searches={searches} onSearch={fetchWeather} />

        {/* Show Skeleton when loading */}
        {loading && <SkeletonCard />}

        {/* Show weather only when not loading */}
        {!loading && weather && <WeatherCard weather={weather} />}
      </main>

      <Footer />
    </div>
  );
}
