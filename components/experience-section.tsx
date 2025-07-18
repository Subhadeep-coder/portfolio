import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Terminal } from "lucide-react"

interface Experience {
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

interface ExperienceSectionProps {
  experience: Experience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 mb-4 flex items-center justify-center gap-2">
            <Terminal className="h-4 w-4" />
            <span>$ cat work-history.log</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-mono mb-4">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-gray-950 border-gray-700 hover:border-green-400 transition-colors">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-mono text-cyan-400">{exp.position}</CardTitle>
                      <CardDescription className="text-lg font-medium text-green-400 font-mono">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 font-mono">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="font-mono text-sm">
                    <div className="text-yellow-400 mb-2">// Technologies used:</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800 text-green-400 rounded text-xs border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
