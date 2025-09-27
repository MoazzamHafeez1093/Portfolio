import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm <span className="gradient-text">Muhammad Moazzam Hafeez</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Computer Science Student at FAST NUCES, Islamabad
            <span className="block text-lg mt-2">
              🇵🇰 Graduating 2026 | AI/ML Research & DevOps Engineering
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Building innovative solutions through AI/ML research and DevOps engineering. 
            Currently working on Deepfake Detection and designing scalable, production ready systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => scrollToSection("about")}
            >
              Explore My Work
            </Button>
            <Button variant="glow" size="lg" className="text-lg px-8">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="https://github.com/MoazzamHafeez1093"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card/50 border border-border hover:border-primary hover:scale-110 transition-all duration-300 group"
            >
              <Github className="h-6 w-6 text-primary group-hover:text-primary/80" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/moazzam-hafeez-aa6a70168/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card/50 border border-border hover:border-blue-500 hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-blue-500 group-hover:text-blue-400" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <button 
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-glow hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse-glow hidden lg:block" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

export default Hero;