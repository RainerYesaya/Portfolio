import { Mail, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, link: "https://linkedin.com/in/rainervillareal", label: "LinkedIn" },
    { icon: Github, link: "https://github.com/rainervillareal", label: "GitHub" },
    { icon: Mail, link: "mailto:rainer.villareal@binus.ac.id", label: "Email" },
  ];

  return (
    <footer className="py-8 border-t border-border/50 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Rainer Yesaya Villareal. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
