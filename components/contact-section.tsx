import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Terminal } from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "./code-block"

interface ContactSectionProps {
  personal: {
    name: string
    email: string
    phone: string
    location: string
  }
}

export function ContactSection({ personal }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 mb-4 flex items-center justify-center gap-2">
            <Terminal className="h-4 w-4" />
            <span>$ ./contact-me --help</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-mono mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate? Let's build something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <CodeBlock className="mb-8">
              <div className="space-y-2">
                <div className="text-yellow-400 font-bold">// Contact Information</div>
                <div className="text-purple-400">const contactInfo = {`{`}</div>
                <div className="pl-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-green-400" />
                    <span className="text-blue-400">email:</span>
                    <Link href={`mailto:${personal.email}`} className="text-green-400 hover:text-green-300">
                      "{personal.email}"
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-green-400" />
                    <span className="text-blue-400">phone:</span>
                    <Link href={`tel:${personal.phone}`} className="text-green-400 hover:text-green-300">
                      "{personal.phone}"
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-400" />
                    <span className="text-blue-400">location:</span>
                    <span className="text-green-400">"{personal.location}"</span>
                  </div>
                </div>
                <div className="text-purple-400">{`}`}</div>
              </div>
            </CodeBlock>

            <div className="space-y-4 text-gray-300">
              <p>
                Whether you have a project in mind, want to discuss opportunities, or just want to chat about
                technology, I'd love to hear from you.
              </p>
              <div className="font-mono text-sm text-green-400">
                <div>$ echo "Let's build something amazing together!"</div>
                <div className="text-white pl-4">Let's build something amazing together!</div>
              </div>
            </div>
          </div>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="font-mono text-cyan-400">./send-message</CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 font-mono"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 font-mono"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 font-mono"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 font-mono"
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-black font-mono">
                  ./send-message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
