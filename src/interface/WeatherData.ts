import { DailyForecast } from "./DailyForecast";
import { HourlyForecast } from "./HourlyForecast";

export interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  uvIndex: number;
  airQuality: number;
  sunrise: string;
  sunset: string;
  rainfall: number;
  highTemp: number;
  lowTemp: number;
  hourlyForecast: HourlyForecast[];
  dailyForecast: DailyForecast[];
}