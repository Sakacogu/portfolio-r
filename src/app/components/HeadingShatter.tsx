'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { crumbleVariants, breakVariants } from './../lib/constants';

export default function HeadingShatter() {
  const [crumbled, setCrumbled] = useState(false);
  const [broken, setBroken]   = useState(false);

  const devText = 'DEVELOPER';
  const mid     = Math.floor(devText.length/2);
  const left    = devText.slice(0,mid);
  const right   = devText.slice(mid);

  return (
    <div className="flex flex-col items-center space-y-4 pt-2">
      <motion.div onClick={()=> setCrumbled(true)} className="cursor-pointer">
        {'SAKACOGU'.split('').map((ch,i)=>(
          <motion.span key={i} custom={i}
            variants={crumbleVariants}
            initial="initial"
            animate={crumbled?'crumble':'initial'}
            className="inline-block text-6xl font-extrabold"
          >{ch}</motion.span>
        ))}
      </motion.div>
      <motion.div onClick={()=> setBroken(true)} className="cursor-pointer">
        <motion.span
          variants={breakVariants}
          initial="initial"
          animate={broken?'brokenLeft':'initial'}
          className="inline-block text-3xl font-light"
        >{left}</motion.span>
        <motion.span
          variants={breakVariants}
          initial="initial"
          animate={broken?'brokenRight':'initial'}
          className="inline-block text-3xl font-light"
        >{right}</motion.span>
      </motion.div>
    </div>
  );
}
