'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-black text-white px-4 pt-28 pb-10 space-y-100 relative overflow-x-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 bg-[url('/stars.gif')] bg-cover opacity-80 mix-blend-lighten" />

      {/* Logo */}
      <img
        src="/Logo04.jpg"
        alt="Inkverse Logo"
        className="w-[180px] sm:w-[260px] md:w-[340px] h-auto drop-shadow-2xl z-10"
      />

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-purple-500 text-center z-10 animate-fade-in">
        WELCOME TO THE INKVERSE
      </h1>

      {/* Description */}
      <p className="text-center text-sm md:text-base text-gray-300 max-w-xl z-10 animate-fade-in delay-100">
        The Inkverse is a universe written in shadow, sealed in ink — where dark fantasy, sci-fi, and RPG-inspired stories collide across dimensions.
      </p>

      {/* Book Cover */}
      <img
        src="/echo-prime-cover.png"
        alt="Escape from Echo Prime Book Cover"
        className="w-full max-w-md rounded-lg shadow-2xl z-10 animate-fade-in delay-200"
      />

      {/* Echo Prime Teaser */}
      <div className="text-center space-y-4 mt-2 z-10 animate-fade-in delay-300">
        <h2 className="text-yellow-400 text-xl font-bold">Coming Fall 2025</h2>
        <p className="text-sm italic text-gray-200 max-w-md mx-auto">
          <span className="text-white">*Escape from Echo Prime*</span> — a prequel to <span className="text-white">*The Chronicles of Ink*</span>. Dive into the mystery before the war.
        </p>

        <a
          href="#subscribe"
          className="inline-block bg-purple-600 hover:bg-purple-800 transition-all text-white px-6 py-2 rounded-xl text-sm shadow-lg animate-pulse"
        >
          Sign up for Echo Prime Updates
        </a>

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
        className="w-full max-w-sm text-sm z-10 animate-fade-in delay-500"
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
      <footer className="text-xs text-gray-600 pt-12 text-center z-10">
        © 2025 Inkverse. All rights warped.
      </footer>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </main>
  );
}

