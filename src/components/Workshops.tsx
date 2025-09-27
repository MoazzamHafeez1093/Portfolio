import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Wrench, Calendar, MapPin } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      title: "Unity Game Development Workshop",
      organizer: "Game Development Academy",
      location: "Online",
      date: "2024",
      duration: "2 days",
      description: "Hands-on workshop for Unity game development and 3D programming covering game mechanics, physics, and user interface design",
      skills: ["Unity", "Game Development", "C#", "3D Programming", "Game Physics", "UI/UX"],
      imageUrl: "/unity_workshop.png",
      verifyUrl: "#"
    }
  ];

  return (
    <section id="workshops" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Workshops & Training
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hands-on workshops and intensive training sessions to enhance practical skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="group glow-card overflow-hidden">
                {/* Workshop Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={workshop.imageUrl} 
                    alt={workshop.title} 
                    className="h-full w-auto object-contain max-w-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden h-48 bg-gradient-to-br from-primary/20 to-secondary/20 items-center justify-center">
                    <Wrench className="h-16 w-16 text-primary/60" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg leading-tight">{workshop.title}</h3>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" asChild>
                      <a href={workshop.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Wrench className="h-4 w-4" />
                      <span>{workshop.organizer}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{workshop.date}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs">
                      Duration: {workshop.duration}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {workshop.description}
                  </p>
                  
                  {/* Skills Learned Section */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.skills.map((skill, skillIndex) => (
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
                  
                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a href={workshop.verifyUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Workshop Details
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              These workshops have provided hands-on experience and practical skills in cutting-edge technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
