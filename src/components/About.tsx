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
              I'm a dedicated Computer Science student with a passion for technology and innovation. 
              My journey in programming started with curiosity and has evolved into a deep commitment to creating impactful solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                From writing my first "Hello World" program to diving deep into complex algorithms and data structures, 
                my journey in computer science has been filled with constant learning and discovery. I believe that 
                technology has the power to solve real-world problems and make a positive impact on society.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my degree in Computer Science, I'm actively expanding my knowledge through 
                various projects, certifications, and hands-on experience. My goal is to become a well-rounded 
                software engineer who can contribute meaningfully to innovative projects.
              </p>
            </div>

            {/* Motivations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 glow-card">
                <div className="flex items-center mb-4">
                  <Code2 className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Clean Code</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, efficient, and elegant code that stands the test of time.
                </p>
              </Card>

              <Card className="p-6 glow-card">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Problem Solving</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Breaking down complex problems into manageable solutions through logical thinking.
                </p>
              </Card>

              <Card className="p-6 glow-card">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Innovation</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Exploring new technologies and approaches to create innovative solutions.
                </p>
              </Card>

              <Card className="p-6 glow-card">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Impact</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Building technology that makes a positive difference in people's lives.
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