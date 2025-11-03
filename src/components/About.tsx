import { useEffect, useRef, useState } from "react";
import profileImage from "@/assets/profile.jpg";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    "Artificial Intelligence",
    "Bina Nusantara University",
    "Machine Learning",
    "Intelligent Systems",
    "Deep Learning",
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            About <span className="text-gradient">Me</span>
          </h2>
          <div
            className={`w-24 h-1 bg-primary mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <div
            className={`flex justify-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-500 rounded-2xl opacity-50 blur-xl" />
              <div className="relative glass p-4 rounded-2xl">
                <img
                  src={profileImage}
                  alt="Rainer Yesaya Villareal"
                  className="w-full max-w-md rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science student at{" "}
                <span className="text-primary font-semibold">Bina Nusantara University</span>,
                specializing in{" "}
                <span className="text-primary font-semibold">Intelligent Systems</span>. 
                My journey in technology is driven by a deep fascination with how{" "}
                <span className="text-primary font-semibold">Artificial Intelligence</span> 
                can transform the way we solve complex problems.
              </p>
            </div>

            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I love exploring the intersection of{" "}
                <span className="text-primary font-semibold">Machine Learning</span>,{" "}
                <span className="text-primary font-semibold">Deep Learning</span>, and 
                real-world applications. Whether it's building neural networks, optimizing 
                algorithms, or creating intelligent systems that learn and adapt, I'm always 
                excited to push the boundaries of what's possible.
              </p>
            </div>

            <div
              className={`transition-all duration-700 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                My goal is to contribute to cutting-edge AI research and development, 
                creating solutions that not only showcase technical excellence but also 
                make a meaningful impact on society. I believe in continuous learning, 
                collaboration, and the power of technology to shape a better future.
              </p>
            </div>

            {/* Key Interests */}
            <div
              className={`pt-4 transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex flex-wrap gap-3">
                {highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 glass rounded-full text-sm font-medium text-primary border border-primary/30 hover:border-primary hover:glow-primary transition-all duration-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
