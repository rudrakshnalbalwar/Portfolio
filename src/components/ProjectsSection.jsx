import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Heart Disease Predictor",
    image: "/projects/heart disease predictor .jpg",
    shortDesc: "Predicts heart disease risk using machine learning.",
    stack: ["Python", "Random Forest", "React"],
    github: "https://github.com/rudrakshnalbalwar/heart_disease_predictor",
  },
  {
    name: "Neo Jarvis",
    image: "/projects/Neo jarvis .jpg",
    shortDesc: "Personal AI assistant with smart automation and NLP.",
    stack: ["Python", "Deep Learning", "NLP"],
    github: "https://github.com/rudrakshnalbalwar/AI-Voice-Assistant",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-glow">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="flex justify-center mb-8">
          <a
            href="https://github.com/rudrakshnalbalwar"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button flex items-center gap-2"
          >
            <FaGithub className="text-lg" />
            Check out my GitHub
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="gradient-border card-hover bg-card rounded-lg p-0 shadow-md flex flex-col justify-between transition-all duration-300"
            >
              <div className="p-8 flex flex-col flex-1">
                <div className="w-full h-48 mb-4 rounded-md overflow-hidden border border-primary/10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 card-hover transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    style={{ objectPosition: "center" }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary text-center text-glow">{project.name}</h3>
                <p className="text-sm text-muted-foreground text-center mb-3">{project.shortDesc}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-auto justify-center pb-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button flex items-center gap-2"
                >
                  <FaGithub className="text-lg" />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};