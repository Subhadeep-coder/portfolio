"use client";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  repositories: { name: string; url: string }[];
  links?: { name: string; url: string; type: string }[];
  featured: boolean;
  order: number;
}

interface StatsProps {
  projects: Project[];
}

export function Stats({ projects }: StatsProps) {
  return (
    <div className="mt-16 sm:mt-20 pt-8 border-t border-gray-800">
      <div className="font-mono text-green-400 text-xs sm:text-sm mb-4">
        $ wc -l projects/*
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono">
            {projects.length}
          </div>
          <div className="text-xs sm:text-sm text-gray-400 font-mono">
            Total Projects
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="text-2xl sm:text-3xl font-bold text-green-400 font-mono">
            {projects.filter((p) => p.featured).length}
          </div>
          <div className="text-xs sm:text-sm text-gray-400 font-mono">
            Featured
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="text-2xl sm:text-3xl font-bold text-yellow-400 font-mono">
            {projects.reduce((acc, p) => acc + p.technologies.length, 0)}
          </div>
          <div className="text-xs sm:text-sm text-gray-400 font-mono">
            Technologies
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="text-2xl sm:text-3xl font-bold text-purple-400 font-mono">
            {projects.reduce((acc, p) => acc + p.repositories.length, 0)}
          </div>
          <div className="text-xs sm:text-sm text-gray-400 font-mono">
            Repositories
          </div>
        </div>
      </div>
    </div>
  );
}
