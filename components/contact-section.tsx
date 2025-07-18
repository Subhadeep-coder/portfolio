import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Terminal } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "./code-block";

interface ContactSectionProps {
  personal: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
}

export function ContactSection({ personal }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="font-mono text-green-400 mb-4 flex items-center justify-center gap-2 text-xs sm:text-sm">
            <Terminal className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>$ ./contact-me --help</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Ready to collaborate? Let's build something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="order-2 lg:order-1">
            <CodeBlock className="mb-6 sm:mb-8 overflow-x-auto">
              <div className="space-y-2 text-xs sm:text-sm min-w-0">
                <div className="text-yellow-400 font-bold">
                  // Contact Information
                </div>
                <div className="text-purple-400">const contactInfo = {`{`}</div>
                <div className="pl-2 sm:pl-4 space-y-1">
                  <div className="flex items-center gap-2 min-w-0">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                    <span className="text-blue-400">email:</span>
                    <Link
                      href={`mailto:${personal.email}`}
                      className="text-green-400 hover:text-green-300 break-all"
                    >
                      "{personal.email}"
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                    <span className="text-blue-400">phone:</span>
                    <Link
                      href={`tel:${personal.phone}`}
                      className="text-green-400 hover:text-green-300 break-all"
                    >
                      "{personal.phone}"
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                    <span className="text-blue-400">location:</span>
                    <span className="text-green-400 break-all">
                      "{personal.location}"
                    </span>
                  </div>
                </div>
                <div className="text-purple-400">{`}`}</div>
              </div>
            </CodeBlock>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                Whether you have a project in mind, want to discuss
                opportunities, or just want to chat about technology, I'd love
                to hear from you.
              </p>
              <div className="font-mono text-xs sm:text-sm text-green-400">
                <div>$ echo "Let's build something amazing together!"</div>
                <div className="text-white pl-4">
                  Let's build something amazing together!
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gray-900 border-gray-700 order-1 lg:order-2">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="font-mono text-cyan-400 text-base sm:text-lg">
                ./send-message
              </CardTitle>
              <CardDescription className="text-gray-400 text-xs sm:text-sm">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <form className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 font-mono text-sm"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 font-mono text-sm"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 font-mono text-sm"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 font-mono text-sm resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-black font-mono text-sm sm:text-base"
                >
                  ./send-message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
