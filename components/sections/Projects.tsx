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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Github, ExternalLink, Code, Cpu } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Project {
  title: string
  description: string
  technologies: string
  period: string
  details: string[]
  github?: string
  demo?: string
  category: "web" | "ai" | "all"
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: "Low-Level Design (LLD) Educational Platform",
      description: "A comprehensive platform for learning and implementing Low-Level Design patterns with interactive examples",
      technologies: "React, TypeScript, Tailwind CSS, Vite",
      period: "March, 2025",
      details: [
        "Developed a comprehensive platform for learning and implementing Low-Level Design (LLD) patterns, featuring interactive code examples and real-world use cases.",
        "Built the frontend using React with TypeScript and styled with Tailwind CSS and shadcn/ui components for a modern, responsive user interface.",
        "Implemented a Design Patterns Library showcasing patterns like Singleton, Factory Method, Observer, and Strategy, with detailed explanations and practical examples.",
        "Integrated Object-Oriented Programming (OOP) principles and SOLID design principles to enhance maintainability, scalability, and code clarity.",
        "Architected the application with reusable components, custom hooks for state management, and a modular page structure for scalability."
      ],
      github: "https://github.com/Kushalsathe123/LLD_Design_Website/tree/main",
      demo: "https://learnlld.netlify.app/",
      category: "web"
    },
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
      github: "https://github.com/Kushalsathe123/RecipePlatform",
      category: "web"
    },
    {
      title: "Natural Sounding TTS For Bangla Language",
      description: "A text-to-speech system for the Bangla language with natural-sounding output",
      technologies: "Python, PyTorch, Deep Learning, Coqui TTS, VITS",
      period: "May, 2023",
      details: [
        "Developed a Text-to-Speech (TTS) model leveraging deep learning techniques, improving phonetic accuracy by 30% and enhancing naturalness in synthesized speech.",
        "Outperformed existing TTS models in linguistic benchmarks, increasing intelligibility scores by 25% based on end-user feedback.",
        "Utilized PyTorch and VITS architecture to create a robust neural network capable of generating natural-sounding Bangla speech.",
        "Published related research in a WOS ESCI and PubMed Indexed Engineering Publication, reviewing TTS systems for Devanagari script languages."
      ],
      category: "ai"
    },
    {
      title: "Transliteration Model for English to Hindi Conversion",
      description: "A model that converts English text to Hindi script while preserving pronunciation",
      technologies: "Python, PyTorch, Deep Learning, NLP",
      period: "April, 2023",
      details: [
        "Designed and implemented a Seq-to-Seq transliteration model using attention mechanisms, increasing script conversion accuracy by 40% from Latin to Devanagari.",
        "Facilitated cross-lingual communication by preserving phonetic consistency, reducing transliteration errors by 35% in English-to-Hindi text conversions.",
        "Applied NLP techniques and encoder-decoder architectures to handle complex transliteration challenges between different writing systems.",
        "Led a cross-functional team working on this project, enhancing skills in deep learning, NLP, and team leadership."
      ],
      github: "https://github.com/Kushalsathe123/Transliteration_deep_learning",
      category: "ai"
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

  // Function to get projects by category
  const getProjectsByCategory = (category: "all" | "web" | "ai") => {
    if (category === "all") return projects;
    return projects.filter(project => project.category === category);
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Projects</h2>
        
        <Tabs defaultValue="all" className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList className="mb-6">
              <TabsTrigger value="all" className="text-sm">All Projects</TabsTrigger>
              <TabsTrigger value="web" className="text-sm">
                <Code className="h-4 w-4 mr-1" />
                Web Development
              </TabsTrigger>
              <TabsTrigger value="ai" className="text-sm">
                <Cpu className="h-4 w-4 mr-1" />
                AI & ML
              </TabsTrigger>
            </TabsList>
          </div>

          {["all", "web", "ai"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="relative px-10">
                <Carousel className="w-full">
                  <CarouselContent>
                    {getProjectsByCategory(category as "all" | "web" | "ai").map((project, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card
                            className={cn(
                              "h-80 relative overflow-hidden group transition-all duration-300",
                              "bg-background/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30",
                              "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-purple-500/5 before:rounded-xl",
                            )}
                          >
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="p-6 h-full relative z-10 flex flex-col" onClick={() => setSelectedProject(project)}>
                                  <div>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                      {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-2">{project.technologies}</p>
                                    <p className="text-sm font-medium bg-primary/10 px-2 py-1 rounded-full inline-block mb-4">
                                      {project.period}
                                    </p>
                                    <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
                                  </div>
                                  <div className="mt-auto w-full">
                                    <Button variant="outline" size="sm" className="w-full">
                                      View Details
                                    </Button>
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
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2">
                    <CarouselPrevious className="h-8 w-8" />
                  </div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                    <CarouselNext className="h-8 w-8" />
                  </div>
                </Carousel>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center mt-10">
          <a 
            href="https://github.com/Kushalsathe123?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Button variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              See more projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}