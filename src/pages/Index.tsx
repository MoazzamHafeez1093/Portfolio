import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Courses from "@/components/Courses";
import Workshops from "@/components/Workshops";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Courses />
      <Workshops />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
