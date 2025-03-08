import { motion } from "framer-motion";
import { WeatherData } from "@/interface/WeatherData.ts";
import WeatherTabs from "./WeatherTabs.tsx";
import BottomNavigation from "../BottomNavigation.tsx";
import AdditionalWeatherInfo from '@/components/ui/weather/AdditionalWeahterInfo.tsx'
import ConditionRender from '@/components/ui/weather/ConditionRender.tsx'

interface WeatherDisplayProps {
    weatherData: WeatherData;
    setShowSearch: (show: boolean) => void;
}

export default function WeatherDisplay({ weatherData, setShowSearch }: WeatherDisplayProps) {



    return (
      <>
          <div className="absolute inset-0 overflow-hidden flex justify-center">
              <ConditionRender weatherData={weatherData} />
          </div>

          <div className="relative z-10 container mx-auto max-w-md p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full relative"
              >
                  <div className="text-center mb-8 mt-12">
                      <h1 className="text-4xl font-bold">{weatherData.city}</h1>
                      <div className="flex flex-col items-center justify-center">
                          <div className="text-8xl font-light mt-4">{weatherData.temperature}°</div>
                          <div className="text-xl mt-2">{weatherData.condition}</div>
                          <div className="text-lg mt-1">
                              H:{weatherData.highTemp}° L:{weatherData.lowTemp}°
                          </div>
                      </div>
                  </div>

                  <WeatherTabs weatherData={weatherData} />
                  <AdditionalWeatherInfo weatherData={weatherData} />
                  <BottomNavigation setShowSearch={setShowSearch} />
              </motion.div>
          </div>
      </>
    );
}