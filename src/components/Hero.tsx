import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Download, Mail, ChevronDown } from "lucide-react";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Rainer Yesaya Villareal";

  const subheadings = [
    "a Computer Science Student",
    "an AI Enthusiast",
    "a Creative Problem Solver",
  ];
  const [currentSubheading, setCurrentSubheading] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentSubheading((prev) => (prev + 1) % subheadings.length);
        setFadeIn(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32"
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
          <div className="text-center lg:text-left space-y-6 animate-fade-in order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-gradient inline-block min-h-[1.2em]">
                {typedText}
                <span className="animate-blink">|</span>
              </span>
            </h1>

            {/* Subheading with static "I'm" */}
            <div className="relative min-h-[4rem] flex items-center justify-center lg:justify-start">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground flex gap-2 items-center">
                <span className="text-primary font-medium">I'm</span>
                <span
                  className={`inline-block transition-all duration-500 ease-in-out ${
                    fadeIn
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {subheadings[currentSubheading]}
                </span>
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-slide-up leading-relaxed">
              A Computer Science student from Bina Nusantara University
              passionate about Artificial Intelligence and building impactful
              solutions that connect technology, creativity, and people.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="glow-hover group"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1XK6N89ySBXrAumUdCzkynmHfwtxFcWHw/view?usp=sharing",
                    "_blank"
                  )
                }
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
          <div className="flex justify-center lg:justify-end animate-scale-in order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-75 blur-2xl group-hover:opacity-100 transition-opacity animate-glow-pulse" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/50 group-hover:border-primary transition-all duration-300 group-hover:scale-105">
                <img
                  src="/images/Profile.jpg"
                  alt="Rainer Yesaya Villareal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
