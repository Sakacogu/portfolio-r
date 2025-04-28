"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import "./globals.css";


const projects = [
  {
    title: "The Hungry Llama",
    description: "A professional website for a food catering business.",
    link: "/projects/TheHungryLlama/src/index.html",
    preview: "/projects/TheHungryLlama/src/index.html"
  },
  {
    title: "TicTacToe",
    description: "Classic game with an optional twist.",
    link: "/projects/hand-in-2.0/index.html",
    preview: "/projects/hand-in-2.0/index.html"
  },
  {
    title: "Clothing Website",
    description: "A stylish Flutter-based clothing store UI.",
    link: "/projects/web/index.html",
    preview: "/projects/web/index.html"
  }
];

export default function Page() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState(0);



  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);


  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Sakacogu Portfolio</h1>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      <section className="mb-8">
        <motion.p
          className="italic mb-2 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
        </motion.p>
      </section>

      <section className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3 flex flex-col gap-4">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setActive(idx)}
              className={`p-4 rounded-lg cursor-pointer border ${
                active === idx ? "border-blue-500" : "border-gray-300"
              } bg-gray-50 dark:bg-gray-800`}
            >
              <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
              <p className="text-sm mb-2">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline text-sm"
              >
                Open in new tab ↗
              </a>
            </div>
          ))}
        </div>


        <div className="lg:w-2/3 h-[600px]">
          <iframe
            src={projects[active].preview}
            className="w-full h-full rounded-lg border shadow"
            title={`${projects[active].title} Preview`}
          />
        </div>
      </section>

      <motion.div
        className="fixed bottom-4 left-4 w-10 h-10 rounded-full z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ backgroundColor: dark ? "#000" : "#f43f5e" }}
      />
    </main>
  );
}

