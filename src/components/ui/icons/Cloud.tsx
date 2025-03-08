import {motion} from 'framer-motion'

export const Cloud = ({ delay, size, opacity, y }: { delay: number; size: number; opacity: number; y: number }) => {
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
      initial={{ x: "-50%" }}
      animate={{ x: "50%" }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear", delay }}
    >
      <path
        fill="white"
        d="M20 10c0-5.523 4.477-10 10-10 4.007 0 7.44 2.352 9.01 5.729A8.001 8.001 0 0 1 44 8a8 8 0 0 1 0 16H12a8 8 0 1 1 8-14z"
      />
    </motion.svg>
  );
};
