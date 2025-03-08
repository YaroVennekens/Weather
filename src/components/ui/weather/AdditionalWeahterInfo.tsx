import { AdditionalWeatherInfoProps, WeatherInfoCard } from '@/components/ui/card/WeatherInfoCard.tsx';
import { getAirQualityText, getUVIndexText } from '@/hooks/weatherData.ts';
import {JSX} from 'react'

export default function AdditionalWeatherInfo({ weatherData }: AdditionalWeatherInfoProps) {
  const weatherDetails = [
    {
      title: "Air Quality",
      value: `${weatherData.airQuality} - ${getAirQualityText(weatherData.airQuality)}`,
      icon: <span className="text-xs">🌬️</span>,
      gradient: "bg-gradient-to-r from-green-400 to-pink-500",
      percentage: weatherData.airQuality * 10
    },
    {
      title: "UV Index",
      value: weatherData.uvIndex,
      description: getUVIndexText(weatherData.uvIndex),
      icon: <span className="text-yellow-400">☀️</span>,
      gradient: "bg-gradient-to-r from-yellow-300 to-red-500",
      percentage: weatherData.uvIndex * 10
    },
    {
      title: "Sunrise & Sunset",
      value: "5:28 AM",
      description: `Sunset: ${weatherData.sunset}`,
      icon: <span className="text-yellow-400">🌅</span>,
      gradient: ""
    },
    {
      title: "Wind Speed",
      value: `${Math.round(weatherData.windSpeed)} km/h`,
      icon: <span className="text-blue-400">💨</span>,
      gradient: ""
    },
    {
      title: "Rainfall",
      value: `${weatherData.rainfall} mm`,
      description: "in last hour",
      icon: <span className="text-blue-400">🌧️</span>,
      gradient: ""
    }
  ];

  return <WeatherInfoList weatherDetails={weatherDetails} />;
}

interface WeatherInfoListProps {
  weatherDetails: {
    title: string;
    value: string | number;
    description?: string;
    icon: JSX.Element;
    gradient: string;
    percentage?: number;
  }[];
}

const WeatherInfoList: React.FC<WeatherInfoListProps> = ({ weatherDetails }) => {
  return (
    <div className="mt-6 space-y-4">
      {weatherDetails.slice(0, 1).map((item, index) => (
        <WeatherInfoCard key={index} {...item} />
      ))}
      <div className="grid grid-cols-2 gap-4">
        {weatherDetails.slice(1, 3).map((item, index) => (
          <WeatherInfoCard key={index} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {weatherDetails.slice(3).map((item, index) => (
          <WeatherInfoCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};