'use client';
import React, { useState, useEffect, JSX } from 'react';
import { motion, Transition } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiFlutter,
  SiDart,
} from 'react-icons/si';

const skills = [
  { label: 'HTML',        icon: <SiHtml5 /> },
  { label: 'CSS',         icon: <SiCss3 /> },
  { label: 'Tailwind CSS',icon: <SiCss3 /> },
  { label: 'JavaScript',  icon: <SiJavascript /> },
  { label: 'React',       icon: <SiReact /> },
  { label: 'Node.js',     icon: <SiNodedotjs /> },
  { label: 'Flutter',     icon: <SiFlutter /> },
  { label: 'Dart',        icon: <SiDart /> },
];

export default function SkillsTicker(): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);


  const looped = [...skills, ...skills] as typeof skills;


  const marqueeTransition: Transition = {
    repeat: Infinity,
    repeatType: 'loop',
    duration: 28,
    ease: 'linear',
  };
  const pingpongTransition: Transition = {
    repeat: Infinity,
    repeatType: 'reverse',
    duration: 6,
    ease: 'easeInOut',
  };

  if (isMobile) {

    return (
      <div className="absolute bottom-80 left-0 w-full overflow-hidden whitespace-nowrap font-bold">
        <motion.div
          className="inline-flex"
          style={{ willChange: 'transform' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={marqueeTransition}
        >
          {looped.map((s, idx) => (
            <span
              key={`${s.label}-${idx}`}
              className="
                inline-flex items-center
                gap-2        sm:gap-2
                px-7         sm:px-10
                py-3         sm:py-2
                mx-2         sm:mx-2
                text-2xlg      sm:text-2xl
                border border-white rounded-full
                bg-white/20 backdrop-blur-sm
                cursor-pointer transition-transform duration-200
              "
            >
              {s.icon}
              <span className="ml-1">{s.label}</span>
            </span>
          ))}
        </motion.div>
      </div>
    );
  }


  return (
    <motion.div
      className="absolute bottom-80 whitespace-nowrap font-semibold"
      animate={{ x: ['-5%', '5%'] }}
      transition={pingpongTransition}
    >
      {skills.map((s) => (
        <motion.span
          key={s.label}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95, rotate: -10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="
            inline-flex items-center
            gap-1        sm:gap-2
            px-2         sm:px-10
            py-1         sm:py-2
            mx-1         sm:mx-3
            text-xs      sm:text-2xl
            border border-white rounded-full
            bg-white/20 backdrop-blur-sm
            cursor-pointer transition-transform duration-200
          "
        >
          {s.icon}
          <span className="ml-1">{s.label}</span>
        </motion.span>
      ))}
    </motion.div>
  );
}
