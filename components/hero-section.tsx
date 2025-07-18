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
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
              <Terminal className="h-4 w-4" />
              <span>~/portfolio</span>
            </div>

            {/* ASCII Art Name */}
            <div className="font-mono text-green-400 text-sm leading-tight">
              <pre className="whitespace-pre">
                {(() => {
                  const text = `Welcome to ${personal.username}'s portfolio`;
                  const padding = Math.max(0, 45 - text.length);
                  const leftPadding = Math.floor(padding / 2);
                  const rightPadding = padding - leftPadding;
                  const topBorder = "╭" + "─".repeat(text.length + 4) + "╮";
                  const middleBorder = "│  " + text + "  │";
                  const bottomBorder = "╰" + "─".repeat(text.length + 4) + "╯";

                  return `${topBorder}\n${middleBorder}\n${bottomBorder}`;
                })()}
              </pre>
            </div>

            {/* Animated Terminal Prompt */}
            <div className="space-y-2">
              <div className="font-mono text-sm">
                <span className="text-green-400">$</span>{" "}
                <span className="text-blue-400">whoami</span>
              </div>
              <div className="font-mono text-lg text-white pl-4">
                <TerminalPrompt text={personal.name} delay={100} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-sm">
                <span className="text-green-400">$</span>{" "}
                <span className="text-blue-400">cat role.txt</span>
              </div>
              <div className="font-mono text-lg text-cyan-400 pl-4">
                <TerminalPrompt text={personal.title} delay={80} />
              </div>
            </div>

            {/* Bio */}
            <div className="text-gray-300 max-w-lg leading-relaxed">
              {personal.bio}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-black font-mono"
              >
                <Link href={personal.resume} target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  ./download-resume
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-mono bg-transparent"
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  ./contact-me
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-white"
              >
                <Link href={social.github} target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-white"
              >
                <Link href={social.linkedin} target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-white"
              >
                <Link href={social.twitter} target="_blank">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Code Block with Avatar */}
          <div className="flex justify-center">
            <CodeBlock className="max-w-md">
              <div className="space-y-2">
                <div className="text-purple-400">const developer = {`{`}</div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-blue-400">name:</span>{" "}
                    <span className="text-green-400">"{personal.name}"</span>,
                  </div>
                  <div>
                    <span className="text-blue-400">role:</span>{" "}
                    <span className="text-green-400">"{personal.title}"</span>,
                  </div>
                  <div>
                    <span className="text-blue-400">location:</span>{" "}
                    <span className="text-green-400">
                      "{personal.location}"
                    </span>
                    ,
                  </div>
                  <div>
                    <span className="text-blue-400">contact:</span>{" "}
                    <span className="text-green-400">"{personal.email}"</span>,
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">avatar:</span>
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-400">
                      <Image
                        priority={true}
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
