import { Card } from "@/components/ui/card";
import { Code2, Target, Lightbulb, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hello, I'm Muhammad Moazzam Hafeez, a Computer Science student at FAST NUCES, Islamabad, graduating in 2026. 
              I've always believed that technology is more than code, it's about solving problems, building reliable systems, and creating impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey started with programming in <strong>C++ and Java</strong>, but curiosity soon led me to explore 
                <strong> Python, SQL, web technologies, and system-level concepts</strong>. Since then, I've built projects across different domains: 
                <strong> databases, operating systems, socket programming (chat apps, file transfer, multiplayer games), and full-stack development</strong>. 
                Each project taught me not only new technical skills but also patience, persistence, and the value of working in teams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Right now, my focus is on two fronts: my <strong>Final Year Project on Deepfake Detection</strong>, where I'm diving into AI and deep learning, 
                and my <strong>DevOps + Cloud roadmap</strong>, where I'm learning how to design scalable, automated, and production ready systems. 
                I also freelance, turning <strong>Figma/PSD designs into responsive websites</strong>, which sharpens both my technical and client-handling skills.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Outside of academics, I enjoy football and cricket, which have shaped my teamwork and leadership abilities. 
                Whether it's on the field or in front of a laptop, I thrive on challenges and continuous growth.
              </p>
            </div>

            {/* Goals & Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 glow-card">
                <div className="flex items-center mb-4">
                  <Code2 className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">AI/ML Research</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Deepfake Detection project and exploring deep learning to build innovative AI solutions.
                </p>
              </Card>

              <Card className="p-6 glow-card">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">DevOps & Cloud</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Designing scalable, automated, and production ready systems for reliable deployment.
                </p>
              </Card>

              <Card className="p-6 glow-card">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Full-Stack Development</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Converting Figma/PSD designs into responsive websites with modern technologies.
                </p>
              </Card>

              <Card className="p-6 glow-card">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Team Leadership</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Football and cricket have shaped my teamwork and leadership abilities in tech projects.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;