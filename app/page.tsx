'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 pt-8 pb-16 flex flex-col items-center space-y-8">
      {/* Logo */}
      <img
        src="/Logo04.jpg"
        alt="Inkverse Logo"
        className="w-[160px] sm:w-[220px] md:w-[280px] h-auto mx-auto drop-shadow-2xl mt-4"
      />

      {/* Welcome Header */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-500 text-center mt-2">
        WELCOME TO THE INKVERSE
      </h1>

      <p className="text-center text-gray-300 max-w-2xl">
        The Inkverse is a universe written in shadow, sealed in ink —
        where dark fantasy, sci-fi, and RPG-inspired stories collide across dimensions.
      </p>

      {/* Book Cover */}
      <img
        src="/echo-prime-cover.png"
        alt="Escape from Echo Prime Book Cover"
        className="w-full max-w-md rounded-lg shadow-2xl"
      />

      {/* Echo Prime Info */}
      <div className="text-center space-y-3 mt-4">
        <h2 className="text-yellow-400 text-lg font-bold">Coming Fall 2025</h2>
        <p className="text-gray-300 text-sm italic max-w-md mx-auto">
          <em>"Escape from Echo Prime"</em> — a prequel to <em>"The Chronicles of Ink"</em>. Dive into the mystery before the war.
        </p>

        <a
          href="#newsletter"
          className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-800 transition-all"
        >
          Sign up for Echo Prime Updates
        </a>

        <div className="flex justify-center space-x-4 text-sm text-purple-400">
          <a href="#" target="_blank">Instagram</a>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">Facebook</a>
        </div>
      </div>

      {/* Newsletter Form */}
      <form
        id="newsletter"
        action="https://formsubmit.co/ukilles@gmail.com"
        method="POST"
        className="mt-8 w-full max-w-sm text-center space-y-3"
      >
        <label htmlFor="email" className="block text-sm text-gray-400">
          Join the Resistance — get Inkverse updates straight to your inbox.
        </label>
        <div className="flex space-x-2">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@galaxy.net"
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-900 transition-all text-white"
          >
            Join
          </button>
        </div>
      </form>

      <footer className="mt-10 text-sm text-gray-500 text-center">
        © 2025 Inkverse. All rights warped.
      </footer>
    </main>
  );
}


