import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Comprehensive introduction to cloud computing concepts and AWS services",
      skills: ["AWS", "Cloud Computing", "Cloud Fundamentals", "AWS Services"],
      verifyUrl: "#",
      imageUrl: "/aws-educate-introduction-to-cloud-101 (1).png"
    },
    {
      title: "DevOps Fundamentals",
      issuer: "Professional Certification Body",
      date: "2024",
      description: "Essential DevOps practices and methodologies for modern software development",
      skills: ["DevOps", "CI/CD", "Automation", "Infrastructure"],
      verifyUrl: "#",
      imageUrl: "/devops.png"
    },
    {
      title: "HTML & CSS Web Development",
      issuer: "Web Development Institute",
      date: "2024",
      description: "Complete web development fundamentals with HTML and CSS",
      skills: ["HTML", "CSS", "Web Development", "Frontend"],
      verifyUrl: "#",
      imageUrl: "/html_css.png"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "AI Learning Platform",
      date: "2024",
      description: "Comprehensive course on generative artificial intelligence and its applications",
      skills: ["AI", "Machine Learning", "Generative AI", "Deep Learning"],
      verifyUrl: "#",
      imageUrl: "/introtoGenAi.png"
    },
    {
      title: "Python Programming for Everybody",
      issuer: "University of Michigan",
      date: "2024",
      description: "Complete Python programming course covering fundamentals to advanced concepts",
      skills: ["Python", "Programming", "Data Structures", "Algorithms"],
      verifyUrl: "#",
      imageUrl: "/programmingforeverybody_python.png"
    },
    {
      title: "SQL Database Management",
      issuer: "Database Certification Institute",
      date: "2024",
      description: "Comprehensive SQL database management and query optimization",
      skills: ["SQL", "Database", "Data Management", "Query Optimization"],
      verifyUrl: "#",
      imageUrl: "/sql.png"
    },
    {
      title: "Unity Game Development Workshop",
      issuer: "Game Development Academy",
      date: "2024",
      description: "Hands-on workshop for Unity game development and 3D programming",
      skills: ["Unity", "Game Development", "C#", "3D Programming"],
      verifyUrl: "#",
      imageUrl: "/unity_workshop.png"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Certificates & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and achievements that validate my technical expertise and commitment to continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="group glow-card overflow-hidden">
                {/* Certificate Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    className="h-full w-auto object-contain max-w-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden h-48 bg-gradient-to-br from-primary/20 to-secondary/20 items-center justify-center">
                    <Award className="h-16 w-16 text-primary/60" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg leading-tight">{cert.title}</h3>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" asChild>
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-primary">{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
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
              Want to verify these certificates? Click the verification links on each certificate card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;