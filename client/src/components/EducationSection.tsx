import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Award } from "lucide-react";

const achievements = [
  {
    title: "Top 50 Female Coders",
    event: "The Wonder Woman | Hackon with Amazon S4",
    date: "Jun 2024",
    icon: Trophy,
  },
  {
    title: "All India Rank 74",
    event: "NCAT | Naukri Campus",
    date: "Apr 2024",
    icon: Award,
  },
  {
    title: "First Position",
    event: "Hackshield CU Hackathon KAVACH 2023",
    date: "Aug 2023",
    icon: Trophy,
  },
  {
    title: "Milestone Achieved",
    event: "Google Cloud Facilitator Program",
    date: "Mar-May 2022",
    icon: Award,
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 md:py-24 px-6 bg-card" ref={ref}>
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold" data-testid="heading-education">
              Education & Achievements
            </h2>
            <p className="text-muted-foreground">
              Academic background and notable recognitions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full" data-testid="card-education">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-semibold" data-testid="text-degree">
                      Bachelor of Engineering
                    </h3>
                    <p className="text-primary font-medium">Computer Science & Engineering</p>
                    <p className="text-sm text-muted-foreground">Chandigarh University</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="secondary" data-testid="badge-cgpa">8.03 CGPA</Badge>
                      <span className="text-sm text-muted-foreground">Aug 2021 — Jun 2025</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-4 hover-elevate" data-testid={`card-achievement-${index}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm" data-testid={`text-achievement-title-${index}`}>
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.event}</p>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
