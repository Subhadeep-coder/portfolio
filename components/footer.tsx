import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Terminal, Twitter } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  personal: {
    name: string;
    email: string;
    username: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export function Footer({ personal, social }: FooterProps) {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-green-400 font-mono mb-2 text-sm">
              <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="break-all">
                {personal.username}@portfolio:~$
              </span>
            </div>
            <p className="text-gray-400 font-mono text-xs sm:text-sm">
              Thanks for visiting my digital space!
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-green-400"
              asChild
            >
              <Link href={`mailto:${personal.email}`}>
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-green-400"
              asChild
            >
              <Link href={social.github} target="_blank">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-green-400"
              asChild
            >
              <Link href={social.linkedin} target="_blank">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-green-400"
              asChild
            >
              <Link href={social.twitter} target="_blank">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <div className="font-mono text-gray-400 text-xs sm:text-sm">
            <div className="mb-1">
              $ echo "© {new Date().getFullYear()} {personal.name}. All rights
              reserved."
            </div>
            <div className="text-green-400">
              © {new Date().getFullYear()} {personal.name}. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
