'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import { navItems } from './../lib/constants';

export default function CloudNav() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <button
          className="md:hidden absolute top-4 left-4 p-2 z-50"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
        </button>
  
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed md:hidden inset-0 bg-black/50 z-40 flex items-start justify-center pt-40 text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="grid grid-cols-1 gap-6"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                    <div className="cloud text-center">{item.label}</div>
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
  
        <div className="hidden md:grid lg:hidden absolute top-4 left-1/2 transform -translate-x-1/2 gap-4 grid-cols-2 text-2xl">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className="cloud text-center">{item.label}</div>
            </Link>
          ))}
        </div>
  
        <div className="hidden lg:flex absolute top-4 left-1/2 transform -translate-x-1/2 gap-6 text-2xl">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className="cloud">{item.label}</div>
            </Link>
          ))}
        </div>
      </>
    );
  }