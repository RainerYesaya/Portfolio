import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  position: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    position: "AI Research Intern",
    company: "Tech Innovation Lab",
    duration: "Jun 2024 - Present",
    description:
      "Working on cutting-edge deep learning models for computer vision applications. Developed neural network architectures that improved classification accuracy by 15%.",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
  },
  {
    position: "Machine Learning Developer",
    company: "StartupX",
    duration: "Jan 2024 - May 2024",
    description:
      "Built and deployed ML models for predictive analytics. Collaborated with cross-functional teams to integrate AI solutions into production systems.",
    technologies: ["Python", "Scikit-learn", "Flask", "Docker"],
  },
  {
    position: "Teaching Assistant",
    company: "Bina Nusantara University",
    duration: "Aug 2023 - Dec 2023",
    description:
      "Assisted in teaching Data Structures and Algorithms course. Mentored students in C++ programming and algorithm design, conducting lab sessions and grading assignments.",
    technologies: ["C++", "Algorithms", "Data Structures"],
  },
  {
    position: "Software Development Intern",
    company: "Digital Solutions Inc.",
    duration: "Jun 2023 - Aug 2023",
    description:
      "Developed full-stack web applications using modern frameworks. Implemented RESTful APIs and responsive user interfaces for client projects.",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
  },
];

const ExperienceCard = ({
  experience,
  index,
  isVisible,
}: {
  experience: ExperienceItem;
  index: number;
  isVisible: boolean;
}) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative mb-0">
      {/* Timeline Dot */}
      <div
        className={`hidden md:block absolute left-1/2 top-8 w-4 h-4 -ml-2 rounded-full bg-primary shadow-lg shadow-primary/50 transition-all duration-700 z-10 ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
      </div>

      {/* Content Card */}
      <div
        className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"} 
          transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : `opacity-0 ${isLeft ? "-translate-x-10" : "translate-x-10"}`
          }`}
        style={{ transitionDelay: `${index * 200 + 100}ms` }}
      >
        <div className="glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 group mb-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {experience.position}
              </h3>
              <p className="text-primary font-semibold">{experience.company}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <Calendar className="w-4 h-4" />
                <span>{experience.duration}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-4">{experience.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div
            className={`w-24 h-1 bg-primary mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <p
            className={`text-muted-foreground mt-4 text-lg transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            My professional journey and contributions
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Continuous Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary to-primary/30 -ml-px" />
          
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
