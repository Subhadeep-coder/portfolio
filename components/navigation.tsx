"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Terminal } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface NavigationProps {
  name: string
  username: string
}

export function Navigation({ name, username }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "home", command: "cd ~" },
    { href: "#skills", label: "skills", command: "ls skills/" },
    { href: "#projects", label: "projects", command: "cd projects/" },
    { href: "#experience", label: "experience", command: "cat work.log" },
    { href: "#contact", label: "contact", command: "./contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="#home" className="flex items-center gap-2 text-green-400 font-mono">
            <Terminal className="h-5 w-5" />
            <span>{username}@portfolio:~$</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-green-400 transition-colors font-mono text-sm"
                title={item.command}
              >
                ./{item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-green-400">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-950 border-gray-800">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg text-gray-400 hover:text-green-400 transition-colors font-mono"
                    onClick={() => setIsOpen(false)}
                  >
                    ./{item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
