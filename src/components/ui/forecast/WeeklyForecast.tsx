import { motion } from "framer-motion";

interface WeeklyForecastProps {
  weeklyData: {
    date: string;
    condition: string;
    icon: string;
    maxTemp: number;
    minTemp: number;
  }[];
}

export default function WeeklyForecast({ weeklyData }: WeeklyForecastProps) {
  return (
    <div className="mt-4 space-y-3">
      {weeklyData.map((day, index) => (
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
  );
}