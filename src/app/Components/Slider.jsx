"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[270px] md:h-[600px] mt-10 rounded-2xl overflow-hidden">

      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[current].img})`,
          }}
        />
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
              current === i ? "bg-white scale-125" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
