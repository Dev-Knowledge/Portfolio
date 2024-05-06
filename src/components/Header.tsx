import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { cn } from "@/lib/utils";

function Header({ className }: { className?: string }) {
  const socials = [
    { link: "www.twitter.com", label: "X", Icon: SiX },
    { link: "www.twitter.com", label: "github", Icon: SiGithub },
    { link: "www.twitter.com", label: "linkedIn", Icon: SiLinkedin },
  ];
  return (
    <section
      className={cn("py-5 flex justify-between items-center", className)}
    >
      <Logo />
      <nav className="flex justify-between items-center gap-5">
        {socials.map((item, index) => {
          const Icon = item.Icon;
          return (
            <Link href={item.link} key={index}>
              <Icon className="h-5 w-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </nav>
    </section>
  );
}

export default Header;
