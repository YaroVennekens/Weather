import { motion } from "framer-motion";

interface HourlyForecastProps {
    hourlyData: {
        displayTime: string;
        chanceOfRain: number;
        icon: string;
        temperature: number;
    }[];
}

export default function HourlyForecast({ hourlyData }: HourlyForecastProps) {
    return (
      <div className="mt-4">
          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
              {hourlyData.slice(0, 12).map((hour, index) => {
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
    );
}