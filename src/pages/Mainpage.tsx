import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WeatherData } from "@/interface/WeatherData";
import {fetchWeatherData} from '@/interface/weatherService.ts'
import Loading from '@/components/ui/Loading.tsx'
import SearchModal from '@/components/ui/SearchModal.tsx'
import WeatherDisplay from '@/components/ui/WeatherDisplay.tsx'
export default function WeatherApp() {
  const [city, setCity] = useState("Retie");
  const [days, setDays] = useState(7);
  const [hours, setHours] = useState(24);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    fetchWeatherData("Retie", days, hours, setWeatherData, setLoading, setError, setIsSubmitted);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      setIsSubmitted(true);
      fetchWeatherData(city, days, hours, setWeatherData, setLoading, setError, setIsSubmitted);
      setShowSearch(false);
    }
  };

  if (loading) return <Loading />;


  return (
    <>

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

      {weatherData && (
        <WeatherDisplay
          weatherData={weatherData}
          setShowSearch={setShowSearch}
        />
      )}
    </div>
    </>
  );
}