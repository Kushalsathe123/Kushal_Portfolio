"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  technologies: string
  period: string
  details: string[]
  github?: string
  demo?: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: "Recipe Platform (Microservice Architecture)",
      description: "A comprehensive recipe sharing platform built with microservices architecture",
      technologies: ".NET, Angular, JWT, REST API, EFCore, MySQL",
      period: "Dec, 2024",
      details: [
        "Implemented JWT authentication for secure user login and access control in a recipe platform application.",
        "Developed the frontend using Angular, ensuring a responsive and user-friendly interface for recipe discovery, sharing, and interaction.",
        "Architected the backend with a microservice approach, enabling scalable and modular components for handling recipe data, user management, and notifications.",
        "Configured a CI pipeline to automate the build, testing, and deployment process, ensuring continuous integration and smooth updates.",
      ],
      github: "https://github.com/Kushalsathe123",
    },
    {
      title: "Natural Sounding TTS For Bangla Language",
      description: "A text-to-speech system for the Bangla language with natural-sounding output",
      technologies: "Python, Pytorch, Deep Learning, Coqui TTS, VITS",
      period: "May, 2023",
      details: [
        "Developed a Text-to-Speech (TTS) model leveraging deep learning techniques, improving phonetic accuracy by 30% and enhancing naturalness in synthesized speech.",
        "Outperformed existing TTS models in linguistic benchmarks, increasing intelligibility scores by 25% based on end-user feedback.",
      ],
    },
    {
      title: "Transliteration Model for English to Hindi Conversion",
      description: "A model that converts English text to Hindi script while preserving pronunciation",
      technologies: "Python, Pytorch, Deep Learning",
      period: "April, 2023",
      details: [
        "Designed and implemented a Seq-to-Seq transliteration model using attention mechanisms, increasing script conversion accuracy by 40% from Latin to Devanagari.",
        "Facilitated cross-lingual communication by preserving phonetic consistency, reducing transliteration errors by 35% in English-to-Hindi text conversions.",
      ],
      github: "https://github.com/Kushalsathe123",
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
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card
                className={cn(
                  "h-full relative overflow-hidden group cursor-pointer transition-all duration-300",
                  "bg-background/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30",
                  "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-purple-500/5 before:rounded-xl",
                )}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="p-6 h-full relative z-10" onClick={() => setSelectedProject(project)}>
                      <div className="flex flex-col h-full">
                        <div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">{project.technologies}</p>
                          <p className="text-sm font-medium bg-primary/10 px-2 py-1 rounded-full inline-block mb-4">
                            {project.period}
                          </p>
                          <p className="text-sm mb-4">{project.description}</p>
                        </div>
                        <div className="mt-auto">
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      <DialogDescription className="text-base">
                        {project.technologies} | {project.period}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Project Details</h4>
                      <ul className="space-y-2 mb-6">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-4">
                        {project.github && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm" asChild>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

