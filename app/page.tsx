'use client';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 space-y-12">
      <div className="text-center space-y-6">
        <img
          src="/Logo04.jpg"
          alt="Inkverse Logo"
          className="w-72 h-auto mx-auto drop-shadow-2xl"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider text-purple-400">
          WELCOME TO THE INKVERSE
        </h1>
        <p className="italic text-xl text-gray-400">
          A universe written in shadow, sealed in ink.
        </p>
        <button className="mt-8 bg-purple-600 hover:bg-purple-800 text-white px-6 py-3 text-lg rounded-2xl shadow-lg transition-all">
          ENTER
        </button>
      </div>

      <div className="text-center max-w-2xl text-gray-300">
        <p className="text-lg">
          Stories beyond dimensions. Worlds built in chaos.
        </p>
        <p className="text-base italic mt-4">
          This ain’t just a book—it’s a damn portal.
        </p>
        <p className="text-yellow-300 text-xl mt-6">Chronicles Begin Soon.</p>
      </div>

      <footer className="absolute bottom-4 text-sm text-gray-600">
        © 2025 Inkverse. All rights warped.
      </footer>
    </main>
  );
}

