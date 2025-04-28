'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props { quote: string; next: () => void }

export default function QuoteDisplay({ quote, next }: Props) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
  
    return (
      <div className="absolute bottom-22 text-center flex flex-col items-center gap-2">
        <AnimatePresence mode="wait">
          {mounted && (
            <motion.p
              key={quote}
              className="italic text-2xl max-w-3xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              “{quote}”
            </motion.p>
          )}
        </AnimatePresence>
        <button
          onClick={next}
          className="mt-10 px-4 py-1 bg-white/20 backdrop-blur rounded-full text-xl hover:bg-white/30 transition"
        >
          Next quote ↻
        </button>
      </div>
    );
  }