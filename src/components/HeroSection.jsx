import { ArrowDown } from "lucide-react"; 

export const HeroSection = () => {
    return (
        <section 
          id="hero" 
          className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-18">
                <div className="space-y-6">
                    {/* Profile Photo */}
                    <div className="flex justify-center opacity-0 animate-fade-in">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative">
                                <img 
                                    src="/Me_1.png" 
                                    alt="Rudraksh Nalbalwar" 
                                    className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Rudraksh </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Nalbalwar </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I'm  an aspiring Web Developer with a background in AI/ML. 
                    I previously interned as an SDE at Soroban Labs and am currently building Neo Jarvis — a personal AI assistant. 
                    I'm exploring full-stack development roles while continuing to grow my skills and build meaningful, real-world projects.


                    </p>

                    <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            Veiw My Work
                        </a>
                    </div>



                </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
              <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
              <ArrowDown className="h-5 1-5 text-primary" />

            </div>
        </section>
    );
};