import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import churnImage from "@assets/stock_images/data_analytics_dashb_926b3bfc.jpg";
import covidImage from "@assets/stock_images/covid-19_coronavirus_f5497853.jpg";
const projects = [
  {
    title: "Telecom Customer Churn Analysis & Prediction",
    period: "Mar 2024 — Apr 2025",
    description:
      "Built predictive models to identify high-risk churn customers with improved accuracy using advanced machine learning techniques and interactive dashboards.",
    details: [
      "Performed exploratory data analysis on telecom customer data to uncover churn patterns",
      "Built predictive models (Logistic Regression, Random Forest, XGBoost)",
      "Developed interactive dashboards using Streamlit to visualize churn risk",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit", "Matplotlib"],
    image: churnImage,
  },
  {
    title: "COVID-19 Interactive Dashboard",
    period: "May 2025 — Jun 2025",
    description:
      "Built an interactive dashboard to monitor COVID-19 trends, including confirmed cases, recoveries, and deaths across regions with real-time data exploration.",
    details: [
      "Implemented dynamic charts and filters for real-time data exploration",
      "Applied data cleaning, aggregation, and visualization techniques",
      "Delivered an end-to-end data science solution",
    ],
    tech: ["Python", "Plotly", "Dash", "Pandas", "Data Visualization"],
    image: covidImage,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-24 px-6 bg-muted/30" ref={ref}>
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold" data-testid="heading-projects">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              Real-world applications of data science and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  className="overflow-hidden h-full flex flex-col hover-elevate group"
                  data-testid={`card-project-${index}`}
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-testid={`img-project-${index}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold" data-testid={`text-project-title-${index}`}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.period}</p>
                    </div>

                    <p className="text-muted-foreground">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${tech.toLowerCase()}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 mt-auto">
                      <Button variant="outline" size="sm" className="gap-2" data-testid={`button-view-${index}`}>
                        <ExternalLink className="h-4 w-4" />
                        View Details
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2" data-testid={`button-github-${index}`}>
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
