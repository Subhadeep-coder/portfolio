import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Terminal, Twitter } from "lucide-react"
import Link from "next/link"

interface FooterProps {
  personal: {
    name: string
    email: string
    username: string
  }
  social: {
    github: string
    linkedin: string
    twitter: string
  }
}

export function Footer({ personal, social }: FooterProps) {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 text-green-400 font-mono mb-2">
              <Terminal className="h-5 w-5" />
              <span>{personal.username}@portfolio:~$</span>
            </div>
            <p className="text-gray-400 font-mono text-sm">Thanks for visiting my digital space!</p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-green-400" asChild>
              <Link href={`mailto:${personal.email}`}>
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-green-400" asChild>
              <Link href={social.github} target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-green-400" asChild>
              <Link href={social.linkedin} target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-green-400" asChild>
              <Link href={social.twitter} target="_blank">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="font-mono text-gray-400 text-sm">
            <div>
              $ echo "© {new Date().getFullYear()} {personal.name}. All rights reserved."
            </div>
            <div className="text-green-400 mt-1">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
