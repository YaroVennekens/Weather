import { motion } from "framer-motion";

export const Sunny = ({ size = 128, opacity = 1 }: { size?: number; opacity?: number }) => {
    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width={size}
        height={size}
        style={{ opacity }}
        initial={{ scale: 0.9, opacity: 0.8 }}
        animate={{ scale: [0.9, 1, 0.9], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >

          <circle cx="64" cy="64" r="24" fill="yellow" />


          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1="64"
              y1="20"
              x2="64"
              y2="4"
              stroke="yellow"
              strokeWidth="6"
              strokeLinecap="round"
              transform={`rotate(${i * 45} 64 64)`}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.2 }}
            />
          ))}
      </motion.svg>
    );
};