import { motion } from "framer-motion";

interface SnowflakeProps {
  delay: number;
  size: number;
  xStart: number;
}

const Snowflake = ({ delay, size, xStart }: SnowflakeProps) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        top: "0",
        left: `${xStart}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "white",
        opacity: 0.7,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: "100vh",
        opacity: [0.7, 0.4, 0.7],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 10 + Math.random() * 5,
        delay: delay,
        ease: "linear",
      }}
    />
  );
};

export const SnowCloud = ({
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

  const snowflakes = Array.from({ length: 20 }).map((() => {
    return {
      delay: Math.random() * 2,
      size: Math.random() * 5 + 5,
      xStart: Math.random() * 100,
    };
  }));

  return (
    <motion.div
      style={{
        position: "absolute",
        top: `${y}%`,
        left: "50%",
        transform: "translateX(-50%)",
        opacity,
        width: `${size}px`,
        height: `${size / 2}px`,
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
          duration: 0.5,
        },
      }}
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 32"
        width="100%"
        height="100%"
        style={{ position: "absolute" }}
      >
        <path
          fill="lightgray"
          d="M20 10c0-5.523 4.477-10 10-10 4.007 0 7.44 2.352 9.01 5.729A8.001 8.001 0 0 1 44 8a8 8 0 0 1 0 16H12a8 8 0 1 1 8-14z"
        />
      </svg>


      {snowflakes.map((snowflake, index) => (
        <Snowflake
          key={index}
          delay={snowflake.delay}
          size={snowflake.size}
          xStart={snowflake.xStart}
        />
      ))}
    </motion.div>
  );
};