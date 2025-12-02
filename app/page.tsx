"use client";
import Image from "next/image";

export default function Home() {

  return (
    <div className="min-h-screen flex justify-evenly items-center bg-white">
      <Image
        src="/images/img_01.avif"
        alt="huiuiui"
        width={800}
        height={600}
        className="w-fit h-fit rounded-lg shadow-lg"
      />
      <h1 className="font-bold text-3xl text-red-800">
        Welcome to the Home Pageee
      </h1>
    </div>
  );
}
