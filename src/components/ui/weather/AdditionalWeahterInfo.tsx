import { WeatherInfoCard } from '@/components/ui/card/WeatherInfoCard';
import { getAirQualityText, getUVIndexText } from '@/hooks/weatherData';
import { JSX, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AdditionalWeatherInfoProps {
  weatherData: {
    airQuality: number;
    uvIndex: number;
    sunrise: string;
    sunset: string;
    windSpeed: number;
    rainfall: number;
  };
}

export default function AdditionalWeatherInfo({ weatherData }: AdditionalWeatherInfoProps) {
  const weatherDetails: WeatherInfoListProps['weatherDetails'] = [
    {
      title: "Air Quality",
      value: `${weatherData.airQuality} - ${getAirQualityText(weatherData.airQuality)}`,
      icon: <span className="text-xs">🌬️</span>,
      gradient: "bg-gradient-to-r from-green-400 to-pink-500",
      percentage: weatherData.airQuality * 10,
    },
    {
      title: "UV Index",
      value: weatherData.uvIndex,
      description: getUVIndexText(weatherData.uvIndex),
      icon: <span className="text-yellow-400">☀️</span>,
      gradient: "bg-gradient-to-r from-yellow-300 to-red-500",
      percentage: weatherData.uvIndex * 10,
    },
    {
      title: "Sunrise & Sunset",
      customComponent: <SunriseSunsetArc sunrise={weatherData.sunrise} sunset={weatherData.sunset} />,
    },
    {
      title: "Wind Speed",
      value: `${Math.round(weatherData.windSpeed)} km/h`,
      icon: <span className="text-blue-400">💨</span>,
      gradient: "",
    },
    {
      title: "Rainfall",
      value: `${weatherData.rainfall} mm`,
      description: "in last hour",
      icon: <span className="text-blue-400">🌧️</span>,
      gradient: "",
    },
  ];

  return <WeatherInfoList weatherDetails={weatherDetails} />;
}

interface WeatherInfoListProps {
  weatherDetails: {
    title: string;
    value?: string | number;
    description?: string;
    icon?: JSX.Element;
    gradient?: string;
    percentage?: number;
    customComponent?: JSX.Element;
  }[];
}

const WeatherInfoList: React.FC<WeatherInfoListProps> = ({ weatherDetails }) => {
  return (
    <div className="mt-6 space-y-4">
      {weatherDetails.slice(0, 1).map((item, index) => (
        <WeatherInfoCard key={index} {...item} />
      ))}
      <div className="grid grid-cols-2 gap-4">
        {weatherDetails.slice(1, 3).map((item, index) =>
          item.customComponent ? (
            <div key={index} className="p-4 rounded-xl bg-indigo-800/40">{item.customComponent}</div>
          ) : (
            <WeatherInfoCard key={index} {...item} />
          )
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {weatherDetails.slice(3).map((item, index) => (
          <WeatherInfoCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

interface SunriseSunsetProps {
  sunrise: string;
  sunset: string;
}

const SunriseSunsetArc: React.FC<SunriseSunsetProps> = ({ sunrise, sunset }) => {
  const timeToMinutes = (time: string): number => {
    const match = time.match(/(\d+):(\d+) (AM|PM)/);
    if (!match) return 0;
    const [_, hourStr, minuteStr, period] = match;
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;
    return hour * 60 + minute;
  };

  const sunriseMinutes = timeToMinutes(sunrise);
  const sunsetMinutes = timeToMinutes(sunset);

  const getCurrentTimeInMinutes = (): number => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  };

  const [currentMinutes, setCurrentMinutes] = useState(getCurrentTimeInMinutes());

  useEffect(() => {
    const interval = setInterval(() => setCurrentMinutes(getCurrentTimeInMinutes()), 60000);
    return () => clearInterval(interval);
  }, []);

  const isNight = currentMinutes < sunriseMinutes || currentMinutes > sunsetMinutes;
  const progress = isNight
    ? ((currentMinutes < sunriseMinutes ? 1440 - sunsetMinutes + currentMinutes : currentMinutes - sunsetMinutes) /
      (1440 - (sunsetMinutes - sunriseMinutes)))
    : (currentMinutes - sunriseMinutes) / (sunsetMinutes - sunriseMinutes);

  const position = Math.max(0, Math.min(progress, 1)) * 180;

  return (
    <div className="relative flex flex-col items-center space-y-2">
      <h3 className="text-sm uppercase tracking-wider text-indigo-300">Sunrise & Sunset</h3>
      <div className="relative w-40 h-20">
        <svg viewBox="0 0 200 100" className="absolute inset-0">
          <path d="M10,90 A90,90 0 0,1 190,90" fill="none" stroke={isNight ? "blue" : "orange"} strokeWidth="4" />
        </svg>
        <motion.div
          className={`absolute w-6 h-6 rounded-full ${isNight ? "bg-blue-400" : "bg-yellow-400"}`}
          style={{ left: `${10 + (position / 180) * 180}px`, bottom: "55px" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
      <div className="flex justify-between w-40 text-sm text-gray-300">
        <span>{sunrise}</span>
        <span>{sunset}</span>
      </div>
    </div>
  );
};
