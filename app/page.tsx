'use client'; 

export const metadata = {
  title: "Inkverse | Stories Written in Shadow",
  description: "Enter the Inkverse — a portal to tales beyond dimensions. Discover lore, darkness, chaos, and the chronicles that shape it all.",
  keywords: ["Inkverse", "Chronicles of Ink", "sci-fi", "dark fantasy", "RPG universe"],
  authors: [{ name: "Luciano Gomez" }],
  creator: "Luciano Gomez",
  themeColor: "#000000",
  openGraph: {
    title: "Inkverse",
    description: "This ain't just a book — it's a damn portal.",
    url: "https://www.enterinkverse.com",
    siteName: "Inkverse",
    images: [
  {
    url: "https://www.enterinkverse.com/Logo04.jpg",
    width: 800,
    height: 600,
    alt: "Inkverse Logo",
  },
],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
   <main className="min-h-screen flex flex-col items-center justify-center space-y-12">
      <div className="text-center space-y-6">
        <img
  src="/Logo04.jpg"
  alt="Inkverse Logo"
  className="w-[172px] sm:w-[300px] md:w-[380px] h-auto mx-auto drop-shadow-2xl"
/>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider text-purple-400">
          WELCOME TO THE INKVERSE
        </h1>
        <p className="italic text-xl text-gray-400">
          A universe written in shadow, sealed in ink.
        </p>
        <button className="mt-8 px-6 py-3 text-lg rounded-2xl text-white shadow-xl bg-purple-600 hover:bg-purple-800 transition-all animate-pulse hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] duration-300">
  ENTER
</button>
<form className="mt-10 w-full max-w-sm mx-auto">
  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
    Join the Resistance. Get updates from the Inkverse.
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
    }

