import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Terminal } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

interface ExperienceSectionProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="font-mono text-green-400 mb-4 flex items-center justify-center gap-2 text-xs sm:text-sm">
            <Terminal className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>$ cat work-history.log</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            My professional journey and the roles that have shaped my expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="bg-gray-950 border-gray-700 hover:border-green-400 transition-colors"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col gap-2 sm:gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-lg sm:text-xl font-mono text-cyan-400 break-words">
                          {exp.position}
                        </CardTitle>
                        <CardDescription className="text-base sm:text-lg font-medium text-green-400 font-mono break-words">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-gray-400 font-mono flex-shrink-0">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">
                    {exp.description}
                  </p>
                  <div className="font-mono text-xs sm:text-sm">
                    <div className="text-yellow-400 mb-2">
                      // Technologies used:
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
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
  );
}
