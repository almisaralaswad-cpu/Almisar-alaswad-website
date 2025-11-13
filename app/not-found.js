'use client';

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      
      <Image
        src="/404.png"   // <-- replace with your own SVG or image
        alt="Not Found"
        width={300}
        height={300}
        className="mb-8"
      />

      <h1 className="text-3xl font-bold text-[#111D15] mb-4">
        Page Not Found
      </h1>

      <p className="text-[#666] max-w-[400px] mb-6">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        href="/"
        className="bg-[#CF3D31] text-white px-6 py-3 rounded-[6px] font-medium hover:bg-white hover:text-[#111D15] hover:border hover:border-[#CF3D31] transition-all"
      >
        Go Back Home
      </Link>

    </div>
  );
}
