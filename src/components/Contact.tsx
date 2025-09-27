import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // EmailJS configuration - you'll need to replace these with your actual EmailJS credentials
      const serviceId = 'service_your_service_id'; // Replace with your EmailJS service ID
      const templateId = 'template_your_template_id'; // Replace with your EmailJS template ID
      const publicKey = 'your_public_key'; // Replace with your EmailJS public key
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'moazzaam21@gmail.com', // Your email address
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly at moazzaam21@gmail.com",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "moazzaam21@gmail.com",
      href: "mailto:moazzaam21@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 336 222 0642",
      href: "tel:+923362220642"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/MoazzamHafeez1093",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/moazzam-hafeez-aa6a70168/",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="p-4 glow-card">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 hover:text-primary transition-colors duration-300"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                );
              })}

              {/* Social Links */}
              <Card className="p-6 glow-card">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex flex-col space-y-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary hover:scale-105 transition-all duration-300 ${social.color} group`}
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium">{social.label}</p>
                          <p className="text-sm text-muted-foreground">Visit my profile</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 glow-card">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="moazzaam21@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-1 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;