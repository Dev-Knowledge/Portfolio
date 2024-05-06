import Link from "next/link";
import React from "react";

function Title({ text, className }: { text: string; className?: string }) {
  return (
    <div className={className}>
      <div>
        <h2 className="text-3xl font-bold group-hover:text-green-400 transition-all">
          {text}
        </h2>
        <div className="w-40 h-2 bg-green-500 rounded-full"></div>
        <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
      </div>
    </div>
  );
}

export default Title;
