"use client";

export default function BackgroundPatterns() {
  return (
    <div aria-hidden className="absolute top-0 left-0 w-full h-full -z-10">
      <div className="absolute top-[-20vh] left-[-20vw] w-[80vw] h-[80vw] bg-gradient-to-br from-yellow-100/40 via-blue-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[-20vh] right-[-20vw] w-[70vw] h-[70vw] bg-gradient-to-tl from-blue-100/30 via-yellow-50/10 to-transparent rounded-full blur-3xl" />
    </div>
  );
} 