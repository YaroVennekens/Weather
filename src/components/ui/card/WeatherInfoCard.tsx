import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WeatherInfoProps {
  title: string;
  value?: string | number;
  description?: string;
  icon?: ReactNode;
  gradient?: string;
  percentage?: number;
}
export const WeatherInfoCard = ({
                                  title,
                                  value,
                                  description,
                                  icon,
                                  gradient,
                                  percentage,
                                }: WeatherInfoProps) => (
  <motion.div
    className="p-4 rounded-xl bg-indigo-800/40 shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1, y: 5 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <div className="flex items-center mb-2">
      <div className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-700 text-white">
        {icon}
      </div>
      <h3 className="ml-2 text-sm uppercase tracking-wider text-indigo-200">
        {title}
      </h3>
    </div>
    <div className="text-3xl font-bold text-white">{value}</div>
    {description && <div className="text-sm text-gray-300">{description}</div>}
    {percentage !== undefined && (
      <div className="h-1.5 mt-2 bg-indigo-900/50 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${gradient}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    )}
  </motion.div>
);