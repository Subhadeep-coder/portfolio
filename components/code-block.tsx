import type React from "react"
interface CodeBlockProps {
  children: React.ReactNode
  className?: string
}

export function CodeBlock({ children, className = "" }: CodeBlockProps) {
  return (
    <div className={`bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm ${className}`}>
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-gray-300">{children}</div>
    </div>
  )
}
