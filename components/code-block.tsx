import type React from "react";
interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, className = "" }: CodeBlockProps) {
  return (
    <div
      className={`bg-gray-900 border border-gray-700 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 mb-2 sm:mb-3 pb-2 border-b border-gray-700">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-gray-300 min-w-0">{children}</div>
    </div>
  );
}
