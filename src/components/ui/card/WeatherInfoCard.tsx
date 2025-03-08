import {motion} from 'framer-motion'
import {WeatherData} from '@/interface/WeatherData.ts'
import {JSX} from 'react'

interface WeatherInfoProps {
  title: string;
  value: string | number;
  description?: string;
  icon: JSX.Element;
  gradient: string;
  percentage?: number;
}

export const WeatherInfoCard = ({ title, value, description, icon, gradient, percentage }: WeatherInfoProps) => (
  <motion.div
    className="p-4 rounded-xl bg-indigo-800/40"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center mb-2">
      <div className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-indigo-700">
        {icon}
      </div>
      <h3 className="text-sm uppercase tracking-wider text-indigo-300">{title}</h3>
    </div>
    <div className="text-3xl font-bold">{value}</div>
    {description && <div className="text-sm">{description}</div>}
    {percentage !== undefined && (
      <div className="h-1.5 mt-2 bg-indigo-900/50 rounded-full overflow-hidden">
        <div className={`h-full ${gradient} rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    )}
  </motion.div>
);

export interface AdditionalWeatherInfoProps {
  weatherData: WeatherData;
}