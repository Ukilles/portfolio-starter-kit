'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-black text-white px-4 py-10 relative overflow-x-hidden space-y-8">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 bg-[url('/stars.gif')] bg-cover opacity-20 mix-blend-lighten" />

      {/* Logo */}
      <div className="z-10 mt-10">
        <img
          src="/Logo04.jpg"
          alt="Inkverse Logo"
          className="w-[180px] sm:w-[240px] md:w-[300px] h-auto drop-shadow-2xl"
        />
      </div>

      {/* Welcome Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-500 text-center z-10 mt-4">
        WELCOME TO THE INKVERSE
      </h1>

      {/* Intro Text */}
      <p className="text-sm sm:text-base md:text-lg text-center text-slate-300 max-w-2xl z-10">
        The Inkverse is a universe written in shadow, sealed in ink — where dark fantasy, sci-fi, and RPG-inspired stories collide across dimensions.
      </p>

      {/* Book Cover */}
      <img
        src="/echo-prime-cover.png"
        alt="Escape from Echo Prime Book Cover"
        className="w-full max-w-md mx-auto rounded-lg shadow-2xl z-10"
      />

      {/* Coming Soon Section */}
      <div className="text-center space-y-4 z-10">
        <h2 className="text-yellow-400 font-bold text-xl">Coming Fall 2025</h2>
        <p className="text-sm italic text-slate-300 max-w-md">
          <em>"Escape from Echo Prime"</em> — a prequel to <em>"The Chronicles of Ink"</em>. Dive into the mystery before the war.
        </p>
        <Link href="https://your-subscription-link.com" passHref>
          <button className="bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300">
            Sign up for Echo Prime Updates
          </button>
        </Link>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-sm text-slate-400 pt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="pt-12 text-center z-10">
        <p className="text-slate-400 mb-2">Join the Resistance — get Inkverse updates straight to your inbox.</p>
        <form className="flex items-center justify-center gap-2">
          <input
            type="email"
            placeholder="you@galaxy.net"
            className="px-4 py-2 rounded-lg bg-slate-800 text-white placeholder-slate-400 w-64"
          />
          <button type="submit" className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-lg">
            Join
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="pt-12 text-xs text-slate-500 z-10">
        © 2025 Inkverse. All rights warped.
      </footer>
    </main>
  );
}

