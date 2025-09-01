// src/WeatherCard.jsx
export default function WeatherCard({ city, temp, description, icon, children }) {
  // Build icon URL only if icon code exists
  const iconUrl = icon
    ? `https://openweathermap.org/img/wn/${icon}@2x.png`
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md text-center">
      {/* Weather Icon */}
      {iconUrl && (
        <img
          src={iconUrl}
          alt={description || "Weather Icon"}
          className="w-20 h-20 mx-auto mb-3"
        />
      )}

      {/* City Name */}
      <h2 className="text-2xl font-bold">{city || "Weather Dashboard"}</h2>

      {/* Weather Description */}
      {description && (
        <p className="capitalize text-gray-600">{description}</p>
      )}

      {/* Temperature */}
      {temp !== undefined && (
        <p className="text-4xl font-extrabold mt-2">{Math.round(temp)}°C</p>
      )}

      {/* Children (search box, error message, etc.) */}
      <div className="mt-4">{children}</div>
    </div>
  );
}
