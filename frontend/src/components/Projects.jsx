import { ExternalLink, Github } from "lucide-react";

const Projects = ({ projects }) => {
  if (!projects) return null;

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-textMain mb-16">
          Featured <span className="text-accent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id} // Use MongoDB _id
              className="group bg-secondary rounded-2xl border border-white/5 overflow-hidden hover:border-accent/30 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-textMain mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-textSub mb-4 h-12 overflow-hidden text-ellipsis">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs font-medium text-accent bg-accent/10 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside text-textSub text-sm mb-6 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-textMain hover:text-accent transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-textMain hover:text-accent transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;