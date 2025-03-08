import React, { useState } from "react";
import { motion } from "framer-motion";
import { WeatherData } from "@/interface/WeatherData";

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

              <div className={`mt-4 ${activeTab === "hourly" ? "block" : "hidden"}`}>
                  <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                      {weatherData.hourlyForecast.slice(0, 12).map((hour, index) => {
                          const isNow = index === 0;
                          return (
                            <motion.div
                              key={index}
                              className={`flex-shrink-0 p-3 rounded-3xl text-center min-w-[70px] ${
                                isNow ? "bg-indigo-700" : "bg-indigo-800/40"
                              }`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                                <div className="text-sm font-medium">{isNow ? "Now" : hour.displayTime}</div>
                                {hour.chanceOfRain > 20 && (
                                  <div className="text-xs text-blue-300 mt-1">{hour.chanceOfRain}%</div>
                                )}
                                <div className="my-1">
                                    <img src={`https:${hour.icon}`} alt={hour.displayTime} className="w-8 h-8 mx-auto" />
                                </div>
                                <div className="text-lg font-medium">{Math.round(hour.temperature)}°</div>
                            </motion.div>
                          );
                      })}
                  </div>
              </div>

              <div className={`mt-4 ${activeTab === "weekly" ? "block" : "hidden"}`}>
                  <div className="space-y-3">
                      {weatherData.dailyForecast.map((day, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-xl bg-indigo-800/40"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                            <div className="font-medium">{day.date}</div>
                            <div className="flex items-center">
                                <img src={`https:${day.icon}`} alt={day.condition} className="w-8 h-8 mr-2" />
                                <div className="text-right">
                                    <span className="font-medium">{day.maxTemp}°</span>
                                    <span className="text-indigo-300 ml-2">{day.minTemp}°</span>
                                </div>
                            </div>
                        </motion.div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    );
}