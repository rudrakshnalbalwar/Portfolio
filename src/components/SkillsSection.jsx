import {
    SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, SiNumpy, SiPandas, SiScipy, SiScikitlearn, SiTensorflow, SiJupyter,
    SiFlask, SiNodedotjs, SiMysql, SiMongodb, SiGit, SiGithub, SiDocker, SiKubernetes
  } from "react-icons/si";
  import { FaJava } from "react-icons/fa";
  
  export const SkillsSection = () => {
    return (
      <section id="skills" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <div className="bg-card border border-primary/20 rounded-lg p-8 shadow-md card-hover transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-8 justify-center">
                <span className="flex flex-col items-center">
                  <FaJava className="text-4xl drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">Java</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiPython className="text-4xl text-[#3776AB] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">Python</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiHtml5 className="text-4xl text-[#E34F26] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">HTML</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiCss3 className="text-4xl text-[#1572B6] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">CSS</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiJavascript className="text-4xl text-[#F7DF1E] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">JavaScript</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiReact className="text-4xl text-[#61DAFB] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">React Native</span>
                </span>
              </div>
            </div>
            {/* Tools and Technologies */}
            <div className="bg-card border border-primary/20 rounded-lg p-8 shadow-md card-hover transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-8 justify-center">
                <span className="flex flex-col items-center">
                  <SiNumpy className="text-4xl text-[#013243] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">NumPy</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiPandas className="text-4xl text-[#150458] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">Pandas</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiScipy className="text-4xl text-[#8CAAE6] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">SciPy</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiScikitlearn className="text-4xl text-[#F7931E] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">Scikit-learn</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiTensorflow className="text-4xl text-[#FF6F00] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">TensorFlow</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiJupyter className="text-4xl text-[#F37626] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">Jupyter</span>
                </span>
              </div>
            </div>
            {/* Backend */}
            <div className="bg-card border border-primary/20 rounded-lg p-8 shadow-md card-hover transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                Backend
              </h3>
              <div className="flex flex-wrap gap-8 justify-center">
                <span className="flex flex-col items-center">
                  <SiFlask className="text-4xl text-primary drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">Flask</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiNodedotjs className="text-4xl text-[#339933] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">Node.js</span>
                </span>
              </div>
            </div>
            {/* Database & DevOps */}
            <div className="bg-card border border-primary/20 rounded-lg p-8 shadow-md card-hover transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                Database & DevOps
              </h3>
              <div className="flex flex-wrap gap-8 justify-center">
                <span className="flex flex-col items-center">
                  <SiMysql className="text-4xl text-[#4479A1] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">MySQL</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiMongodb className="text-4xl text-[#47A248] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">MongoDB</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiGit className="text-4xl text-[#F05032] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">Git</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiGithub className="text-4xl drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">GitHub</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiDocker className="text-4xl text-[#2496ED] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">Docker</span>
                </span>
                <span className="flex flex-col items-center">
                  <SiKubernetes className="text-4xl text-[#326CE5] drop-shadow" />
                  <span className="text-xs mt-2 text-muted-foreground">Kubernetes</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };