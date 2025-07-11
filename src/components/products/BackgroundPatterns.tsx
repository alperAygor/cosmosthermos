"use client";

export default function BackgroundPatterns() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-10vw] top-[-10vw] w-[60vw] h-[60vw] bg-gradient-to-br from-yellow-100/40 via-blue-100/30 to-white/0 rounded-full blur-3xl" />
      <div className="absolute right-[-10vw] bottom-[-10vw] w-[50vw] h-[50vw] bg-gradient-to-tr from-blue-100/30 via-yellow-50/10 to-white/0 rounded-full blur-3xl" />
    </div>
  );
} 