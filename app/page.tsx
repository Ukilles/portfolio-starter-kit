'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-black text-white px-4 py-10 space-y-10">
      {/* Logo */}
      <Image
        src="/Logo04.jpg"
        alt="Inkverse Logo"
        width={280}
        height={280}
        className="mx-auto drop-shadow-xl"
        priority
      />

      {/* Welcome */}
      <h1 className="text-center text-4xl md:text-6xl font-extrabold text-purple-400">
        WELCOME TO THE INKVERSE
      </h1>
      <p className="text-center max-w-xl text-sm md:text-lg text-gray-300">
        The Inkverse is a universe written in shadow, sealed in ink — where dark fantasy, sci-fi, and RPG-inspired stories collide across dimensions.
      </p>

      {/* Book Cover */}
      <Image
        src="/echo-prime-cover.png"
        alt="Escape from Echo Prime Book Cover"
        width={400}
        height={600}
        className="rounded-xl shadow-2xl"
      />

      {/* Echo Prime CTA */}
      <section className="text-center max-w-lg space-y-4 mt-6">
        <h2 className="text-yellow-400 text-2xl font-bold">Coming Fall 2025</h2>
        <p className="text-gray-300 text-sm">
          <em>"Escape from Echo Prime"</em> — a prequel to <strong>The Chronicles of Ink</strong>.
          Dive into the mystery before the war begins.
        </p>
        <a
          href="#newsletter"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-800 text-white rounded-lg shadow-lg transition-all"
        >
          Sign up for Echo Prime Updates
        </a>
        <div className="flex justify-center space-x-6 text-sm mt-4 text-purple-400 underline">
          <Link href="https://instagram.com" target="_blank">Instagram</Link>
          <Link href="https://twitter.com" target="_blank">Twitter</Link>
          <Link href="https://facebook.com" target="_blank">Facebook</Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="w-full max-w-md text-center mt-10">
        <p className="text-sm text-gray-400 mb-2">
          Join the Resistance — get Inkverse updates straight to your inbox.
        </p>
        <form
          action="https://formsubmit.co/ukilles@gmail.com"
          method="POST"
          className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@galaxy.net"
            className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-900 rounded-md text-white transition-all"
          >
            Join
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-sm text-gray-600 mt-12">
        © 2025 Inkverse. All rights warped.
      </footer>
    </main>
  );
}

