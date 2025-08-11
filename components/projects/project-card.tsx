"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ExternalLink,
  Globe,
  Smartphone,
  Download,
  Code2,
  Calendar,
  Star,
} from "lucide-react";
import Link from "next/link";

interface Repository {
  name: string;
  url: string;
}

interface ProjectLink {
  name: string;
  url: string;
  type: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  repositories: Repository[];
  links?: ProjectLink[];
  featured: boolean;
  order: number;
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

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card
      key={project.title}
      className="bg-gray-900 border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10"
    >
      <CardHeader className="p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <CardTitle className="text-xl sm:text-2xl font-mono text-cyan-400 break-words">
                {String(index + 1).padStart(2, "0")}. {project.title}
              </CardTitle>
              {project.featured && (
                <Badge className="bg-yellow-600 text-yellow-100 text-xs">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>
            <CardDescription className="text-gray-300 text-sm sm:text-base mb-4">
              {project.description}
            </CardDescription>

            {/* Technologies */}
            <div className="mb-4">
              <div className="font-mono text-yellow-400 text-xs sm:text-sm mb-2">
                // Tech Stack:
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs border-gray-600 text-green-400 hover:bg-green-400 hover:text-black transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Repositories */}
            <div className="mb-4">
              <div className="font-mono text-yellow-400 text-xs sm:text-sm mb-2">
                // Source Code:
              </div>
              <div className="space-y-1">
                {project.repositories.map((repo, repoIndex) => (
                  <div key={repoIndex} className="flex items-center gap-2">
                    <Code2 className="h-3 w-3 text-gray-400 flex-shrink-0" />
                    <Link
                      href={repo.url}
                      target="_blank"
                      className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm hover:underline font-mono break-all"
                    >
                      {repo.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div>
                <div className="font-mono text-yellow-400 text-xs sm:text-sm mb-2">
                  // Live Links:
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, linkIndex) => {
                    const Icon = getLinkIcon(link.type);
                    return (
                      <Button
                        key={linkIndex}
                        variant="ghost"
                        size="sm"
                        asChild
                        className={`${getLinkColor(link.type)} text-xs h-7 sm:h-8 px-2 border border-gray-600 hover:border-current`}
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
          </div>

          {/* Project Status */}
          <div className="flex flex-col items-start lg:items-end gap-2 lg:text-right">
            <Badge variant="outline" className="text-xs border-green-600 text-green-400">
              Active
            </Badge>
            <div className="font-mono text-xs text-gray-400 flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>2024</span>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
