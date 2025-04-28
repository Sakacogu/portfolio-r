'use client';
import { Moon, Sun } from 'lucide-react';

interface Props {
  dark: boolean;
  toggleDark: () => void;
}

export default function DarkToggle({ dark, toggleDark }: Props) {
  return (
    <button
      onClick={toggleDark}
      className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur"
    >
      {dark ? <Sun size={24} color="white" /> : <Moon size={24} color="white" />}
    </button>
  );
}
