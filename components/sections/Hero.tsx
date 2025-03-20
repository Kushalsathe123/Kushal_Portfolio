"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-10 relative" // Added relative positioning
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full px-4"> 
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-muted-foreground">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Kushal Sathe
            </h1>
            <h3 className="text-xl md:text-2xl mt-4 font-bold text-muted-foreground">Full-Stack Developer</h3>
            <p className="mt-6 text-lg max-w-md font-medium">
              Specializing in .NET, Angular, CI/CD, and REST APIs. Based in Pune, Maharashtra, India.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <motion.a
              href="https://linkedin.com/in/kushal-sathe-4640b1204"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </motion.a>
            <motion.a
              href="https://github.com/Kushalsathe123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </motion.a>
            <motion.a href="mailto:kushalsathe1@gmail.com" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Button className="rounded-full font-bold">Contact Me</Button>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <Card
            className={cn(
              "relative w-full max-w-md p-8 overflow-hidden",
              "bg-background/30 backdrop-blur-lg border border-primary/10",
              "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-purple-500/5 before:rounded-xl",
            )}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6">Top Skills</h3>
              <ul className="space-y-4">
                {["Full Stack Dev", ".NET", "Angular", "REST API", "CI/CD/Jenkins", "Azure"].map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="font-medium text-lg">{skill}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  variant="outline"
                  className="w-full font-medium py-6"
                  onClick={() => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View All Skills
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}