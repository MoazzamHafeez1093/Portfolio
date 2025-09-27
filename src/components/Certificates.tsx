import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Comprehensive certification covering AWS cloud architecture and services",
      skills: ["AWS", "Cloud Computing", "Architecture", "Security"],
      verifyUrl: "#",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      description: "Professional-level certification for cloud application development",
      skills: ["GCP", "Cloud Development", "Kubernetes", "APIs"],
      verifyUrl: "#",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Meta Front-End Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2023",
      description: "Complete front-end development program with hands-on projects",
      skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
      verifyUrl: "#",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      description: "Foundational knowledge of AI and machine learning services on Azure",
      skills: ["Azure", "AI/ML", "Cognitive Services", "Python"],
      verifyUrl: "#",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Oracle Java SE 11 Developer",
      issuer: "Oracle",
      date: "2022",
      description: "Professional Java development certification with advanced concepts",
      skills: ["Java", "OOP", "Data Structures", "Algorithms"],
      verifyUrl: "#",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2022",
      description: "Industry-standard certification for cybersecurity fundamentals",
      skills: ["Cybersecurity", "Network Security", "Risk Management", "Compliance"],
      verifyUrl: "#",
      imageUrl: "/placeholder.svg"
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
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Award className="h-16 w-16 text-primary/60" />
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