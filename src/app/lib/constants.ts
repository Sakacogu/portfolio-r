import type { Variants } from 'framer-motion';

export const navItems = [
  { label: 'Home',     href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

export const crumbleVariants: Variants = {
  initial: { opacity: 1, y: 0, rotate: 0 },
  crumble: (i: number) => ({
    opacity: 1,
    y: 300 + Math.random() * 50,
    rotate: -90 + Math.random() * 180,
    transition: { delay: i * 0.04, duration: 0.8, ease: 'easeIn' },
  }),
};

export const breakVariants: Variants = {
  initial: { opacity: 1, x: 0 },
  brokenLeft: {
    opacity: 1,
    x: -200,
    rotate: -15,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  brokenRight: {
    opacity: 1,
    x: 200,
    rotate: 15,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
