import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";

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
    title: "TrackIT",
    description:
      "An AI-based web application that uses Facial Recognition (PyTorch, FaceNet) for automatic, real-time student attendance verification in a university setting , reducing fraud, and integrating with academic systems.",
    technologies: [
      "Python",
      "FaceNet",
      "PyTorch",
      "OpenCV",
      "Flask",
      "Supabase",
      "React.js",
      "Computer Vision",
    ],
    category: "AI",
    image: "/images/TrackIT_Cover.png",
    githubLink: "https://github.com/RainerYesaya/TrackIT",
  },
  {
    title: "Flood Risk Prediction Model for Jakarta",
    description:
      "A machine learning model that predicts flood risk in Jakarta using historical weather data, SMOTE balancing, and a Random Forest classifier. Deployed through a simple Flask web app for real-time user input and predictions.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Flask",
      "Scikit-Learn",
      "Random Forest",
      "Machine Learning",
    ],
    category: "AI",
    image: "/images/Flood_Prediction_Models_Cover.jpg",
    githubLink: "https://github.com/RainerYesaya/Flood-Prediction-Models",
  },
  {
    title: "V-Phone",
    description:
      "A personal project where I built a smartphone brand website called V-Phone, featuring a homepage, product listings, promotions, and a registration page. This project strengthened my skills in creating clean and user-friendly web interfaces while applying brand identity into a functional site.",
    technologies: ["HTML", "CSS", "Figma", "JavaScript"],
    category: "Web",
    image: "images/V-Phone_Cover.jpg",
    githubLink: "https://github.com/RainerYesaya/V-Phone.git",
  },
  {
    title: "Asphalt 9: Legends",
    description:
      "A multi-page website redesign inspired by Asphalt 9: Legends, featuring a homepage, car listings with filters, news updates, esports events, and a subscription page. The project focuses on creating a clean, game-styled interface with improved usability.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    category: "Web",
    image: "images/Asphatl9_Cover.jpg",
    githubLink: "https://github.com/RainerYesaya/Asphatl9",
  },
  {
    title: "WasteWise",
    description:
      "A full-stack web platform that helps users discover recycling ideas, tutorials, and inspiration for turning waste into useful products. The website features material-based search and filters, a catalog of creative projects, video tutorials, user uploads, comments, and authentication. Built with a focus on usability and clean interface design.",
    technologies: ["React.js", "Node.js", "Express.js", "CouchDb", "Figma"],
    category: "Web",
    image: "images/WasteWise_Cover.jpg",
    githubLink: "https://github.com/RainerYesaya/WasteWise",
  },
  {
    title:
      "Hybrid Integration of Collaborative Filtering and the Apriori Algorithm for Game Recommendation System",
    description:
      "A research project proposing a hybrid game recommendation method by combining collaborative filtering with the Apriori algorithm. I contributed to the introduction and methodology, helping define the problem, review related work, and design the model. This project strengthened my understanding of recommender systems and hybrid modeling.",
    technologies: ["Python", "Steam Web API"],
    category: "Research",
    image: "images/Research_Cover.png",
    demoLink:
      "https://docs.google.com/document/d/1NCfACNxBE-5QqInum5HxqnUCS4bNI5o5/edit?usp=sharing&ouid=104274979903997048159&rtpof=true&sd=true",
  },
  {
    title: "MediaAssist",
    description:
      "MediAssist is an AI-based medical chatbot that answers common health questions instantly, anytime. It uses NLP and a trained neural network to understand user messages and give accurate, consistent replies. The chatbot runs on a simple web interface where users can chat with it in real time, helping reduce manual workload and improve accessibility.",
    technologies: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "NLTK",
      "NLP",
      "Tensorflow",
      "Keras",
    ],
    category: "AI",
    image: "images/MediAssist_Cover.jpg",
    githubLink: "https://github.com/RainerYesaya/Mediassist",
  },
];

const categories = ["All", "AI", "Web", "Research"];

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-background/50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
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
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
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

        {/* Projects Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className={`group glass rounded-2xl overflow-hidden hover:glass-strong transition-all duration-700 hover:scale-[1.02] flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
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
                            onClick={() =>
                              window.open(project.demoLink, "_blank")
                            }
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            See
                          </Button>
                        )}
                        {project.githubLink && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-primary"
                            onClick={() =>
                              window.open(project.githubLink, "_blank")
                            }
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

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full border-primary disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full border-primary disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
