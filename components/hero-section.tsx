import { Button } from "@/components/ui/button";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TerminalPrompt } from "./terminal-prompt";
import { CodeBlock } from "./code-block";

interface HeroSectionProps {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    avatar: string;
    bio: string;
    resume: string;
    username: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export function HeroSection({ personal, social }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 text-green-400 font-mono text-xs sm:text-sm">
              <Terminal className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>~/portfolio</span>
            </div>

            {/* ASCII Art Name */}
            <div className="font-mono text-green-400 text-xs sm:text-sm leading-tight overflow-x-auto">
              <pre className="whitespace-pre">
                {(() => {
                  const text = `Welcome to ${personal.username}'s portfolio`;
                  const topBorder = "╭" + "─".repeat(text.length + 4) + "╮";
                  const middleBorder = "│  " + text + "  │";
                  const bottomBorder = "╰" + "─".repeat(text.length + 4) + "╯";

                  return `${topBorder}\n${middleBorder}\n${bottomBorder}`;
                })()}
              </pre>
            </div>

            {/* Animated Terminal Prompt */}
            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-1 sm:space-y-2">
                <div className="font-mono text-xs sm:text-sm">
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-blue-400">whoami</span>
                </div>
                <div className="font-mono text-base sm:text-lg lg:text-xl text-white pl-4">
                  <TerminalPrompt text={personal.name} delay={100} />
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <div className="font-mono text-xs sm:text-sm">
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-blue-400">cat role.txt</span>
                </div>
                <div className="font-mono text-base sm:text-lg lg:text-xl text-cyan-400 pl-4">
                  <TerminalPrompt text={personal.title} delay={80} />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="text-gray-300 text-sm sm:text-base max-w-lg leading-relaxed">
              {personal.bio}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-black font-mono text-sm sm:text-base"
              >
                <Link href={personal.resume} target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  ./download-resume
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-mono bg-transparent text-sm sm:text-base"
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  ./contact-me
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-white"
              >
                <Link href={social.github} target="_blank">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-white"
              >
                <Link href={social.linkedin} target="_blank">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-white"
              >
                <Link href={social.twitter} target="_blank">
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Code Block with Avatar */}
          <div className="flex justify-center order-1 lg:order-2">
            <CodeBlock className="w-full max-w-sm sm:max-w-md">
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="text-purple-400">const developer = {`{`}</div>
                <div className="pl-2 sm:pl-4 space-y-1">
                  <div className="break-all">
                    <span className="text-blue-400">name:</span>{" "}
                    <span className="text-green-400">"{personal.name}"</span>,
                  </div>
                  <div className="break-all">
                    <span className="text-blue-400">role:</span>{" "}
                    <span className="text-green-400">"{personal.title}"</span>,
                  </div>
                  <div className="break-all">
                    <span className="text-blue-400">location:</span>{" "}
                    <span className="text-green-400">
                      "{personal.location}"
                    </span>
                    ,
                  </div>
                  <div className="break-all">
                    <span className="text-blue-400">contact:</span>{" "}
                    <span className="text-green-400">"{personal.email}"</span>,
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">avatar:</span>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-green-400 flex-shrink-0">
                      <Image
                        src={personal.avatar || "/placeholder.svg"}
                        alt={personal.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-purple-400">{`}`}</div>
              </div>
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
