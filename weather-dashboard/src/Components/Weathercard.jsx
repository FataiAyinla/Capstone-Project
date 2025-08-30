export default function WeatherCard({ weather }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-72 text-center">
      <h3 className="text-lg font-bold text-gray-800">{weather.name}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        className="mx-auto"
      />
      <p className="text-3xl font-bold text-blue-600">{weather.main.temp}°C</p>
      <p className="text-gray-600">Condition: {weather.weather[0].main}</p>
      <p className="text-gray-600">Humidity: {weather.main.humidity}%</p>
      <p className="text-gray-600">Wind Speed: {weather.wind.speed} km/h</p>
    </div>
  );
}
