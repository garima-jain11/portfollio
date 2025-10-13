import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, Cloud, BarChart3 } from "lucide-react";

const strengths = [
  {
    icon: TrendingUp,
    title: "Predictive Modeling",
    description: "Building advanced ML models to forecast trends and optimize business outcomes",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "Expert in AWS infrastructure and automated deployment pipelines",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Translating complex data into actionable insights for stakeholders",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 px-6" ref={ref}>
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold" data-testid="heading-about">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-summary">
              Results-oriented professional with a strong foundation in Python development and hands-on experience in data analytics. 
              Possesses industry exposure through prior development experience and current role in data-driven problem-solving. 
              Seeking to contribute to data science initiatives that emphasize analytical precision and business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate" data-testid={`card-strength-${index}`}>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                      <strength.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{strength.title}</h3>
                    <p className="text-muted-foreground text-sm">{strength.description}</p>
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
