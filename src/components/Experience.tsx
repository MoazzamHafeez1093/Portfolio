import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "DevelopersHub",
      location: "Remote",
      duration: "June 2024 - July 2024",
      description: "Completed 2-month intensive web development internship focusing on modern frontend and backend technologies",
      skills: ["Web Development", "HTML/CSS", "JavaScript", "React", "Node.js", "Database Management"],
      imageUrl: "/internship_completion.jpeg",
      verifyUrl: "#"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-[80px] animate-pulse-glow"></div>
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-primary/5 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional experiences that have shaped my development journey and technical expertise
            </p>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <Card className="group overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-elegant">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Image Section */}
                    <div className="lg:col-span-4 h-64 lg:h-auto relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                      <img
                        src={exp.imageUrl}
                        alt={exp.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextSibling) {
                            nextSibling.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="hidden absolute inset-0 bg-card items-center justify-center">
                        <Briefcase className="h-16 w-16 text-primary/40" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-8 p-8 flex flex-col justify-between relative">
                      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <Briefcase className="h-24 w-24 text-primary" />
                      </div>

                      <div>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                          <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                            <div className="flex items-center gap-2 text-lg font-medium text-foreground/80">
                              <span className="text-primary">{exp.company}</span>
                            </div>
                          </div>

                          <Button variant="outline" size="sm" className="w-fit gap-2 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                            <a href={exp.verifyUrl} target="_blank" rel="noopener noreferrer">
                              Verify <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5 bg-secondary/10 px-3 py-1 rounded-full text-secondary-foreground">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full text-primary">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                          {exp.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                          <Sparkles className="h-3 w-3 text-accent" /> Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border hover:border-primary"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for the sparkles icon since it wasn't imported initially
const Sparkles = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

export default Experience;
