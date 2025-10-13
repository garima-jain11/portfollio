import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Tools & Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "Pandas & NumPy", level: 90 },
      { name: "Scikit-learn", level: 88 },
      { name: "PyTorch & TensorFlow", level: 82 },
      { name: "Streamlit & Dash", level: 85 },
    ],
  },
  {
    category: "Databases & Data Management",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 83 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    category: "Quantitative & Analytical",
    skills: [
      { name: "Statistics", level: 90 },
      { name: "Data Analysis & EDA", level: 92 },
      { name: "Feature Engineering", level: 87 },
      { name: "Mathematical Modeling", level: 85 },
    ],
  },
  {
    category: "Cloud & Deployment",
    skills: [
      { name: "AWS EC2", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Shell Scripting", level: 82 },
      { name: "DevOps Concepts", level: 78 },
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-24 px-6" ref={ref}>
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold" data-testid="heading-skills">
              Technical Skills
            </h2>
            <p className="text-muted-foreground">
              Expertise across the data science and analytics stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <Card className="p-6 h-full" data-testid={`card-skill-category-${catIndex}`}>
                  <h3 className="text-xl font-semibold mb-6" data-testid={`text-category-${catIndex}`}>
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2" data-testid={`skill-${catIndex}-${skillIndex}`}>
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                            data-testid={`skill-bar-${catIndex}-${skillIndex}`}
                          />
                        </div>
                      </div>
                    ))}
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
