"use client";

import { Terminal } from "lucide-react";

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="font-mono text-green-400 mb-4 flex items-center gap-2 text-xs sm:text-sm">
        <Terminal className="h-3 w-3 sm:h-4 sm:w-4" />
        <span>$ find ./projects -type f -name "*.md" | head -20</span>
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono mb-4 text-white">
        {title}
      </h1>
      <p className="text-gray-400 max-w-3xl text-sm sm:text-base">
        {description}
      </p>
    </div>
  )
}
