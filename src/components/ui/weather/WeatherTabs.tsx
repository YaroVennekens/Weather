import { useState } from "react";
import { WeatherData } from "@/interface/WeatherData.ts";
import HourlyForecast from '@/components/ui/forecast/HourlyForecast.tsx'
import WeeklyForecast from '@/components/ui/forecast/WeeklyForecast.tsx'


interface WeatherTabsProps {
    weatherData: WeatherData;
}

export default function WeatherTabs({ weatherData }: WeatherTabsProps) {
    const [activeTab, setActiveTab] = useState("hourly");

    return (
      <div className="mt-auto">
          <div className="w-full">
              <div className="grid w-full grid-cols-2 border-b border-indigo-700">
                  <button
                    onClick={() => setActiveTab("hourly")}
                    className={`py-2 text-center transition-all ${
                      activeTab === "hourly" ? "border-b-2 border-white font-medium" : "text-white/70"
                    }`}
                  >
                      Hourly Forecast
                  </button>
                  <button
                    onClick={() => setActiveTab("weekly")}
                    className={`py-2 text-center transition-all ${
                      activeTab === "weekly" ? "border-b-2 border-white font-medium" : "text-white/70"
                    }`}
                  >
                      Weekly Forecast
                  </button>
              </div>

              {activeTab === "hourly" && <HourlyForecast hourlyData={weatherData.hourlyForecast} />}
              {activeTab === "weekly" && <WeeklyForecast weeklyData={weatherData.dailyForecast} />}
          </div>
      </div>
    );
}