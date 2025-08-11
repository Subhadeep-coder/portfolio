"use client";

import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/projects/header";
import { ProjectCard } from "@/components/projects/project-card";
import { Stats } from "@/components/projects/stats";
import { LoadingTerminal } from "@/components/projects/loading-terminal";
import { useState, useEffect } from "react";
import portfolioData from "@/data/portfolio.json";

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add a timeout to show loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-16">
      {loading && <LoadingTerminal />}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <Header
          title="Project Repository"
          description="A comprehensive list of all my projects, from web applications to mobile apps and desktop software. Each project represents a unique challenge and learning experience."
        />

        {/* Projects List */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <Stats projects={projects} />

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-mono bg-transparent"
          >
            <Link href="/">
              <Terminal className="mr-2 h-4 w-4" />
              cd ../
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
