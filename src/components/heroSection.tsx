import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "./moving-boarder";
import Title from "./title";

function HeroSection() {
  return (
    <section className="flex flex-col-reverse lg:gap-0 gap-20 lg:flex-row items-center justify-between min-h-[60vh] ">
      <div className="space-y-4 text-center lg:text-left">
        <h2 className="text-4xl xl:text-7xl lg:text-6xl font-bold">
          {`Nice to meet you 👋`}
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"i'm Chettar."}
          </span>
        </h2>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Morocco, i'm a FullStack developper passionated about building a modern web applications that users love"
          }
        </p>
        <Link href={"mailto:"} className="inline-block">
          <Title text={"Contact me 👋"} />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>📢 Available for work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
