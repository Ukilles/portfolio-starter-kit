'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-black text-white px-4 pt-12 sm:pt-16 md:pt-20 space-y-10 relative overflow-x-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 bg-[url('/stars.gif')] bg-cover opacity-20 mix-blend-lighten" />

      {/* Logo */}
      <img
        src="/Logo04.jpg"
        alt="Inkverse Logo"
        className="w-[160px] sm:w-[220px] md:w-[280px] h-auto mt-8 sm:mt-12 md:mt-16 drop-shadow-2xl z-10"
      />

      {/* Welcome Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-500 text-center">
        WELCOME TO THE INKVERSE
      </h1>

      {/* Description */}
      <p className="text-center max-w-2xl text-sm sm:text-base text-slate-300">
        The Inkverse is a universe written in shadow, sealed in ink —
        where dark fantasy, sci-fi, and RPG-inspired stories collide across dimensions.
      </p>

      {/* Book Cover */}
      <img
        src="/echo-prime-cover.png"
        alt="Escape from Echo Prime Book Cover"
        className="w-full max-w-md mx-auto mt-6 rounded-lg shadow-2xl"
      />

      {/* Call to Action */}
      <div className="text-center space-y-2">
        <h2 className="text-yellow-400 text-lg font-bold">Coming Fall 2025</h2>
        <p className="text-sm italic max-w-lg text-slate-300 mx-auto">
          <span className="italic">*Escape from Echo Prime*</span> — a prequel to
          <span className="italic"> *The Chronicles of Ink*</span>. Dive into the mystery before the war.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-2 mt-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
        >
          Sign up for Echo Prime Updates
        </a>
        <div className="space-x-4 text-sm text-purple-400 mt-2">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </main>
  );
}

