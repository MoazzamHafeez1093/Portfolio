import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#certificates", label: "Certificates" },
    { href: "#courses", label: "Courses" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold gradient-text flex items-center gap-2">
            Portfolio <span className="text-lg">🇵🇰</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:scale-110 transition-all duration-300">
              <a href="https://github.com/MoazzamHafeez1093" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-6 w-6 text-primary hover:text-primary/80" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-blue-500/10 hover:scale-110 transition-all duration-300">
              <a href="https://www.linkedin.com/in/moazzam-hafeez-aa6a70168/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="h-6 w-6 text-blue-500 hover:text-blue-400" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                  <a href="https://github.com/MoazzamHafeez1093" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-6 w-6 text-primary hover:text-primary/80" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-blue-500/10 hover:scale-110 transition-all duration-300">
                  <a href="https://www.linkedin.com/in/moazzam-hafeez-aa6a70168/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="h-6 w-6 text-blue-500 hover:text-blue-400" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;