"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

interface Education {
  degree: string
  institution: string
  location: string
  period: string
  score: string
}

interface Certification {
  title: string
  issuer: string
  date: string
  credential?: string
}

export default function Education() {
  const educations: Education[] = [
    {
      degree: "BE - Artificial Intelligence and Data Science",
      institution: "Ajeenkya D Y Patil School of Engineering - ADYPSOE",
      location: "Pune, Maharashtra",
      period: "2020 - 2024",
      score: "CGPA: 8.64 / 10.00",
    },
    {
      degree: "12th - CBSE",
      institution: "Pragati Public Sr Sec School, Kota",
      location: "Kota, Rajasthan",
      period: "2020",
      score: "Percentage: 67.20 / 100.00",
    },
    {
      degree: "10th - CISCE",
      institution: "ST. ANN'S School, Kaitha, Ramgarh",
      location: "Ramgarh, Jharkhand",
      period: "2017",
      score: "Percentage: 83.80 / 100.00",
    },
  ]

  const certifications: Certification[] = [
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      credential: "DP-900",
    },
    {
      title: "Introduction to Identity and Access Management",
      issuer: "LinkedIn Learning",
      date: "2023",
    },
    {
      title: "Securing ASP.NET Core Apps: Web Application Security",
      issuer: "LinkedIn Learning",
      date: "2023",
    },
    {
      title: ".NET 6 SDK Advanced Exploration: Attributes",
      issuer: "Pluralsight",
      date: "2023",
    },
    {
      title: "C# Design Patterns (Part 1 & 2)",
      issuer: "Pluralsight",
      date: "2023",
    },
    {
      title: "Microsoft SQL Server 2022 Essential Training",
      issuer: "LinkedIn Learning",
      date: "2023",
    },
    {
      title: "Threading in C#",
      issuer: "Pluralsight",
      date: "2023",
    },
    {
      title: "AI-Assisted Engineering Course",
      issuer: "EPAM",
      date: "2024",
    },
    {
      title: "Programming Foundations: Object-Oriented Design",
      issuer: "LinkedIn Learning",
      date: "2022",
    },
    {
      title: "Business Analytics & Data Mining Modeling Using R",
      issuer: "edX",
      date: "2022",
    },
    {
      title: "Deep Learning",
      issuer: "NPTEL",
      date: "2022",
    },
    {
      title: "Data Science Foundation Certification",
      issuer: "DataCamp",
      date: "2022",
    },
    {
      title: "EICT Kanpur Student Development Program (AI/ML)",
      issuer: "IIT Kanpur",
      date: "2022",
    },
  ]

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
    <section id="education" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education & Certifications</h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Education
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {educations.map((edu, index) => (
                <motion.div key={index} variants={item} className="perspective-1000">
                  <div className="relative w-full h-64 [transform-style:preserve-3d] transition-all duration-500 hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <Card
                      className={cn(
                        "absolute inset-0 p-6 [backface-visibility:hidden] flex flex-col justify-between",
                        "bg-background/30 backdrop-blur-sm border border-primary/10",
                        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-purple-500/5 before:rounded-xl",
                      )}
                    >
                      <div className="relative z-10">
                        <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <div className="mt-4 flex items-center gap-2">
                          <Badge variant="outline">{edu.period}</Badge>
                        </div>
                      </div>
                    </Card>

                    {/* Back */}
                    <Card
                      className={cn(
                        "absolute inset-0 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center",
                        "bg-background/30 backdrop-blur-sm border border-primary/10",
                        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-purple-500/5 before:rounded-xl",
                      )}
                    >
                      <div className="relative z-10 text-center">
                        <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                        <p className="text-lg font-medium text-primary">{edu.score}</p>
                        <p className="text-muted-foreground mt-2">{edu.location}</p>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
              <Award className="h-6 w-6" />
              Certifications
            </h3>
            <div className="relative px-12"> 
              <Carousel className="max-w-3xl mx-auto">
                <CarouselContent>
                  {certifications.map((cert, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                      <div className="p-2">
                        <Card
                          className={cn(
                            "p-6 h-40 relative overflow-hidden", 
                            "bg-background/30 backdrop-blur-sm border border-primary/10",
                            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-purple-500/5 before:rounded-xl",
                            "flex flex-col justify-between" 
                          )}
                        >
                          <div className="relative z-10">
                            <h4 className="text-lg font-semibold mb-2 line-clamp-2">{cert.title}</h4> 
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <Badge variant="outline">{cert.date}</Badge>
                            {cert.credential && <Badge variant="secondary">{cert.credential}</Badge>}
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute -left-4 top-1/2 -translate-y-1/2"> 
                  <CarouselPrevious className="h-8 w-8" />
                </div>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2"> 
                  <CarouselNext className="h-8 w-8" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}