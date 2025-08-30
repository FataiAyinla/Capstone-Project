export default function WeatherInfo({ temp, humidity, wind }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <div>
        <p className="text-lg font-bold">{temp}°C</p>
        <p className="text-gray-600">Temp</p>
      </div>
      <div>
        <p className="text-lg font-bold">{humidity}%</p>
        <p className="text-gray-600">Humidity</p>
      </div>
      <div>
        <p className="text-lg font-bold">{wind} m/s</p>
        <p className="text-gray-600">Wind</p>
      </div>
    </div>
  );
}
