import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "AI Image Recognition System",
    description:
      "Deep learning model for multi-class image classification using CNNs. Achieved 94% accuracy on test dataset with real-time inference capabilities.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    githubLink: "#",
  },
  {
    title: "Intelligent Chatbot Platform",
    description:
      "NLP-powered conversational AI with context understanding and sentiment analysis. Handles 1000+ queries daily with 92% user satisfaction.",
    technologies: ["Python", "Transformers", "FastAPI", "React"],
    category: "AI",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Real-time analytics platform with interactive visualizations. Processes millions of data points with sub-second query response times.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Smart Recommendation Engine",
    description:
      "Machine learning-based recommendation system using collaborative filtering. Improved user engagement by 45% through personalized suggestions.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask"],
    category: "AI",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    githubLink: "#",
  },
  {
    title: "Computer Vision Research",
    description:
      "Academic research on object detection algorithms. Published paper on optimized YOLO architecture with 20% faster inference time.",
    technologies: ["Python", "PyTorch", "CUDA", "LaTeX"],
    category: "Research",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop",
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description:
      "Scalable e-commerce solution with payment integration and inventory management. Handles 10K+ concurrent users with 99.9% uptime.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    demoLink: "#",
    githubLink: "#",
  },
];

const categories = ["All", "AI", "Web", "Research"];

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
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

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 bg-background/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Featured <span className="text-gradient">Projects</span>
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
            Showcasing my work in AI, web development, and research
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "glow-primary"
                  : "border-primary/30 hover:border-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group glass rounded-2xl overflow-hidden hover:glass-strong transition-all duration-700 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.demoLink && (
                      <Button
                        size="sm"
                        variant="default"
                        className="flex-1"
                        onClick={() => window.open(project.demoLink, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary"
                        onClick={() => window.open(project.githubLink, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
