import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

const Certificates = () => {
  const certificates = [
    {
      title: "Google AI Essentials",
      issuer: "Google",
      date: "Nov 22, 2025",
      description: "Competent in using AI tools responsibly and improving productivity across workflows. Developed by Google, featuring hands-on practice designed to build AI skills.",
      skills: ["Artificial Intelligence", "Generative AI", "Prompt Engineering", "AI Productivity"],
      verifyUrl: "https://coursera.org/verify/specialization/EM6N81QNDUHS",
      imageUrl: "/google-ai-essentials.png",
      featured: true
    },
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

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <section id="certificates" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
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
              Certificates & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional certifications and achievements that validate my technical expertise and commitment to continuous learning
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certificates.map((cert, index) => (
              <motion.div key={index} variants={item} className="h-full">
                <Card
                  className={cn(
                    "group h-full flex flex-col overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-elegant",
                    cert.featured && "ring-1 ring-primary/50 shadow-glow"
                  )}
                >
                  {/* Certificate Image */}
                  <div className="h-56 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60"></div>
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>

                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />

                    <div className="hidden absolute inset-0 bg-card items-center justify-center z-0">
                      <Award className="h-16 w-16 text-primary/40" />
                    </div>

                    {/* Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-[2px]">
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "default", size: "sm" }),
                          "transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                        )}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Verify Credential
                      </a>
                    </div>

                    {cert.featured && (
                      <div className="absolute top-3 right-3 z-20">
                        <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground border-none shadow-lg backdrop-blur-md">
                          <Sparkles className="w-3 h-3 mr-1" /> Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col relative">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="mb-4">
                      <h3 className="font-bold text-xl leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h3>

                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <span className="font-medium text-primary">{cert.issuer}</span>
                        <span className="mx-2 text-border">•</span>
                        <div className="flex items-center text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {cert.date}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs bg-primary/5 hover:bg-primary/10 text-primary/80 border-primary/10 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-muted-foreground mb-4 flex items-center justify-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>Continuously expanding my skillset with new technologies</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;