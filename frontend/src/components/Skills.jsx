import { Layout, Server, Database, Settings, Terminal, Code2 } from "lucide-react";

// Map strings from DB to actual components
const iconMap = {
  "Layout": <Layout className="w-6 h-6 text-accent" />,
  "Server": <Server className="w-6 h-6 text-accent" />,
  "Database": <Database className="w-6 h-6 text-accent" />,
  "Settings": <Settings className="w-6 h-6 text-accent" />,
  "Terminal": <Terminal className="w-6 h-6 text-accent" />,
  "Code2": <Code2 className="w-6 h-6 text-accent" />
};

const Skills = ({ skills }) => {
  if (!skills) return null;

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-textMain mb-12">
        Technical <span className="text-accent">Skills</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-secondary p-6 rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary rounded-lg border border-white/10">
                {/* Fallback to Code2 icon if no match found */}
                {iconMap[skill.category] || <Code2 className="w-6 h-6 text-accent" />}
              </div>
              <h3 className="text-xl font-semibold text-textMain">{skill.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, idx) => (
                <span key={idx} className="px-3 py-1 text-sm bg-primary text-textSub rounded-full border border-white/5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;