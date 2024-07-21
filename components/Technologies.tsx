"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const technologies = [
  {
    num: "01",
    title: "Web Development",
    description: "Develop responsive and visually appealing websites that reflects your brand identity",
  },
  {
    num: "02",
    title: "Mobile Application Developer",
    description:
     "Using google's flutter framework to build natively compiled application for mobile, web and desktop from a single codebase",
  },
  {
    num: "03",
    title: "3D Websites",
    description: 
    "3D websites that looks stunning and engages user with interactive 3D models, animations and effects",
  },
  {
    num: "04",
    title: "Odoo TechnoFunctional Consultant",
    description: 
    "Combining technical expertise with functional knowledge, providing seamless integration, customization and optimization of Odoo for your business needs",
  },
]

export default function Technologies() {

  return (
    <section className="min-h-[100vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        
          {technologies.map((technology, index) => {
            return (
              <div key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group">
                <motion.div whileTap={{scaleX: 0.8 }}
                            className="grid grid-cols-1 md-grid-cols-2 gap-[60px]">
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline tex-transparent group-hover:text-outline-hover 
                    transition-all duration-500">
                      {technology.num}
                    </div>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {technology.title}
                  </h2>
                  <p className="text-white/60">{technology.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </motion.div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
