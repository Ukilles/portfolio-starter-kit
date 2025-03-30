'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function EchoPrimeTeaser() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-green-400 font-mono p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(10,10,10,1)_0%,_rgba(0,0,0,1)_100%)] animate-pulse opacity-30" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/stars.gif')] bg-cover mix-blend-lighten opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="text-center space-y-6 max-w-3xl z-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold glitch" data-text="TRANSMISSION INTERCEPTED">
          TRANSMISSION INTERCEPTED
        </h1>
        <p className="text-lg md:text-xl text-green-300 leading-relaxed">
          This message was not meant for your eyes.
          <br />
          <br />
          Echo Prime was never found—it was unleashed.
          Orbiting just beyond Stellaxis, the derelict station drifts with purpose, haunted by artificial ghosts and the last breath of a dying civilization. Gilgamesh didn't build it. He woke it.
          <br />
          <br />
          Inside its hollow walls, something stirs. Records erased. Coordinates corrupted. Signals looping. Anomalies detected.
          <br />
          <br />
          Proceed with caution.
        </p>
        <motion.button
          whileHover={{ scale: 1.1, rotate: [0, 1, -1, 0] }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition-all shadow-md"
          onClick={() => window.location.href = '/lore'}
        >
          Continue to Lore
        </motion.button>
      </motion.div>

      <style jsx>{`
        .glitch {
          position: relative;
          color: #0f0;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          color: #0f0;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch::before {
          animation: glitchTop 2s infinite linear alternate-reverse;
        }
        .glitch::after {
          animation: glitchBottom 2s infinite linear alternate-reverse;
        }
        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); }
          5% { clip: rect(0, 9999px, 10px, 0); }
          10% { clip: rect(0, 9999px, 0, 0); }
        }
        @keyframes glitchBottom {
          0% { clip: rect(0, 9999px, 0, 0); }
          5% { clip: rect(10px, 9999px, 9999px, 0); }
          10% { clip: rect(0, 9999px, 0, 0); }
        }
      `}</style>
    </main>
  );
}

