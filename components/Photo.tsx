
"use client";
import { motion } from "framer-motion"
import Image from "next/image";

export default function Photo() {

  return (
    <div className="w-full h-full relative">
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.4, duration: 0.5 }}>
        <div className="w-[250px] h-[250px] xl:w-[450px] xl:h-[450px] mix-blend-lighten absolute">
          <Image src="Jabiring/assets/dp.png"
                 priority
                 quality={100}
                 fill
                 alt="my-image"
                 className="object-contain"/>
        </div>
        <motion.svg className="w-[300px] xl:w-[500px] h-[300px] xl:h-[506px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg" >
          <motion.circle cx="253"
                         cy="253"
                         r="250"
                         stroke="#1a75ff"
                         strokeWidth="4"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         initial={{strokeDasharray: "24 10 0 0"}}
                         animate={{
                          strokeDasharray: ["15 120  25 25", "16 25 92 72", "4 250 22 22"],
                          rotate: [120, 360]
                         }}
                         transition={{
                          duration: 20,
                          repeat: Infinity,
                          repeatType: "reverse",
                         }}/>
        </motion.svg>
      </motion.div>
    </div>
  );
}