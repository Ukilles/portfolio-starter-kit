'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-black text-white relative min-h-screen overflow-x-hidden">
      {/* Stars BG */}
      <div className="absolute inset-0 bg-[url('/stars.gif')] bg-cover mix-blend-lighten opacity-20 z-0" />

      {/* Page Wrapper with Top Padding */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-[10vh] space-y-10 pb-20">

        {/* Logo */}
        <img
          src="/Logo04.jpg"
          alt="Inkverse Logo"
          className="w-[200px] sm:w-[260px] md:w-[320px] h-auto drop-shadow-2xl"
        />

        {/* Welcome Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-500 text-center">
          WELCOME TO THE INKVERSE
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-center text-slate-300 max-w-2xl">
          The Inkverse is a universe written in shadow, sealed in ink — where dark fantasy, sci-fi, and RPG-inspired stories collide across dimensions.
        </p>

        {/* Book Cover */}
        <img
          src="/echo-prime-cover.png"
          alt="Escape from Echo Prime Book Cover"
          className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
        />

        {/* Book CTA */}
        <div className="text-center space-y-4">
          <h2 className="text-yellow-400 font-bold text-xl">Coming Fall 2025</h2>
          <p className="text-sm italic text-slate-300 max-w-md">
            <em>"Escape from Echo Prime"</em> — a prequel to <em>"The Chronicles of Ink"</em>. Dive into the mystery before the war.
          </p>
          <Link href="https://your-subscription-link.com">
            <button className="bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300">
              Sign up for Echo Prime Updates
            </button>
          </Link>
          <div className="flex justify-center gap-6 text-sm text-slate-400 pt-2">
            <a href="https://instagram.com" target="_blank">Instagram</a>
            <a href="https://twitter.com" target="_blank">Twitter</a>
            <a href="https://facebook.com" target="_blank">Facebook</a>
          </div>
        </div>

        {/* Email Newsletter */}
        <div className="pt-12 text-center">
          <p className="text-slate-400 mb-2">Join the Resistance — get Inkverse updates straight to your inbox.</p>
          <form className="flex items-center justify-center gap-2 flex-wrap">
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
        <footer className="pt-12 text-xs text-slate-500 text-center">
          © 2025 Inkverse. All rights warped.
        </footer>
      </div>
    </main>
  );
}

