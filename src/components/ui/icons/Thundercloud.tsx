import { motion } from "framer-motion";

export const ThunderCloud = ({
                                 delay,
                                 size,
                                 opacity,
                                 y,
                             }: {
    delay: number;
    size: number;
    opacity: number;
    y: number;
}) => {
    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 32"
        className="absolute"
        width={size}
        height={size / 2}
        style={{
            top: `${y}%`,
            left: "50%",
            transform: "translateX(-50%)",
            opacity,
        }}
        initial={{ x: "-50%", opacity: 0.5 }}
        animate={{
            x: "50%",
            opacity: [0.5, 0.6, 0.5],
        }}
        transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
            delay,
            opacity: {
                repeatType: "loop",
                repeat: Infinity,
                duration: 0.2,
            },
        }}
      >

          <path
            fill="gray"
            d="M20 10c0-5.523 4.477-10 10-10 4.007 0 7.44 2.352 9.01 5.729A8.001 8.001 0 0 1 44 8a8 8 0 0 1 0 16H12a8 8 0 1 1 8-14z"
          />

          <motion.path
            fill="yellow"
            d="M30 18l3-7-3-1 1-7-3 5 1 4-4-2z"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
                repeat: Infinity,
                duration: 0.5,
                repeatType: "loop",
                delay,
            }}
          />
      </motion.svg>
    );
};