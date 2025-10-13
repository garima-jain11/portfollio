import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  BarChart3, 
  Cloud, 
  FileCode2,
  TrendingUp,
  Boxes,
  Braces,
  Server,
  Container,
  Terminal,
  Settings,
  Users,
  ShoppingCart,
  Target,
  LineChart,
  Brain,
  GitBranch,
  Layers,
  Zap,
  type LucideIcon
} from "lucide-react";

// Center point
const centerX = 50;
const centerY = 50;

// Calculate positions in a spider web pattern (concentric circles with radial spokes)
const getWebPosition = (index: number, total: number, ring: number) => {
  const angle = (index * 2 * Math.PI) / total;
  const radius = 18 + (ring * 15); // Larger rings with more spacing
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  };
};

// Organize skills into rings (fewer skills per ring to avoid overlap)
const ringSkills = [
  // Inner ring (6 skills)
  [
    { name: "Python", icon: Code2 },
    { name: "Statistics", icon: BarChart3 },
    { name: "MySQL", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Scikit-learn", icon: TrendingUp },
    { name: "Docker", icon: Container },
  ],
  // Middle ring (8 skills)
  [
    { name: "Pandas", icon: FileCode2 },
    { name: "PyTorch", icon: Braces },
    { name: "TensorFlow", icon: Brain },
    { name: "XGBoost", icon: Zap },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Server },
    { name: "Streamlit", icon: Boxes },
    { name: "Power BI", icon: BarChart3 },
  ],
  // Outer ring (10 skills)
  [
    { name: "Churn Prediction", icon: Users },
    { name: "Segmentation", icon: Target },
    { name: "Market Basket", icon: ShoppingCart },
    { name: "Time Series", icon: LineChart },
    { name: "A/B Testing", icon: GitBranch },
    { name: "Regression", icon: TrendingUp },
    { name: "Hypothesis Test", icon: Target },
    { name: "Shell Script", icon: Terminal },
    { name: "Ensemble", icon: Layers },
    { name: "Neural Nets", icon: Brain },
  ],
];

// Create skills array with positions
const skills = ringSkills.flatMap((ring, ringIndex) =>
  ring.map((skill, skillIndex) => {
    const pos = getWebPosition(skillIndex, ring.length, ringIndex);
    return {
      ...skill,
      x: `${pos.x}%`,
      y: `${pos.y}%`,
      ring: ringIndex,
      angleIndex: skillIndex,
      id: skill.name.toLowerCase().replace(/\s+/g, '-'),
    };
  })
);

// Generate spider web connections
const generateWebConnections = () => {
  const connections = [];
  
  // Radial spokes from center to each skill
  skills.forEach((skill) => {
    connections.push({
      x1: centerX,
      y1: centerY,
      x2: parseFloat(skill.x),
      y2: parseFloat(skill.y),
      type: 'spoke'
    });
  });
  
  // Circular connections within each ring
  ringSkills.forEach((ring, ringIndex) => {
    ring.forEach((_, skillIndex) => {
      const currentSkill = skills.find(
        s => s.ring === ringIndex && s.angleIndex === skillIndex
      );
      const nextSkill = skills.find(
        s => s.ring === ringIndex && s.angleIndex === (skillIndex + 1) % ring.length
      );
      
      if (currentSkill && nextSkill) {
        connections.push({
          x1: parseFloat(currentSkill.x),
          y1: parseFloat(currentSkill.y),
          x2: parseFloat(nextSkill.x),
          y2: parseFloat(nextSkill.y),
          type: 'circle'
        });
      }
    });
  });
  
  return connections;
};

const webConnections = generateWebConnections();

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-24 px-6 bg-background overflow-hidden" ref={ref}>
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
              My technology network
            </p>
          </div>

          <div className="relative min-h-[800px] md:min-h-[900px] w-full max-w-6xl mx-auto flex items-center justify-center px-4">
            {/* SVG for spider web (cobweb) connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Center point */}
              <motion.circle
                cx={centerX}
                cy={centerY}
                r="1.5"
                fill="rgb(59, 130, 246)"
                filter="url(#glow)"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Cobweb connections */}
              {webConnections.map((conn, idx) => (
                <motion.line
                  key={`web-${idx}`}
                  x1={conn.x1}
                  y1={conn.y1}
                  x2={conn.x2}
                  y2={conn.y2}
                  stroke="rgb(59, 130, 246)"
                  strokeWidth={conn.type === 'spoke' ? "0.2" : "0.15"}
                  opacity={conn.type === 'spoke' ? "0.5" : "0.3"}
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { 
                    pathLength: 1, 
                    opacity: conn.type === 'spoke' ? 0.5 : 0.3 
                  } : { pathLength: 0, opacity: 0 }}
                  transition={{ 
                    duration: conn.type === 'spoke' ? 1 : 1.5, 
                    delay: conn.type === 'spoke' ? idx * 0.02 : 0.5 + idx * 0.01 
                  }}
                />
              ))}
            </svg>

            {/* Skill bubbles */}
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -8, 0],
                  } : { opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    y: {
                      duration: 3 + (index % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }
                  }}
                  className="absolute"
                  style={{ 
                    left: skill.x, 
                    top: skill.y,
                    transform: 'translate(-50%, -50%)',
                  }}
                  data-testid={`skill-${index}`}
                >
                  {/* Backlight glow */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl scale-150"
                    animate={{ 
                      scale: [1.5, 1.7, 1.5],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Glossy bubble */}
                  <div className="relative group cursor-pointer">
                    <div 
                      className="px-2.5 py-1.5 md:px-3 md:py-2 rounded-full text-[10px] md:text-xs font-medium flex items-center gap-1 md:gap-1.5 
                                 bg-gradient-to-br from-slate-800/90 to-slate-900/90 
                                 border-2 border-blue-500/30
                                 shadow-[0_0_15px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
                                 backdrop-blur-sm
                                 hover:shadow-[0_0_25px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]
                                 hover:border-blue-400/50
                                 transition-all duration-300
                                 relative overflow-hidden"
                    >
                      {/* Glossy shine effect */}
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
                      
                      {/* Content */}
                      <Icon className="h-3 w-3 md:h-4 md:w-4 text-blue-400 relative z-10 flex-shrink-0" />
                      <span className="text-white relative z-10 whitespace-nowrap">{skill.name}</span>
                      
                      {/* Rim light */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
