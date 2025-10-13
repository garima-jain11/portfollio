import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from 'react-type-animation';
import profileImage from "@assets/stock_images/mine.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[60%_40%] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Garima Jain
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground min-h-[2.5rem]">
              <TypeAnimation
                sequence={[
                  'Data Scientist',
                  2000,
                  'Decision Scientist',
                  2000,
                  'Data Analyst',
                  2000,
                  'ML Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Transforming data into actionable business insights through predictive modeling and advanced analytics
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-projects"
                className="gap-2"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                data-testid="button-download-resume"
                className="gap-2"
                asChild
              >
                <a href="/portfollio/Garima_Jain.pdf" download="Garima_Jain_Resume.pdf">
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6 text-sm text-muted-foreground">
              <span>1+ Years Experience</span>
            </div>

            <div className="flex gap-4 pt-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-github"
                className="hover-elevate"
              >
                <a
                  href="https://github.com/garima-jain11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-linkedin"
                className="hover-elevate"
              >
                <a
                  href="https://linkedin.com/in/garimajain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-email"
                className="hover-elevate"
              >
                <a href="mailto:jain.garima2003@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-2 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-xl">
                <img
                  src={profileImage}
                  alt="Garima Jain"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
