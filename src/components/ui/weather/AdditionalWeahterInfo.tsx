
import {AdditionalWeatherInfoProps, WeatherInfoCard} from '@/components/ui/card/WeatherInfoCard.tsx'
import {getAirQualityText, getUVIndexText} from '@/hooks/weatherData.ts'


export default function AdditionalWeatherInfo({ weatherData }: AdditionalWeatherInfoProps) {
    return (
      <div className="mt-6 space-y-4">
          <WeatherInfoCard
            title="Air Quality"
            value={`${weatherData.airQuality} - ${getAirQualityText(weatherData.airQuality)}`}
            icon={<span className="text-xs">🌬️</span>}
            gradient="bg-gradient-to-r from-green-400 to-pink-500"
            percentage={weatherData.airQuality * 10}
          />
          <div className="grid grid-cols-2 gap-4">
              <WeatherInfoCard
                title="UV Index"
                value={weatherData.uvIndex}
                description={getUVIndexText(weatherData.uvIndex)}
                icon={<span className="text-yellow-400">☀️</span>}
                gradient="bg-gradient-to-r from-yellow-300 to-red-500"
                percentage={weatherData.uvIndex * 10}
              />
              <WeatherInfoCard
                title="Sunrise & Sunset"
                value={"5:28 AM"}
                description={`Sunset: ${weatherData.sunset}`}
                icon={<span className="text-yellow-400">🌅</span>}
                gradient=""
              />
          </div>
          <div className="grid grid-cols-2 gap-4">
              <WeatherInfoCard
                title="Wind Speed"
                value={`${Math.round(weatherData.windSpeed)} km/h`}
                icon={<span className="text-blue-400">💨</span>}
                gradient=""
              />
              <WeatherInfoCard
                title="Rainfall"
                value={`${weatherData.rainfall} mm`}
                description="in last hour"
                icon={<span className="text-blue-400">🌧️</span>}
                gradient=""
              />
          </div>
      </div>
    );
}

