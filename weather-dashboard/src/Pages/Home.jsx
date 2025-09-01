import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import WeatherCard from "../components/WeatherCard";

function Home({ fetchWeather, weather, loading, searches }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city) return alert("Please enter a city name");
    fetchWeather(city);
    setCity("");
  };

  return (
    <div className="home">
      <WeatherCard>
        {/* Search box */}
        <Searchbar city={city} setCity={setCity} handleSearch={handleSearch} />

        {/* Loading */}
        {loading && <p>Loading weather...</p>}

        {/* Weather result */}
        {weather && (
          <div className="weather-info">
            <h3>{weather.name}, {weather.sys.country}</h3>
            <p>{Math.round(weather.main.temp)}°C</p>
            <p>{weather.weather[0].description}</p>
          </div>
        )}

        {/* Recent searches */}
        {searches.length > 0 && (
          <div className="recent-searches">
            <h4>Recent Searches:</h4>
            <ul>
              {searches.map((city, idx) => (
                <li key={idx}>{city}</li>
              ))}
            </ul>
          </div>
        )}
      </WeatherCard>
    </div>
  );
}

export default Home;