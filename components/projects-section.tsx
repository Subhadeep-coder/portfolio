import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ExternalLink,
  Github,
  Terminal,
  Smartphone,
  Download,
  Globe,
  Code2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Repository {
  name: string;
  url: string;
}

interface ProjectLink {
  name: string;
  url: string;
  type: "demo" | "appstore" | "playstore" | "download" | "website" | "other";
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  repositories: Repository[];
  links: ProjectLink[];
  featured: boolean;
}

interface ProjectsSectionProps {
  projects: Project[];
}

function getLinkIcon(type: string) {
  switch (type) {
    case "demo":
    case "website":
      return Globe;
    case "appstore":
    case "playstore":
      return Smartphone;
    case "download":
      return Download;
    default:
      return ExternalLink;
  }
}

function getLinkColor(type: string) {
  switch (type) {
    case "demo":
    case "website":
      return "text-blue-400 hover:text-blue-300";
    case "appstore":
      return "text-gray-400 hover:text-gray-300";
    case "playstore":
      return "text-green-400 hover:text-green-300";
    case "download":
      return "text-purple-400 hover:text-purple-300";
    default:
      return "text-cyan-400 hover:text-cyan-300";
  }
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="font-mono text-green-400 mb-4 flex items-center justify-center gap-2 text-xs sm:text-sm">
            <Terminal className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>$ cd projects && ls -la</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A collection of projects that showcase my skills and passion for
            development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {featuredProjects.map((project) => (
            <Card
              key={project.title}
              className="bg-gray-900 border-gray-700 overflow-hidden hover:border-green-400 transition-colors"
            >
              <div className="aspect-video relative bg-gray-800">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-white font-mono text-sm sm:text-base">
                  <span className="text-cyan-400 break-all">
                    ./{project.title.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-300 text-xs sm:text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                {/* Technologies */}
                <div className="font-mono text-xs sm:text-sm">
                  <div className="text-yellow-400 mb-2">
                    // Technologies used:
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-green-400 rounded text-xs border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Repositories */}
                <div className="font-mono text-xs sm:text-sm">
                  <div className="text-yellow-400 mb-2">// Repositories:</div>
                  <div className="space-y-1">
                    {project.repositories.map((repo, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Code2 className="h-3 w-3 text-gray-400 flex-shrink-0" />
                        <Link
                          href={repo.url}
                          target="_blank"
                          className="text-blue-400 hover:text-blue-300 text-xs hover:underline break-all"
                        >
                          {repo.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {project.links && project.links.length > 0 && (
                  <div className="font-mono text-xs sm:text-sm">
                    <div className="text-yellow-400 mb-2">// Links:</div>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.links.map((link, index) => {
                        const Icon = getLinkIcon(link.type);
                        return (
                          <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            asChild
                            className={`${getLinkColor(link.type)} text-xs h-7 sm:h-8 px-2`}
                          >
                            <Link href={link.url} target="_blank">
                              <Icon className="h-3 w-3 mr-1" />
                              <span className="truncate">{link.name}</span>
                            </Link>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                Other Projects
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {otherProjects.map((project) => (
                <Card
                  key={project.title}
                  className="bg-gray-900 border-gray-700 hover:border-cyan-400 transition-colors"
                >
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-white font-mono text-sm sm:text-base">
                      <span className="text-cyan-400 break-all">
                        ./{project.title.toLowerCase().replace(/\s+/g, "-")}
                      </span>
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-xs sm:text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                    {/* Technologies */}
                    <div className="font-mono text-xs sm:text-sm">
                      <div className="text-yellow-400 mb-2">// Stack:</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 text-green-400 rounded text-xs border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Repositories */}
                    <div className="font-mono text-xs sm:text-sm">
                      <div className="text-yellow-400 mb-2">// Code:</div>
                      <div className="space-y-1">
                        {project.repositories.map((repo, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Github className="h-3 w-3 text-gray-400 flex-shrink-0" />
                            <Link
                              href={repo.url}
                              target="_blank"
                              className="text-blue-400 hover:text-blue-300 text-xs hover:underline break-all"
                            >
                              {repo.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    {project.links && project.links.length > 0 && (
                      <div className="font-mono text-xs sm:text-sm">
                        <div className="text-yellow-400 mb-2">// Access:</div>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {project.links.map((link, index) => {
                            const Icon = getLinkIcon(link.type);
                            return (
                              <Button
                                key={index}
                                variant="ghost"
                                size="sm"
                                asChild
                                className={`${getLinkColor(link.type)} text-xs h-7 sm:h-8 px-2`}
                              >
                                <Link href={link.url} target="_blank">
                                  <Icon className="h-3 w-3 mr-1" />
                                  <span className="truncate">{link.name}</span>
                                </Link>
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
