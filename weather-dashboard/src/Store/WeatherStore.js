// src/store/weatherStore.js
import { create } from "zustand";

const API_KEY = "88f1d156b39f4b890a6ab1b0c273f0fc";

const useWeatherStore = create((set, get) => ({
  city: "",
  weather: null,
  forecast: [],
  loading: false,
  error: null,

  setCity: (city) => set({ city }),

  fetchWeather: async () => {
    const city = get().city;
    if (!city) return;

    try {
      set({ loading: true, error: null });
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (res.ok) {
        set({
          weather: {
            city: data.name,
            temp: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon, // 👈 just icon code (e.g. "04d")
          },
          loading: false,
        });
      } else {
        set({ error: data.message || "Weather not found", loading: false });
      }
    } catch (err) {
      set({ error: "Failed to fetch weather", loading: false });
    }
  },

  fetchForecast: async () => {
    const city = get().city;
    if (!city) return;

    try {
      set({ loading: true, error: null });
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (res.ok) {
        // Pick one forecast per day (12:00 noon) for 5 days
        const daily = data.list
          .filter((item) => item.dt_txt.includes("12:00:00"))
          .slice(0, 5)
          .map((item) => ({
            date: new Date(item.dt * 1000).toLocaleDateString(),
            temp: item.main.temp,
            description: item.weather[0].description,
            icon: item.weather[0].icon, // 👈 just icon code
          }));

        set({ forecast: daily, loading: false });
      } else {
        set({ error: data.message || "Forecast not found", loading: false });
      }
    } catch (err) {
      set({ error: "Failed to fetch forecast", loading: false });
    }
  },
}));

export default useWeatherStore;
