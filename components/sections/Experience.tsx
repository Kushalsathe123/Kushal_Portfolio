"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Briefcase } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const experiences: ExperienceItem[] = [
    {
      title: "Software Developer I",
      company: "EPAM Systems",
      location: "Hyderabad, Telangana",
      period: "Aug, 2024 - Jan, 2025",
      responsibilities: [
        "Improved scalability by implementing REST APIs and Microservices architecture, resulting in a 30% reduction in response time and enabling the platform to handle 50% more concurrent users.",
        "Enhanced user engagement by developing responsive and intuitive front-end features with Angular, increasing user satisfaction scores by 20%.",
        "Boosted team efficiency by adopting Agile methodology, leading to a 15% reduction in delivery time for key features.",
        "Optimized back-end performance by developing robust services with .NET technologies, achieving 99.9% system uptime and seamless integration across modules.",
        "Collaborated with cross-functional teams using Jira, ensuring continuous improvement and timely delivery of the Applications.",
      ],
    },
    {
      title: "Research Analyst Intern",
      company: "iGurus Consultancy Services LLP",
      location: "Pune, Maharashtra, India (Remote)",
      period: "Jan, 2023 - May, 2023",
      responsibilities: [
        "Led a cross-functional team working on English to Devanagari script transliteration using deep learning and NLP techniques.",
        "Developed a Seq-to-Seq encoder-decoder model with attention mechanisms, achieving 40% higher accuracy in script conversion.",
        "Implemented and optimized neural network architectures for efficient and accurate language transliteration.",
        "Enhanced technical skills in deep learning, natural language processing, and team leadership throughout the project lifecycle.",
        "Collaborated with linguists and domain experts to improve model performance and ensure linguistic accuracy.",
      ],
    },
    {
      title: "Project Coordinator and Technical Supervisor Intern",
      company: "Gramin Seva Sangh",
      location: "Ramgarh, Jharkhand, India (On-site)",
      period: "Mar, 2021 - May, 2021",
      responsibilities: [
        "Assisted in the integration of Women Self Help Group (WSHG) members, coordinating project activities and providing technical supervision.",
        "Facilitated stakeholder engagement and communication between community members and organizational leadership.",
        "Developed management skills in rural development initiatives and community-centric project management.",
        "Applied technical expertise to solve practical challenges in resource-constrained environments.",
        "Gained valuable insights into sustainable development practices and community empowerment strategies.",
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" className="py-20" ref={ref}>
      <motion.div style={{ opacity }} className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-primary transform md:-translate-x-1/2"></div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => {
              const isLeftCard = index !== 1;

              return (
                <motion.div key={index} variants={item}>
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div 
                      className={cn(
                        "flex md:w-1/2",
                        isLeftCard 
                          ? "md:justify-end md:pr-8 order-2 md:order-1" 
                          : "md:justify-start md:pl-8 order-2 md:order-2"
                      )}
                    >
                      <Card
                        className={cn(
                          "p-6 w-full relative overflow-hidden",
                          "bg-background/30 backdrop-blur-sm border border-primary/10",
                          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-purple-500/5 before:rounded-xl",
                        )}
                      >
                        <div className="relative z-10">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                          <p className="text-sm text-muted-foreground mb-4">
                            {exp.location} | {exp.period}
                          </p>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((item, i) => (
                              <li key={i} className="text-sm flex gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </div>

                    <div 
                      className={cn(
                        "md:w-1/2 flex",
                        isLeftCard 
                          ? "justify-center md:justify-start order-1 md:order-2" 
                          : "justify-center md:justify-end order-1 md:order-1"
                      )}
                    >
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary z-10 relative">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div className="absolute top-0 left-0 h-10 w-12 rounded-full bg-primary animate-ping opacity-20"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}