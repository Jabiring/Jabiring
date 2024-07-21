"use client";

import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
    children?: ReactNode
}

export default function PageTransition({children}: Props) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div initial={{ opacity: 1 }}
                    animate={{
                      opacity: 0,
                      transition: { delay: 1.5, duration: 0.3, ease: "easeInOut" },
                    }}
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}
