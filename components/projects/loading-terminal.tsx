"use client";

import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

interface GitStep {
  message: string;
  delay: number;
  showProgress?: boolean;
  progressMax?: number;
}

const gitSteps: GitStep[] = [
  {
    message: "$ git clone https://github.com/Subhadeep-Coder/projects.git",
    delay: 500,
  },
  { message: "Cloning into 'projects'...", delay: 800 },
  { message: "remote: Enumerating objects: 247, done.", delay: 1200 },
  { message: "remote: Counting objects: 100% (247/247), done.", delay: 900 },
  {
    message: "remote: Compressing objects: 100% (156/156), done.",
    delay: 1100,
  },
  {
    message:
      "remote: Total 247 (delta 98), reused 201 (delta 67), pack-reused 0",
    delay: 800,
  },
  {
    message: "Receiving objects:",
    delay: 200,
    showProgress: true,
    progressMax: 247,
  },
  {
    message: "Resolving deltas:",
    delay: 200,
    showProgress: true,
    progressMax: 98,
  },
  { message: "Updating files: 100% (89/89), done.", delay: 600 },
  { message: "$ cd projects", delay: 400 },
  { message: "$ ls -la", delay: 300 },
  { message: "Loading project details...", delay: 800 },
];

export function LoadingTerminal() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedSteps, setDisplayedSteps] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentStep >= gitSteps.length) {
      setLoading(false);
      return;
    }

    const step = gitSteps[currentStep];

    const timer = setTimeout(() => {
      if (step.showProgress) {
        setShowProgress(true);
        setProgress(0);

        const progressTimer = setInterval(() => {
          setProgress((prev) => {
            if (prev >= (step.progressMax || 100)) {
              clearInterval(progressTimer);
              setShowProgress(false);
              setDisplayedSteps((prev) => [
                ...prev,
                `${step.message} 100% (${step.progressMax}/${step.progressMax}), done.`,
              ]);
              setCurrentStep((prev) => prev + 1);
              return prev;
            }
            return prev + Math.random() * 15 + 5;
          });
        }, 50);
      } else {
        setDisplayedSteps((prev) => [...prev, step.message]);
        setCurrentStep((prev) => prev + 1);
      }
    }, step.delay);

    return () => clearTimeout(timer);
  }, [currentStep]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Window */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-800 px-2 sm:px-4 py-2 sm:py-3 border-b border-gray-700">
              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500"></div>
              <div className="flex items-center gap-1 sm:gap-2 ml-2 sm:ml-4 text-gray-300 font-mono text-xs sm:text-sm">
                <Terminal className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>terminal</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm min-h-[300px] sm:min-h-[400px]">
              <div className="space-y-1.5 sm:space-y-2">
                {displayedSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-1 sm:gap-2">
                    {step.startsWith("$") ? (
                      <div className="text-green-400 break-all">
                        <span className="text-green-400">➜</span>{" "}
                        <span className="text-blue-400">projects</span> {step}
                      </div>
                    ) : (
                      <div className="text-gray-300 pl-2 sm:pl-4 break-all">{step}</div>
                    )}
                  </div>
                ))}

                {/* Progress Bar */}
                {showProgress && (
                  <div className="pl-4 mt-2">
                    <div className="flex items-center gap-2 text-gray-300">
                      <span>{gitSteps[currentStep]?.message}</span>
                      <span>
                        {Math.min(
                          Math.floor(progress),
                          gitSteps[currentStep]?.progressMax || 100
                        )}
                        %
                      </span>
                      <div className="flex-1 max-w-md">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full transition-all duration-100"
                            style={{
                              width: `${Math.min(
                                (progress / (gitSteps[currentStep]?.progressMax || 100)) * 100,
                                100
                              )}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <span>
                        (
                        {Math.min(
                          Math.floor(progress),
                          gitSteps[currentStep]?.progressMax || 100
                        )}
                        /{gitSteps[currentStep]?.progressMax || 100})
                      </span>
                    </div>
                  </div>
                )}

                {/* Cursor */}
                {currentStep < gitSteps.length && (
                  <div className="flex items-center">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400 ml-2">projects</span>
                    <span className="ml-2 animate-pulse text-green-400">█</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center mt-4 sm:mt-8">
            <div className="text-gray-400 font-mono text-xs sm:text-sm">
              Fetching project repository...
            </div>
            <div className="flex justify-center mt-2 sm:mt-4">
              <div className="flex space-x-1">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-bounce"></div>
                <div
                  className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
