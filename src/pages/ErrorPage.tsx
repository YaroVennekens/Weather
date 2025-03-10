import { FunctionComponent, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import useCountdown from "@/hooks/UseCountdown";
import { Description } from "@/components/handy/Typograpghy";

const ErrorPage: FunctionComponent = () => {
    const countdown = useCountdown(4);
    const [randomIndex, setRandomIndex] = useState<number>(0);

    useEffect(() => {
        setRandomIndex(getRandomNumber(0, gifs.length));
    }, []);

    if (countdown === 0) {
        return <Navigate to={"/"} />;
    }

    const gifs = [
        "/assets/gifs/gif1.gif",
        "/assets/gifs/gif2.gif",
        "/assets/gifs/gif3.gif",
        "/assets/gifs/gif4.gif",
        "/assets/gifs/gif5.gif",
        "/assets/gifs/gif6.gif",
    ];


    function getRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
          <motion.div
            className="text-center text-4xl font-semibold text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
              <Description>page not found</Description>
          </motion.div>

          <motion.div
            className="mt-8 max-w-[350px] mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          >
              <img
                src={gifs[randomIndex]}
                alt="Error GIF"
                className="rounded-lg shadow-lg"
              />
          </motion.div>

          <motion.h1
            className="text-xl text-white mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          >
              {countdown}
          </motion.h1>

          <div className="pb-8"></div>
      </div>
    );
};

export default ErrorPage;
