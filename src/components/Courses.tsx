import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Clock, Star, Award, Eye } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Complete Web Development Bootcamp",
      provider: "Udemy",
      instructor: "Dr. Angela Yu",
      duration: "65 hours",
      rating: 4.8,
      completionDate: "2024",
      description: "Full-stack web development course covering HTML, CSS, JavaScript, Node.js, React, and databases",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      certificateUrl: "#",
      courseUrl: "#",
      type: "course"
    },
    {
      title: "Machine Learning Specialization",
      provider: "Coursera",
      instructor: "Andrew Ng",
      duration: "3 months",
      rating: 4.9,
      completionDate: "2023",
      description: "Comprehensive machine learning course covering supervised and unsupervised learning algorithms",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Linear Algebra", "Statistics"],
      certificateUrl: "#",
      courseUrl: "#",
      type: "course"
    }
  ];

  const certificates = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "AWS Cloud Practitioner certification demonstrating foundational knowledge of AWS cloud services and architecture",
      skills: ["AWS", "Cloud Computing", "Cloud Architecture", "AWS Services", "Cloud Security"],
      verifyUrl: "https://www.credly.com/badges/6856a993-9775-4c00-a4b8-220b09bdd205/linked_in_profile",
      imageUrl: "/aws-educate-introduction-to-cloud-101 (1).png",
      type: "certificate"
    },
    {
      title: "DevOps Culture and Mindset",
      issuer: "University of California, Davis",
      date: "July 2025",
      description: "Comprehensive DevOps course covering culture transformation, process improvement, and operational efficiency",
      skills: ["DevOps", "Systems Thinking", "Process Mapping", "Risk Management", "CI/CD", "Continuous Improvement"],
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/9MFRAZ4T8KDE",
      imageUrl: "/devops.png",
      type: "certificate"
    },
    {
      title: "Build Your Portfolio Website with HTML and CSS",
      issuer: "Coursera Project Network",
      date: "October 2022",
      description: "Hands-on project course covering web development fundamentals with HTML and CSS for portfolio creation",
      skills: ["HTML", "CSS", "Web Development", "Web Design", "GitHub", "Cloud Hosting"],
      verifyUrl: "https://coursera.org/verify/MVNWEC3D4SSW",
      imageUrl: "/html_css.png",
      type: "certificate"
    },
    {
      title: "Introduction to Generative AI for Software Development",
      issuer: "DeepLearning.AI",
      date: "June 2025",
      description: "Comprehensive course on integrating generative AI tools in software development workflows",
      skills: ["Generative AI", "Machine Learning", "Prompt Engineering", "Software Development", "AI/ML"],
      verifyUrl: "https://coursera.org/verify/NNTFCSQJ4IUN",
      imageUrl: "/introtoGenAi.png",
      type: "certificate"
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan",
      date: "August 2025",
      description: "Complete Python programming course covering fundamentals to advanced concepts with hands-on practice",
      skills: ["Python Programming", "Computational Thinking", "Programming Principles", "Development Environment"],
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/FR0ROTZRY3NO",
      imageUrl: "/programmingforeverybody_python.png",
      type: "certificate"
    },
    {
      title: "Understanding Basic SQL Syntax",
      issuer: "Coursera Project Network",
      date: "July 2025",
      description: "Focused course on SQL fundamentals covering data manipulation and query optimization",
      skills: ["SQL", "Data Manipulation", "Query Languages", "Relational Databases", "Data Access"],
      verifyUrl: "https://coursera.org/verify/ZO8W3399ZPJL",
      imageUrl: "/sql.png",
      type: "certificate"
    }
  ];

  const allItems = [...courses, ...certificates];

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Courses & Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning journey through comprehensive courses and professional certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allItems.map((item, index) => (
              <Card key={index} className="group glow-card overflow-hidden">
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  {item.type === "certificate" ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="h-full w-auto object-contain max-w-full"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : (
                    <BookOpen className="h-16 w-16 text-primary/60" />
                  )}
                  <div className="hidden h-48 bg-gradient-to-br from-primary/20 to-secondary/20 items-center justify-center">
                    <Award className="h-16 w-16 text-primary/60" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" asChild>
                      <a href={item.type === "certificate" ? item.verifyUrl : item.courseUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      {item.type === "certificate" ? (
                        <Award className="h-4 w-4" />
                      ) : (
                        <BookOpen className="h-4 w-4" />
                      )}
                      <span>{item.type === "certificate" ? item.issuer : item.provider}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.type === "certificate" ? item.date : item.completionDate}</span>
                    </div>
                    {item.type === "course" && (
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{item.rating}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Skills Learned Section */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Skills Learned:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
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
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={item.type === "certificate" ? item.verifyUrl : item.courseUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 h-4 w-4" />
                        {item.type === "certificate" ? "View Certificate" : "View Course"}
                      </a>
                    </Button>
                    {item.type === "course" && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        asChild
                      >
                        <a href={item.certificateUrl} target="_blank" rel="noopener noreferrer">
                          <Award className="mr-2 h-4 w-4" />
                          Certificate
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              All courses and certifications completed with verification links available for each achievement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;