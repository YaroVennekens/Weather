import React from "react";
import { motion } from "framer-motion";
import { WeatherData } from "@/interface/WeatherData";

interface AdditionalWeatherInfoProps {
    weatherData: WeatherData;
}

export default function AdditionalWeatherInfo({ weatherData }: AdditionalWeatherInfoProps) {
    const getAirQualityText = (value: number) => {
        if (value <= 3) return "Low Health Risk";
        if (value <= 6) return "Moderate Health Risk";
        if (value <= 9) return "High Health Risk";
        return "Very High Health Risk";
    };

    const getUVIndexText = (value: number) => {
        if (value <= 2) return "Low";
        if (value <= 5) return "Moderate";
        if (value <= 7) return "High";
        if (value <= 10) return "Very High";
        return "Extreme";
    };

    return (
      <div className="mt-6 space-y-4">
          <motion.div
            className="p-4 rounded-xl bg-indigo-800/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
              <div className="flex items-center mb-2">
                  <div className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-indigo-700">
                      <span className="text-xs">🌬️</span>
                  </div>
                  <h3 className="text-sm uppercase tracking-wider text-indigo-300">Air Quality</h3>
              </div>
              <div className="flex justify-between items-center">
                  <div>
                      <div className="text-lg font-semibold">
                          {weatherData.airQuality}-{getAirQualityText(weatherData.airQuality)}
                      </div>
                  </div>
                  <button className="flex items-center text-sm text-indigo-300">
                      See more
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                      </svg>
                  </button>
              </div>
              <div className="h-1.5 mt-2 bg-indigo-900/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-pink-500 rounded-full"
                    style={{ width: `${weatherData.airQuality * 10}%` }}
                  ></div>
              </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="p-4 rounded-xl bg-indigo-800/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                  <div className="flex items-center mb-2">
                      <svg
                        className="w-4 h-4 mr-2 text-yellow-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                          <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M4 12L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M22 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path
                            d="M19.7778 4.22266L17.5558 6.25424"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M4.22217 4.22266L6.44418 6.25424"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M6.44434 17.5557L4.22211 19.7779"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M19.7778 19.7773L17.5558 17.5551"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                      </svg>
                      <h3 className="text-sm uppercase tracking-wider text-indigo-300">UV Index</h3>
                  </div>
                  <div className="text-3xl font-bold">{weatherData.uvIndex}</div>
                  <div className="text-sm">{getUVIndexText(weatherData.uvIndex)}</div>
                  <div className="h-1.5 mt-2 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-300 to-red-500 rounded-full"
                        style={{ width: `${weatherData.uvIndex * 10}%` }}
                      ></div>
                  </div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-indigo-800/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                  <div className="flex items-center mb-2">
                      <svg
                        className="w-4 h-4 mr-2 text-yellow-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                          <path d="M12 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M4 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path
                            d="M19.7778 4.22266L17.5558 6.25424"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M4.22217 4.22266L6.44418 6.25424"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M12 22C7.58172 22 4 18.4183 4 14C4 9.58172 7.58172 6 12 6C16.4183 6 20 9.58172 20 14C20 18.4183 16.4183 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                      </svg>
                      <h3 className="text-sm uppercase tracking-wider text-indigo-300">Sunrise</h3>
                  </div>
                  <div className="text-3xl font-bold">5:28 AM</div>
                  <div className="text-sm">Sunset: {weatherData.sunset}</div>
              </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="p-4 rounded-xl bg-indigo-800/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                  <div className="flex items-center mb-2">
                      <svg
                        className="w-4 h-4 mr-2 text-blue-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                            d="M9.59 4.59A2 2 0 1 1 11 8H2M12.59 19.41A2 2 0 1 0 14 16H2M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                      </svg>
                      <h3 className="text-sm uppercase tracking-wider text-indigo-300">Wind</h3>
                  </div>
                  <div className="relative h-16 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full border border-indigo-600"></div>
                      </div>
                      <div className="text-center">
                          <div className="text-xs mb-1">N</div>
                          <div className="text-2xl font-bold">{Math.round(weatherData.windSpeed)}</div>
                          <div className="text-xs">km/h</div>
                      </div>
                  </div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-indigo-800/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                  <div className="flex items-center mb-2">
                      <svg
                        className="w-4 h-4 mr-2 text-blue-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                            d="M7 16.3C9.5 16.3 9.5 12.8 12 12.8C14.5 12.8 14.5 16.3 17 16.3C19.5 16.3 19.5 12.8 22 12.8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 11.3C9.5 11.3 9.5 7.8 12 7.8C14.5 7.8 14.5 11.3 17 11.3C19.5 11.3 19.5 7.8 22 7.8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                      </svg>
                      <h3 className="text-sm uppercase tracking-wider text-indigo-300">Rainfall</h3>
                  </div>
                  <div className="text-3xl font-bold">{weatherData.rainfall} mm</div>
                  <div className="text-sm">in last hour</div>
              </motion.div>
          </div>
      </div>
    );
}