import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jain.garima2003@gmail.com",
    href: "mailto:jain.garima2003@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/garima-jain11",
    href: "https://github.com/garima-jain11",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/garimajain",
    href: "https://linkedin.com/in/garimajain",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-6280383701",
    href: "tel:+916280383701",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-24 px-6 bg-gradient-to-br from-primary/5 to-chart-2/5" ref={ref}>
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold" data-testid="heading-contact">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Open to data science opportunities and collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    data-testid={`link-contact-${index}`}
                  >
                    <Card className="p-6 hover-elevate active-elevate-2 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                          <contact.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                            {contact.label}
                          </h3>
                          <p className="text-sm break-words" data-testid={`text-contact-value-${index}`}>
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                ) : (
                  <Card className="p-6 h-full" data-testid={`card-contact-${index}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                          {contact.label}
                        </h3>
                        <p className="text-sm break-words" data-testid={`text-contact-value-${index}`}>
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, TailwindCSS, and Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
