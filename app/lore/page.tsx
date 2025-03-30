'use client';

import { useEffect } from "react";

export default function LorePage() {
  useEffect(() => {
    const canvas = document.getElementById("particles") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const shards = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let shard of shards) {
        ctx.beginPath();
        ctx.arc(shard.x, shard.y, shard.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168, 85, 247, 0.7)"; // purple glow
        ctx.shadowColor = "#a855f7";
        ctx.shadowBlur = 10;
        ctx.fill();

        shard.x += shard.dx;
        shard.y += shard.dy;

        if (shard.x < 0 || shard.x > width) shard.dx *= -1;
        if (shard.y < 0 || shard.y > height) shard.dy *= -1;
      }
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center font-mono space-y-8 relative overflow-hidden">
      <canvas
        id="particles"
        className="fixed top-0 left-0 w-full h-full z-0"
      ></canvas>

      <div className="max-w-2xl text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-500 mb-6">
          The First Fragment
        </h1>

        <p className="text-lg text-gray-300 leading-loose">
          <em>In the beginning, there was silence.</em><br />
          Not peace. Not light. Just silence — heavy, waiting.
        </p>

        <p className="text-lg text-gray-300 leading-loose mt-6">
          Then something fell.
        </p>

        <p className="text-lg text-gray-300 leading-loose mt-6">
          Not a star. Not a god. <br />
          Something older.
        </p>

        <p className="text-lg text-gray-300 leading-loose mt-6">
          The world shifted. Nyewebe cracked. <br />
          Whispers crawled into the minds of the broken.
        </p>

        <p className="text-lg text-gray-300 leading-loose mt-6">
          Children touched it in the dark. <br />
          Elders dreamed of it and woke choking on ash.
        </p>

        <p className="text-lg text-gray-300 leading-loose mt-6">
          The first shard was only that — a piece. A fragment.
        </p>

        <p className="text-lg text-gray-300 leading-loose mt-6">
          Then came another. <br />
          Then… a third.
        </p>

        <p className="text-lg text-gray-300 leading-loose mt-6">
          Together, they were never meant to exist on one plane.
        </p>

        <p className="text-lg text-gray-300 leading-loose mt-6">
          Together, they unmake everything.
        </p>

        <p className="text-lg text-gray-300 leading-loose mt-6">
          Some call them power. <br />
          Others call them prophecy.
        </p>

        <p className="text-xl text-purple-400 font-semibold leading-loose mt-6">
          But those who remember… they call them something else: <br />
          <span className="text-white text-2xl">The beginning of the end.</span>
        </p>
      </div>
    </main>
  );
}

