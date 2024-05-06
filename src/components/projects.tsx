import React from "react";
import Title from "./title";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./direction-aware-hover";

function Projects() {
  4;
  const projects = [
    {
      title: "E-Learning Platform",
      tech: [SiNextdotjs, SiReact, SiJavascript, SiTailwindcss],
      link: "localhost:3000",
      cover: "/capture.PNG",
      background: "bg-indigo-500",
    },
    {
      title: "Vote App",
      tech: [SiNextdotjs, SiReact, SiJavascript, SiTailwindcss],
      link: "localhost:3000",
      cover: "/capture.PNG",
      background: "bg-green-500",
    },
    {
      title: "E-Learning Platform",
      tech: [SiNextdotjs, SiReact, SiJavascript, SiTailwindcss],
      link: "localhost:3000",
      cover: "/capture.PNG",
      background: "bg-indigo-500",
    },
    {
      title: "Vote App",
      tech: [SiNextdotjs, SiReact, SiJavascript, SiTailwindcss],
      link: "localhost:3000",
      cover: "/capture.PNG",
      background: "bg-green-500",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8 mb-20">
      <Title
        text="Projects 🎨"
        className="flex flex-col rotate-6 items-center justify-center text-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2  pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={(cn("p-5 rounded-md"), project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full p-10  mx-auto cursor-pointer"
                >
                  <div className="p-2 bg-black w-full">
                    <h1>{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
