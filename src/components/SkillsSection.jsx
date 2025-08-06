import { useState } from "react";
import {
  SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, SiNumpy, SiPandas, SiScipy, SiScikitlearn, SiTensorflow, SiJupyter,
  SiFlask, SiNodedotjs, SiMysql, SiMongodb, SiGit, SiGithub, SiDocker, SiKubernetes, SiPostgresql, SiPytorch
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB] drop-shadow" },
      { name: "Java", icon: FaJava, color: "drop-shadow" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E] drop-shadow" },
      { name: "Bash", icon: SiGit, color: "text-[#4EAA25] drop-shadow" },
    ]
  },
  {
    name: "Web Development",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "text-[#E34F26] drop-shadow" },
      { name: "CSS", icon: SiCss3, color: "text-[#1572B6] drop-shadow" },
      { name: "React.js", icon: SiReact, color: "text-[#61DAFB] drop-shadow" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933] drop-shadow" },
      { name: "Flask", icon: SiFlask, color: "text-primary drop-shadow" },
    ]
  },
  {
    name: "AI/ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "text-[#FF6F00] drop-shadow" },
      { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C] drop-shadow" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "text-[#F7931E] drop-shadow" },
      { name: "NumPy", icon: SiNumpy, color: "text-[#013243] drop-shadow" },
      { name: "Pandas", icon: SiPandas, color: "text-[#150458] drop-shadow" },
      { name: "Jupyter", icon: SiJupyter, color: "text-[#F37626] drop-shadow" },
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1] drop-shadow" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248] drop-shadow" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791] drop-shadow" },
    ]
  },
  {
    name: "DevOps",
    skills: [
      { name: "Git", icon: SiGit, color: "text-[#F05032] drop-shadow" },
      { name: "GitHub", icon: SiGithub, color: "drop-shadow" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED] drop-shadow" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5] drop-shadow" },
    ]
  }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="bg-card border border-primary/20 rounded-lg p-8 shadow-md card-hover transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 text-primary text-center">
            {skillCategories[activeCategory].name}
          </h3>
          <div className="flex flex-wrap gap-8 justify-center">
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <span key={index} className="flex flex-col items-center">
                  <IconComponent className={`text-4xl ${skill.color}`} />
                  <span className="text-xs mt-2 text-muted-foreground">{skill.name}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};