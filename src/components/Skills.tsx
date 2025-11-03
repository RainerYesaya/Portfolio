import { useEffect, useRef, useState } from "react";
import { Code2, Brain, Database, Globe, Cpu, GitBranch } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: any;
  color: string;
}

const skills: Skill[] = [
  { name: "Python", level: 90, icon: Code2, color: "from-blue-500 to-cyan-500" },
  { name: "Machine Learning", level: 85, icon: Brain, color: "from-purple-500 to-pink-500" },
  { name: "TensorFlow", level: 80, icon: Cpu, color: "from-orange-500 to-red-500" },
  { name: "C++", level: 75, icon: Code2, color: "from-blue-600 to-blue-400" },
  { name: "SQL/Databases", level: 80, icon: Database, color: "from-green-500 to-emerald-500" },
  { name: "React", level: 85, icon: Globe, color: "from-cyan-500 to-blue-500" },
  { name: "Deep Learning", level: 80, icon: Brain, color: "from-indigo-500 to-purple-500" },
  { name: "Git", level: 85, icon: GitBranch, color: "from-orange-600 to-red-600" },
];

const SkillCard = ({ skill, index, isVisible }: { skill: Skill; index: number; isVisible: boolean }) => {
  const [progress, setProgress] = useState(0);
  const Icon = skill.icon;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass p-8 rounded-2xl hover:glass-strong transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="relative w-40 h-40 mx-auto">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-muted/20"
            />
            {/* Progress Circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="text-primary" stopColor="currentColor" />
                <stop offset="100%" className="text-purple-500" stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>

          {/* Icon */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Icon className="w-12 h-12 text-primary mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold text-foreground">{progress}%</span>
          </div>
        </div>

        {/* Skill Name */}
        <p className="text-center mt-4 font-semibold text-lg group-hover:text-primary transition-colors">
          {skill.name}
        </p>
      </div>
    </div>
  );
};

export const Skills = () => {
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

  return (
    <section id="skills" className="py-20 md:py-32 bg-background/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Technical <span className="text-gradient">Skills</span>
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
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};
