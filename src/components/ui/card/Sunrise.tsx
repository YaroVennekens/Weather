import { motion } from "framer-motion";

interface SunriseSunsetProps {
    sunrise: string; // "05:28 AM"
    sunset: string;  // "07:45 PM"
    currentTime: string; // "12:30 PM"
}

export default function SunriseSunset({ sunrise, sunset, currentTime }: SunriseSunsetProps) {
    // Helper functie om tijd om te zetten naar minuten sinds middernacht
    const timeToMinutes = (time: string) => {
        const [hour, minute] = time.split(/:| /);
        let totalMinutes = parseInt(hour) * 60 + parseInt(minute);
        if (time.includes("PM") && hour !== "12") totalMinutes += 12 * 60;
        if (time.includes("AM") && hour === "12") totalMinutes -= 12 * 60;
        return totalMinutes;
    };

    const sunriseMinutes = timeToMinutes(sunrise);
    const sunsetMinutes = timeToMinutes(sunset);
    const currentMinutes = timeToMinutes(currentTime);

    // Berekening van de zonpositie in de boog (0 = start, 1 = eind)
    const sunPosition = (currentMinutes - sunriseMinutes) / (sunsetMinutes - sunriseMinutes);
    const sunAngle = Math.max(0, Math.min(sunPosition, 1)) * 180;

    return (
      <div className="flex flex-col items-center space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400">Sunrise & Sunset</h3>
          <div className="relative w-40 h-20">
              {/* Boog */}
              <svg viewBox="0 0 200 100" className="absolute inset-0">
                  <path d="M10,90 A90,90 0 0,1 190,90" fill="none" stroke="orange" strokeWidth="5" />
              </svg>
              {/* Zon animatie */}
              <motion.div
                className="absolute w-6 h-6 bg-yellow-400 rounded-full"
                style={{ left: `${10 + (sunAngle / 180) * 180}px`, bottom: "55px" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
          </div>
          <div className="flex justify-between w-40 text-sm text-gray-300">
              <span>{sunrise}</span>
              <span>{sunset}</span>
          </div>
      </div>
    );
}