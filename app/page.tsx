'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center space-y-10">
      {/* Logo */}
      <img
        src="/Logo04.jpg"
        alt="Inkverse Logo"
        className="w-[180px] sm:w-[280px] md:w-[360px] h-auto mx-auto drop-shadow-2xl mt-6 mb-2"
      />

      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-purple-500 text-center">
        WELCOME TO THE INKVERSE
      </h1>

      {/* Description */}
      <p className="text-center text-gray-300 max-w-2xl text-lg">
        The Inkverse is a universe written in shadow, sealed in ink — where dark fantasy, sci-fi, and RPG-inspired stories collide across dimensions.
      </p>

      {/* Book Cover */}
      <img
        src="/echo-prime-cover.png"
        alt="Escape from Echo Prime Book Cover"
        className="w-full max-w-md mx-auto mt-4 rounded-lg shadow-2xl"
      />

      {/* Echo Prime Promo */}
      <div className="text-center max-w-xl text-sm sm:text-base">
        <h2 className="text-yellow-400 font-bold text-xl mt-6">Coming Fall 2025</h2>
        <p className="text-gray-300 mt-2">
          <em>"Escape from Echo Prime"</em> — a prequel to <em>"The Chronicles of Ink"</em>. Dive into the mystery before the war.
        </p>
        <a
          href="#newsletter"
          className="inline-block mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-800 transition-all text-white rounded-lg shadow-md"
        >
          Sign up for Echo Prime Updates
        </a>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-4 text-sm text-purple-400">
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
          <a href="https://facebook.com" target="_blank">Facebook</a>
        </div>
      </div>

      {/* Newsletter Form */}
      <form
        id="newsletter"
        action="https://formsubmit.co/ukilles@gmail.com"
        method="POST"
        className="mt-10 w-full max-w-md text-center"
      >
        <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
          Join the Resistance — get Inkverse updates straight to your inbox.
        </label>
        <div className="flex space-x-2">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="you@galaxy.net"
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-purple-700 hover:bg-purple-900 transition-all text-white rounded-lg"
          >
            Join
          </button>
        </div>
      </form>

      {/* Footer */}
      <footer className="text-sm text-gray-500 mt-10">
        © 2025 Inkverse. All rights warped.
      </footer>
    </main>
  );
}

