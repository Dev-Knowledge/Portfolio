"use client";
import React from "react";
import Title from "./title";
import { HoverEffect } from "./card-hover-effect";
import {
  SiAirbnb,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "NextJS",
      Icon: SiNextdotjs,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Postgres",
      Icon: SiPostgresql,
    },
    {
      text: "NodeJS",
      Icon: SiNodedotjs,
    },
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8 mb-10">
      <Title
        text="Skills 🔪"
        className="flex flex-col -rotate-6 items-center justify-center text-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
}

export default Skills;
