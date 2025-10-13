import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import muSigmaLogo from "@assets/image_1760385675115.png";
import itcLabsLogo from "@assets/image_1760385645919.png";

const experiences = [
  {
    role: "Decision Scientist",
    company: "Mu Sigma",
    logo: muSigmaLogo,
    location: "Bangalore, Karnataka",
    period: "Jul 2025 — Present",
    duration: "Current",
    achievements: [
      "Developed predictive models to assess factors contributing to customer churn, identifying key drivers and enabling targeted retention strategies",
      "Conducted comprehensive problem decomposition using advanced analytical frameworks to streamline decision-making processes",
      "Designed and implemented growth-oriented models to enhance store footfall metrics, leveraging data-driven insights",
    ],
  },
  {
    role: "Data Analytics & Cloud Operations Intern",
    company: "ITC-LABS",
    logo: itcLabsLogo,
    location: "Panchkula, Haryana",
    period: "Sep 2024 — Jun 2025",
    duration: "10 months",
    achievements: [
      "Executed end-to-end deployment of LIMS software on AWS servers, followed by migration to on-premise networks",
      "Developed and maintained automated deployment scripts using Shell to streamline server provisioning",
      "Implemented monitoring solutions for server logs, identifying anomalies and optimizing system reliability",
      "Designed NoSQL aggregation scripts to generate MIS reports, enabling actionable insights for laboratory operations",
    ],
  },
];

export function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-24 px-6 bg-card" ref={ref}>
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold" data-testid="heading-experience">
              Experience
            </h2>
            <p className="text-muted-foreground">
              Professional journey in data science and analytics
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-chart-2 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
                  data-testid={`experience-${index}`}
                >
                  <div className={index % 2 === 0 ? "" : "md:col-start-2"}>
                    <Card className="p-6 md:p-8 hover-elevate">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-semibold" data-testid={`text-role-${index}`}>
                              {exp.role}
                            </h3>
                            <p className="text-primary font-medium mt-1" data-testid={`text-company-${index}`}>
                              {exp.company}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                              {exp.location}
                            </p>
                          </div>
                          <Badge variant="secondary" data-testid={`badge-duration-${index}`}>
                            {exp.duration}
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground">{exp.period}</p>

                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex gap-3" data-testid={`achievement-${index}-${i}`}>
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>

                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-xl border-2 border-card-border shadow-lg flex items-center justify-center p-2">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                        data-testid={`logo-${index}`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
