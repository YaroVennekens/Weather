import { WeatherData } from "@/interface/WeatherData";


export const API_KEY = "feaa6aa5fa1c4f19ba894830250803"
export const fetchWeatherData = async (
  cityName: string,
  days: number,
  hours: number,
  setWeatherData: (data: WeatherData | null) => void,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  setIsSubmitted: (submitted: boolean) => void
) => {
  setLoading(true);
  try {
    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=${days}&hour=${hours}&aqi=yes`,
    );
    const data = await response.json();

    if (data.error) {
      setError("City not found");
      setWeatherData(null);
      setLoading(false);
      return;
    }

    const hourlyData = data.forecast.forecastday.flatMap((day: any) =>
      day.hour.map((hour: any) => ({
        time: hour.time,
        displayTime:
          new Date(hour.time).getHours() === 0
            ? "12 AM"
            : new Date(hour.time).getHours() === 12
              ? "12 PM"
              : new Date(hour.time).getHours() > 12
                ? `${new Date(hour.time).getHours() - 12} PM`
                : `${new Date(hour.time).getHours()} AM`,
        temperature: hour.temp_c,
        icon: hour.condition.icon,
        chanceOfRain: hour.chance_of_rain,
      })),
    );

    const currentHour = new Date().getHours();
    const filteredHourlyData = hourlyData.slice(currentHour, currentHour + 24);

    const weatherInfo: WeatherData = {
      city: data.location.name,
      temperature: Math.round(data.current.temp_c),
      condition: data.current.condition.text,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
      pressure: data.current.pressure_mb,
      uvIndex: data.current.uv,
      airQuality: data.current.air_quality?.pm2_5 || 3,
      visibility: data.current.vis_km,
      windDirection: data.current.wind_dir,
      sunrise: data.forecast.forecastday[0].astro.sunrise,
      sunset: data.forecast.forecastday[0].astro.sunset,
      rainfall: data.current.precip_mm,
      highTemp: Math.round(data.forecast.forecastday[0].day.maxtemp_c),
      lowTemp: Math.round(data.forecast.forecastday[0].day.mintemp_c),
      hourlyForecast: filteredHourlyData,
      dailyForecast: data.forecast.forecastday.map((day: any) => ({
        date: new Date(day.date).toLocaleDateString("en-US", { weekday: "short" }),
        maxTemp: Math.round(day.day.maxtemp_c),
        minTemp: Math.round(day.day.mintemp_c),
        condition: day.day.condition.text,
        icon: day.day.condition.icon,
      })),
    };

    setWeatherData(weatherInfo);
    setLoading(false);
    setIsSubmitted(true);
  } catch (err) {
    setError("Failed to fetch weather data");
    setLoading(false);
  }
};