'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-black text-white p-4 space-y-8">
      {/* Logo */}
      <img
        src="/Logo04.jpg"
        alt="Inkverse Logo"
        className="w-[180px] sm:w-[280px] md:w-[360px] h-auto drop-shadow-2xl mt-8"
      />

      {/* Welcome Header */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-purple-500 text-center tracking-wide">
        WELCOME TO THE INKVERSE
      </h1>

      {/* Tagline */}
      <p className="text-center text-sm md:text-base text-gray-300 max-w-xl">
        The Inkverse is a universe written in shadow, sealed in ink — where dark fantasy, sci-fi, and RPG-inspired stories collide across dimensions.
      </p>

      {/* Book Cover */}
      <img
        src="/echo-prime-cover.png"
        alt="Escape from Echo Prime Book Cover"
        className="w-full max-w-md rounded-lg shadow-2xl"
      />

      {/* Echo Prime CTA */}
      <div className="text-center space-y-4 mt-4">
        <h2 className="text-yellow-400 text-xl font-bold">Coming Fall 2025</h2>
        <p className="text-sm italic text-gray-200 max-w-md mx-auto">
          <span className="text-white">*Escape from Echo Prime*</span> — a prequel to <span className="text-white">*The Chronicles of Ink*</span>. Dive into the mystery before the war.
        </p>

        <a
          href="#subscribe"
          className="inline-block bg-purple-600 hover:bg-purple-800 transition-all text-white px-6 py-2 rounded-xl text-sm shadow-md"
        >
          Sign up for Echo Prime Updates
        </a>

        {/* Social Links */}
        <div className="text-xs text-gray-400 flex justify-center space-x-6 pt-2">
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
          <a href="https://facebook.com" target="_blank">Facebook</a>
        </div>
      </div>

      {/* Email Signup */}
      <form
        action="https://formsubmit.co/ukilles@gmail.com"
        method="POST"
        className="mt-10 w-full max-w-sm text-sm"
        id="subscribe"
      >
        <label htmlFor="email" className="block text-gray-400 mb-2 text-center">
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

      {/* Footer */}
      <footer className="text-xs text-gray-600 pt-12 text-center">
        © 2025 Inkverse. All rights warped.
      </footer>
    </main>
  );
}

