import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Aspiring Web Developer and ML Enthusiast
                        </h3>
                        
                        {/* Profile Photo */}
                        <div className="flex justify-center md:justify-start">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative">
                                    <img 
                                        src="/Me_1.png" 
                                        alt="Rudraksh Nalbalwar" 
                                        className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <p className="text-muted-foreground">
                            I'm Rudraksh Nalbalwar, a final-year B.Tech (AI/ML) student at Shri Ramdeobaba College of Engineering and Management, 
                            with a deep interest in building intelligent systems and scalable web apps. 
                            I've explored AI through academic projects and am now expanding into full-stack development. 
                            I enjoy learning by doing and am always excited to take on new challenges and grow as a developer.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a 
                                href="/Rudraksh_Nalbalwar_Resume_SDE.pdf" 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                      <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Software Development </h4>
                                        <p className="text-muted-foreground">
                                        Skilled in Python, Java, and JavaScript with hands-on experience in Flask, FastAPI, and React. 
                                        Focused on building scalable and efficient web applications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        <div className="gradient-border p-6 card-hover">
                           <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                  <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> What I Offer </h4>
                                    <p className="text-muted-foreground">
                                    I design and build functional, user-friendly web applications while blending smart tech like AI where it fits. 
                                    My focus is on clean code, thoughtful UX, and delivering practical digital solutions that work.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                  <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Work & Projects </h4>
                                    <p className="text-muted-foreground">
                                    I interned as an SDE at Soroban Labs, where I contributed to backend systems. 
                                    I’m currently building Neo Jarvis, a personal AI assistant that merges intelligent automation with practical web features.
                                    </p>
                                </div>
                            </div>

                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};