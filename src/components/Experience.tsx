import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "Code Alpha",
      location: "Remote",
      duration: "Oct 2024 - Present",
      description: "Currently working as an AI Intern at Code Alpha, focusing on artificial intelligence projects and machine learning implementations",
      skills: ["Artificial Intelligence", "Machine Learning", "Python", "Data Science", "AI Tools"],
      imageUrl: "/code_apha_offerletter.png",
      verifyUrl: "#"
    },
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
    <section id="experience" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional experiences that have shaped my development journey and technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group glow-card overflow-hidden">
                {/* Experience Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={exp.imageUrl} 
                    alt={exp.title} 
                    className="h-full w-auto object-contain max-w-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden h-48 bg-gradient-to-br from-primary/20 to-secondary/20 items-center justify-center">
                    <Briefcase className="h-16 w-16 text-primary/60" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg leading-tight">{exp.title}</h3>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" asChild>
                      <a href={exp.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              These experiences have provided me with valuable hands-on experience in software development and professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
