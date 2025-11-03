import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Download, Mail, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Rainer Yesaya Villareal";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 opacity-30">
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient inline-block min-h-[1.2em]">
                {typedText}
                <span className="animate-blink">|</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up">
              A Computer Science Student specializing in{" "}
              <span className="text-primary font-semibold">Intelligent Systems</span>
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl animate-slide-up">
              Passionate about AI, Machine Learning, and building intelligent solutions 
              that make a difference. Currently studying at Bina Nusantara University.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="glow-hover group"
                onClick={() => window.open("/cv.pdf", "_blank")}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleContactClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-75 blur-2xl group-hover:opacity-100 transition-opacity animate-glow-pulse" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/50 group-hover:border-primary transition-all duration-300 group-hover:scale-105">
                <img
                  src={profileImage}
                  alt="Rainer Yesaya Villareal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};
