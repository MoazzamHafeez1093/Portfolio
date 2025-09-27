import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Clock, Star } from "lucide-react";

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
      courseUrl: "#"
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
      courseUrl: "#"
    },
    {
      title: "AWS Solutions Architect Path",
      provider: "A Cloud Guru",
      instructor: "Ryan Kroonenburg",
      duration: "40 hours",
      rating: 4.7,
      completionDate: "2023",
      description: "Complete AWS certification preparation with hands-on labs and real-world scenarios",
      skills: ["AWS", "Cloud Architecture", "EC2", "S3", "Lambda"],
      certificateUrl: "#",
      courseUrl: "#"
    },
    {
      title: "Data Structures and Algorithms",
      provider: "Coursera",
      instructor: "UC San Diego",
      duration: "6 months",
      rating: 4.6,
      completionDate: "2023",
      description: "Algorithmic thinking and problem-solving with various data structures and algorithms",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "C++", "Python"],
      certificateUrl: "#",
      courseUrl: "#"
    },
    {
      title: "React Native - The Practical Guide",
      provider: "Udemy",
      instructor: "Maximilian Schwarzmüller",
      duration: "32 hours",
      rating: 4.8,
      completionDate: "2022",
      description: "Build native iOS and Android apps with React Native and JavaScript",
      skills: ["React Native", "Mobile Development", "JavaScript", "iOS", "Android"],
      certificateUrl: "#",
      courseUrl: "#"
    },
    {
      title: "Cybersecurity Fundamentals",
      provider: "edX",
      instructor: "IBM",
      duration: "8 weeks",
      rating: 4.5,
      completionDate: "2022",
      description: "Introduction to cybersecurity principles, threats, and defensive strategies",
      skills: ["Cybersecurity", "Network Security", "Ethical Hacking", "Risk Assessment"],
      certificateUrl: "#",
      courseUrl: "#"
    }
  ];

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Courses & Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning through structured courses and specializations from top institutions and industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group glow-card">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 leading-tight">{course.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <BookOpen className="h-3 w-3 mr-1" />
                        <span className="font-medium text-primary mr-2">{course.provider}</span>
                        <span>•</span>
                        <span className="ml-2">{course.instructor}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        asChild
                      >
                        <a href={course.courseUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                    <div>
                      Completed: {course.completionDate}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <Button variant="glow" size="sm" asChild>
                      <a href={course.certificateUrl} target="_blank" rel="noopener noreferrer">
                        View Certificate
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={course.courseUrl} target="_blank" rel="noopener noreferrer">
                        Course Details
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              All courses completed with certificates of completion available for verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;