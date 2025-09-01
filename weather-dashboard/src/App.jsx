import WeatherCard from "./components/WeatherCard";
import useWeatherStore from "./store/weatherStore";

export default function App() {
  const { city, setCity, weather, forecast, fetchWeather, fetchForecast, loading, error } =
    useWeatherStore();

  const handleSearch = async () => {
    await fetchWeather();
    await fetchForecast();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 p-4">
      <WeatherCard
        city={weather?.city}
        temp={weather?.temp}
        description={weather?.description}
        icon={weather?.icon}
      >
        {/* Search Input */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city..."
            className="border rounded p-2 w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </WeatherCard>

      {/* Forecast Section */}
      {forecast.length > 0 && (
        <div className="mt-6 bg-white shadow-md rounded-2xl p-4 w-full max-w-2xl">
          <h3 className="text-xl font-bold mb-3 text-center">5-Day Forecast</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {forecast.map((day, index) => (
              <div
                key={index}
                className="p-3 rounded-lg shadow-sm bg-gray-50"
              >
                <p className="font-semibold">{day.date}</p>
                <div className="text-3xl">{day.icon}</div>
                <p>{Math.round(day.temp)}°C</p>
                <p className="text-sm text-gray-600">{day.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
