'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-6 space-y-12">
      {/* Logo */}
      <div className="pt-10">
       <img
  src="/Logo04.jpg"
  alt="Inkverse Logo"
  className="w-[180px] sm:w-[280px] md:w-[360px] h-auto mx-auto drop-shadow-2xl mt-6 mb-2"
/>

<img
  src="/echo-prime-cover.png"
  alt="Escape from Echo Prime Book Cover"
  className="w-full max-w-md mx-auto mt-6 rounded-lg shadow-2xl"
/>

      {/* Hero Heading */}
      <div className="text-center max-w-4xl space-y-4">
        <h1 className="text-5xl font-extrabold tracking-wide text-purple-400">
          WELCOME TO THE INKVERSE
        </h1>
        <p className="text-lg text-gray-300">
          The Inkverse is a universe written in shadow, sealed in ink — where dark fantasy, sci-fi, and RPG-inspired stories collide across dimensions.
        </p>
      </div>

      {/* Echo Prime Call to Action */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl justify-center">
        <Image
          src="/Exscap from Echo Prime.png"
          alt="Escape from Echo Prime Book Cover"
          width={300}
          height={450}
          className="rounded-lg shadow-2xl"
        />
        <div className="max-w-md text-center md:text-left space-y-4">
          <h2 className="text-2xl font-bold text-yellow-400">Coming Fall 2025</h2>
          <p className="text-gray-300">
            *Escape from Echo Prime* — a prequel to *The Chronicles of Ink*. Dive into the mystery before the war.
          </p>
          <div className="space-y-2">
            <a
              href="#subscribe"
              className="inline-block px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-800 transition-all shadow-lg"
            >
              Sign up for Echo Prime Updates
            </a>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.instagram.com" target="_blank" className="underline text-sm text-gray-400">Instagram</a>
              <a href="https://www.twitter.com" target="_blank" className="underline text-sm text-gray-400">Twitter</a>
              <a href="https://www.facebook.com" target="_blank" className="underline text-sm text-gray-400">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <form
        id="subscribe"
        action="https://formsubmit.co/ukilles@gmail.com"
        method="POST"
        className="w-full max-w-md space-y-4"
      >
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
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
      <footer className="text-sm text-gray-500 py-6">
        © 2025 Inkverse. All rights warped.
      </footer>
    </main>
  );
}
