"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

interface Skill {
  name: string
  level: number
  category: "core" | "additional"
}

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000, delay: number = 0, isInView: boolean = false) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const prevTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    const startTime = performance.now() + delay;
    const animate = (time: number) => {
      if (time < startTime) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      if (prevTimeRef.current === 0) {
        prevTimeRef.current = time;
      }

      const progress = Math.min((time - startTime) / duration, 1);
      const newCount = Math.floor(progress * end);

      if (newCount !== countRef.current) {
        countRef.current = newCount;
        setCount(newCount);
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      prevTimeRef.current = 0;
      countRef.current = 0;
    };
  }, [end, duration, delay, isInView]);

  return count;
};

export default function Skills() {
  const coreSkills: Skill[] = [
    { name: ".NET", level: 90, category: "core" },
    { name: "Angular", level: 85, category: "core" },
    { name: "C#", level: 90, category: "core" },
    { name: "REST API", level: 85, category: "core" },
    { name: "SQL", level: 80, category: "core" },
    { name: "Azure", level: 75, category: "core" },
  ]

  const additionalSkills: Skill[] = [
    { name: "Python", level: 70, category: "additional" },
    { name: "NLP", level: 65, category: "additional" },
    { name: "Machine Learning", level: 60, category: "additional" },
    { name: "Flask", level: 65, category: "additional" },
    { name: "SonarQube", level: 70, category: "additional" },
    { name: "CI/CD", level: 80, category: "additional" },
    { name: "Jenkins", level: 75, category: "additional" },
    { name: "SOLID Principles", level: 85, category: "additional" },
    { name: "Design Patterns", level: 80, category: "additional" },
    { name: "Git", level: 85, category: "additional" },
    { name: "Agile/Scrum", level: 80, category: "additional" },
    { name: "HTML/CSS/JS", level: 85, category: "additional" },
  ]

  const [coreSkillsInView, setCoreSkillsInView] = useState(false);
  const [addSkillsInView, setAddSkillsInView] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Core Skills</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              onViewportEnter={() => setCoreSkillsInView(true)}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            >
              {coreSkills.map((skill, index) => {
                const animatedValue = useCountUp(skill.level, 1800, index * 150, coreSkillsInView);
                
                return (
                  <motion.div key={skill.name} variants={item} className="flex flex-col items-center">
                    <div className="w-32 h-32 mb-4">
                      <CircularProgressbar
                        value={animatedValue}
                        text={`${animatedValue}%`}
                        styles={buildStyles({
                          textSize: "1.5rem",
                          pathColor: `hsl(var(--primary) / ${animatedValue / 100})`,
                          textColor: "hsl(var(--foreground))",
                          trailColor: "hsl(var(--primary) / 0.1)",
                          // Add rotation animation
                          pathTransition: coreSkillsInView 
                            ? "stroke-dashoffset 1.5s ease-in-out" 
                            : "none",
                        })}
                      />
                    </div>
                    <h4 className="text-lg font-medium text-center">{skill.name}</h4>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Additional Skills</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              onViewportEnter={() => setAddSkillsInView(true)}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {additionalSkills.map((skill, index) => {
                const animatedValue = useCountUp(skill.level, 1500, index * 100, addSkillsInView);
                
                return (
                  <motion.div key={skill.name} variants={item}>
                    <Card
                      className={cn(
                        "p-4 h-full relative overflow-hidden group",
                        "bg-background/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300",
                        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-purple-500/5 before:rounded-xl",
                      )}
                    >
                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{skill.name}</h4>
                          <span className="text-xs font-medium bg-primary/10 px-2 py-1 rounded-full">{animatedValue}%</span>
                        </div>
                        <div className="w-full bg-background/50 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: addSkillsInView ? `${animatedValue}%` : 0 }}
                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                            className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full transition-all duration-500 group-hover:shadow-glow"
                          ></motion.div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}