import { CodeBlock } from "./code-block"

interface SkillsSectionProps {
  skills: {
    languages: string[]
    frontend: string[]
    backend: string[]
    tools: string[]
  }
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 mb-4">
            <span className="text-green-400">$</span> <span className="text-blue-400">ls -la skills/</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-mono mb-4">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to build amazing things.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <CodeBlock>
            <div className="space-y-2">
              <div className="text-yellow-400 font-bold">// Programming Languages</div>
              <div className="text-purple-400">const languages = [</div>
              {skills.languages.map((lang, index) => (
                <div key={lang} className="pl-4">
                  <span className="text-green-400">"{lang}"</span>
                  {index < skills.languages.length - 1 && <span className="text-white">,</span>}
                </div>
              ))}
              <div className="text-purple-400">]</div>
            </div>
          </CodeBlock>

          <CodeBlock>
            <div className="space-y-2">
              <div className="text-yellow-400 font-bold">// Frontend Technologies</div>
              <div className="text-purple-400">const frontend = [</div>
              {skills.frontend.map((tech, index) => (
                <div key={tech} className="pl-4">
                  <span className="text-green-400">"{tech}"</span>
                  {index < skills.frontend.length - 1 && <span className="text-white">,</span>}
                </div>
              ))}
              <div className="text-purple-400">]</div>
            </div>
          </CodeBlock>

          <CodeBlock>
            <div className="space-y-2">
              <div className="text-yellow-400 font-bold">// Backend & Database</div>
              <div className="text-purple-400">const backend = [</div>
              {skills.backend.map((tech, index) => (
                <div key={tech} className="pl-4">
                  <span className="text-green-400">"{tech}"</span>
                  {index < skills.backend.length - 1 && <span className="text-white">,</span>}
                </div>
              ))}
              <div className="text-purple-400">]</div>
            </div>
          </CodeBlock>

          <CodeBlock>
            <div className="space-y-2">
              <div className="text-yellow-400 font-bold">// Tools & DevOps</div>
              <div className="text-purple-400">const tools = [</div>
              {skills.tools.map((tool, index) => (
                <div key={tool} className="pl-4">
                  <span className="text-green-400">"{tool}"</span>
                  {index < skills.tools.length - 1 && <span className="text-white">,</span>}
                </div>
              ))}
              <div className="text-purple-400">]</div>
            </div>
          </CodeBlock>
        </div>
      </div>
    </section>
  )
}
