import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  GitBranch,
  Cloud,
  Brain,
  Gamepad2,
  Target
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["C++", "Java", "Python", "JavaScript", "SQL", "TypeScript"],
      color: "text-blue-400"
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["HTML/CSS", "React", "Node.js", "Full-Stack", "Responsive Design", "Figma to Code"],
      color: "text-green-400"
    },
    {
      icon: Database,
      title: "System Programming",
      skills: ["Socket Programming", "Operating Systems", "Database Design", "File Transfer", "Multiplayer Games"],
      color: "text-purple-400"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "CI/CD", "Kubernetes", "Terraform", "MLflow", "Airflow", "Prometheus", "Grafana"],
      color: "text-orange-400"
    },
    {
      icon: GitBranch,
      title: "Development Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "PSD Conversion", "Client Handling"],
      color: "text-pink-400"
    },
    {
      icon: Brain,
      title: "AI & Deep Learning",
      skills: ["Deepfake Detection", "Deep Learning", "Machine Learning", "AI Research", "Computer Vision"],
      color: "text-cyan-400"
    },
    {
      icon: Target,
      title: "Project Domains",
      skills: ["Chat Applications", "File Transfer Systems", "Multiplayer Games", "Portfolio Websites"],
      color: "text-red-400"
    },
    {
      icon: Gamepad2,
      title: "Sports & Leadership",
      skills: ["Football", "Cricket", "Team Leadership", "Teamwork", "Problem Solving"],
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Skills & Interests
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse set of technical skills and passionate interests that drive my continuous learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="p-6 glow-card group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <IconComponent className={`h-6 w-6 mr-3 ${category.color}`} />
                    <h3 className="font-semibold text-sm">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;