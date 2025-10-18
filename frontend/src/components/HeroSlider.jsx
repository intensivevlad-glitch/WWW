import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🧩 Slides data with high-quality images
const slides = [
  { 
    id: 1, 
    img: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=1200&q=80", 
    text: "Кожна крапля має значення." 
  },
  { 
    id: 2, 
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80", 
    text: "Разом ми сильніші у боротьбі з раком крові." 
  },
  { 
    id: 3, 
    img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80", 
    text: "Ваш внесок — це шанс на життя." 
  },
  { 
    id: 4, 
    img: "https://images.unsplash.com/photo-1582719366896-0e4a0b7e9b10?w=1200&q=80", 
    text: "Дарувати — це не просто пожертва, а різниця." 
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // ⏳ Automatic slide switching every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] md:h-[480px] lg:h-[550px] overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index].id}
          src={slides[index].img}
          alt={`Slide ${slides[index].id}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover select-none"
        />
      </AnimatePresence>

      {/* Caption */}
      <motion.div
        key={slides[index].text}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="absolute bottom-0 left-0 w-full bg-white/80 text-center text-lg md:text-xl font-semibold text-gray-800 p-4 md:p-6 backdrop-blur-sm"
      >
        {slides[index].text}
      </motion.div>

      {/* Dots navigation */}
      <div className="absolute bottom-20 md:bottom-24 right-0 left-0 flex justify-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-red-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

