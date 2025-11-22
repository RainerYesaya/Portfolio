import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Brain,
  Database,
  Globe,
  Cpu,
  GitBranch,
  Layers,
  Presentation,
  Users,
  Lightbulb,
  MessageSquare,
  BarChart3,
  ClipboardCheck,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: any;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // 🧠 TECHNICAL SKILLS
  {
    name: "Python",
    level: 90,
    icon: Brain,
    color: "from-yellow-400 to-orange-400",
    category: "Technical Skills",
  },
  {
    name: "JavaScript",
    level: 85,
    icon: Code2,
    color: "from-yellow-400 to-amber-500",
    category: "Technical Skills",
  },
  {
    name: "Java",
    level: 80,
    icon: Code2,
    color: "from-red-400 to-orange-400",
    category: "Technical Skills",
  },
  {
    name: "C / C++",
    level: 75,
    icon: Code2,
    color: "from-blue-400 to-blue-600",
    category: "Technical Skills",
  },
  {
    name: "React.js",
    level: 85,
    icon: Globe,
    color: "from-cyan-400 to-blue-500",
    category: "Technical Skills",
  },
  {
    name: "HTML & CSS",
    level: 90,
    icon: Layers,
    color: "from-orange-400 to-yellow-400",
    category: "Technical Skills",
  },
  {
    name: "Flask",
    level: 80,
    icon: Cpu,
    color: "from-gray-400 to-gray-600",
    category: "Technical Skills",
  },
  {
    name: "Node.js",
    level: 85,
    icon: Globe,
    color: "from-green-400 to-emerald-500",
    category: "Technical Skills",
  },
  {
    name: "Express.js",
    level: 80,
    icon: Globe,
    color: "from-gray-400 to-gray-500",
    category: "Technical Skills",
  },
  {
    name: "Scikit-learn",
    level: 80,
    icon: Brain,
    color: "from-blue-400 to-indigo-500",
    category: "Technical Skills",
  },
  {
    name: "Pandas",
    level: 85,
    icon: Database,
    color: "from-purple-400 to-pink-400",
    category: "Technical Skills",
  },
  {
    name: "TensorFlow",
    level: 80,
    icon: Cpu,
    color: "from-orange-500 to-red-500",
    category: "Technical Skills",
  },
  {
    name: "MySQL / SQL",
    level: 85,
    icon: Database,
    color: "from-teal-400 to-emerald-500",
    category: "Technical Skills",
  },
  {
    name: "MongoDB",
    level: 80,
    icon: Database,
    color: "from-green-500 to-emerald-500",
    category: "Technical Skills",
  },
  {
    name: "Git / GitHub",
    level: 85,
    icon: GitBranch,
    color: "from-orange-600 to-red-600",
    category: "Technical Skills",
  },
  {
    name: "Figma / Canva",
    level: 90,
    icon: Layers,
    color: "from-pink-400 to-purple-400",
    category: "Technical Skills",
  },
  {
    name: "Microsoft Excel",
    level: 85,
    icon: BarChart3,
    color: "from-green-400 to-lime-400",
    category: "Technical Skills",
  },

  // 💬 SOFT SKILLS
  {
    name: "Leadership & Team Management",
    level: 95,
    icon: Users,
    color: "from-sky-500 to-indigo-500",
    category: "Soft Skills",
  },
  {
    name: "Project Coordination",
    level: 90,
    icon: ClipboardCheck,
    color: "from-teal-400 to-emerald-500",
    category: "Soft Skills",
  },
  {
    name: "Communication & Mentorship",
    level: 88,
    icon: MessageSquare,
    color: "from-pink-400 to-purple-400",
    category: "Soft Skills",
  },
  {
    name: "Critical Thinking",
    level: 92,
    icon: Lightbulb,
    color: "from-yellow-400 to-amber-500",
    category: "Soft Skills",
  },
  {
    name: "Problem Solving",
    level: 90,
    icon: Brain,
    color: "from-indigo-400 to-purple-500",
    category: "Soft Skills",
  },
  {
    name: "Teamwork & Collaboration",
    level: 94,
    icon: Users,
    color: "from-blue-400 to-cyan-400",
    category: "Soft Skills",
  },
  {
    name: "Data Analysis",
    level: 85,
    icon: BarChart3,
    color: "from-green-400 to-emerald-500",
    category: "Soft Skills",
  },
];

const categories = ["All", "Technical Skills", "Soft Skills"];

const SkillCard = ({
  skill,
  index,
  isVisible,
}: {
  skill: Skill;
  index: number;
  isVisible: boolean;
}) => {
  const [progress, setProgress] = useState(0);
  const Icon = skill.icon;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setProgress(skill.level), 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  // RESPONSIVE circle radius
  const radius = 55; // lebih kecil, aman untuk mobile
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass p-4 sm:p-6 rounded-2xl hover:glass-strong transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative w-24 h-24 sm:w-40 sm:h-40 mx-auto">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-muted/20"
            />

            <circle
              cx="50%"
              cy="50%"
              r={radius}
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
                <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
                <stop offset="100%" stopColor="hsl(264, 89%, 58%)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Icon & Percentage */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Icon className="w-10 h-10 text-primary mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-lg sm:text-2xl font-bold text-foreground">
              {progress}%
            </span>
          </div>
        </div>

        <p className="text-center mt-4 font-semibold text-base sm:text-lg group-hover:text-primary transition-colors">
          {skill.name}
        </p>
      </div>
    </div>
  );
};

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-background/50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            My <span className="text-gradient">Skills</span>
          </h2>
          <div
            className={`w-24 h-1 bg-primary mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <p
            className={`text-muted-foreground mt-4 text-lg transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            A mix of technical expertise and soft skills that drive innovation
            and teamwork
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50 scale-105"
                  : "bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-2">
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
