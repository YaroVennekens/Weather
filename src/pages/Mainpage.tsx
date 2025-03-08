import React, { useState, useEffect } from "react";
import {  AnimatePresence } from "framer-motion";
import { WeatherData } from "@/interface/WeatherData";
import { fetchWeatherData } from '@/interface/weatherService.ts'
import Loading from '@/components/ui/other/Loading.tsx'
import SearchModal from '@/components/ui/search/SearchModal.tsx'
import WeatherDisplay from '@/components/ui/weather/WeatherDisplay.tsx'

export default function WeatherApp() {

  const [city, setCity] = useState("Retie");
  const [days] = useState(7);
  const [hours] = useState(24);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    fetchWeatherData("Retie", days, hours, setWeatherData, setLoading, setError, setShowSearch);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeatherData(city, days, hours, setWeatherData, setLoading, setError, setShowSearch);
      setShowSearch(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-950 to-purple-900 text-white">
      <AnimatePresence>
        {showSearch && (
          <SearchModal
            city={city}
            setCity={setCity}
            handleSearch={handleSearch}
            setShowSearch={setShowSearch}
          />
        )}
      </AnimatePresence>

      {error && (
        <div className="bg-red-500 p-4 text-center text-white rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      {weatherData && (
        <WeatherDisplay
          weatherData={weatherData}
          setShowSearch={setShowSearch}
        />
      )}
    </div>
  );
}