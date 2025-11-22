import { useEffect, useRef, useState } from "react";
import profileImage from "@/assets/profile.jpg";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    "Computer Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Developer",
    "AIESECer",
    "Communicative",
    "Team Work",
    "Active",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Soft background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            About <span className="text-gradient">Me</span>
          </h2>
          <div
            className={`w-24 h-1 bg-primary mx-auto mt-3 rounded-full transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div
            className={`flex justify-center transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-500 rounded-2xl opacity-40 blur-xl group-hover:opacity-70 transition-all duration-500" />
              <div className="relative p-4 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/50">
                <img
                  src={profileImage}
                  alt="Rainer Yesaya Villareal"
                  className="w-full max-w-md rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div
            className={`space-y-6 text-muted-foreground transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
              Hi, I’m{" "}
              <span className="italic underline text-gradient inline-block pr-[15px]">
                Rainer
              </span>
            </h3>

            {/* Description */}
            <p className="text-lg leading-relaxed">
              
              A Computer Science student at{" "}
              <span className="text-primary font-semibold">
                Bina Nusantara University
              </span>{" "}
              with a strong interest in{" "}
              <span className="text-primary font-semibold">
                Artificial Intelligence
              </span>{" "}
              and{" "}
              <span className="text-primary font-semibold">
                Machine Learning
              </span>
              . I’m passionate about developing impactful tech solutions that
              solve real-world problems.
            </p>

            <p className="text-lg leading-relaxed">
              I’ve worked on several projects, including a{" "}
              <span className="text-primary font-semibold">
                flood prediction model for the Jakarta area
              </span>
              , a{" "}
              <span className="text-primary font-semibold">
                face recognition attendance system
              </span>
              , and a{" "}
              <span className="text-primary font-semibold">
                recycling video platform
              </span>
              . These experiences helped me strengthen my problem-solving,
              teamwork, and creativity in technology.
            </p>

            <p className="text-lg leading-relaxed">
              Outside of academics, I’m active in organizations like{" "}
              <span className="text-primary font-semibold">AIESEC</span> and{" "}
              <span className="text-primary font-semibold">iBuddy</span>, where
              I’ve developed leadership and communication skills through
              collaboration, mentorship, and global exchange activities.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              {highlights.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
