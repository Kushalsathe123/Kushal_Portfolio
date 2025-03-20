"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import TypewriterComponent from "typewriter-effect"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  // More gentle transform values
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]) // Reduced movement range
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5])
  
  return (
    <section 
      id="about" 
      className="py-20 relative mb-8" // Added margin bottom
      ref={ref}
    >
      {/* Spacer div to create distance from hero section */}
      <div className="h-16 md:h-20 w-full absolute top-0 left-0"></div>
      
      <div className="min-h-[80vh] pt-12"> {/* Added top padding */}
        <motion.div style={{ opacity }} className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              style={{ y }}
              className="flex justify-center order-2 md:order-1"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative overflow-hidden rounded-full h-48 w-48 md:h-64 md:w-64 bg-background">
                  <Image
                    src="/kushal.jpg?height=256&width=256"
                    alt="Kushal Sathe"
                    width={256}
                    height={256}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 md:order-2"
            >
              <div className="h-24 md:h-16">
                <TypewriterComponent
                  options={{
                    strings: [
                      "I'm a Full-Stack Developer",
                      "I build web applications",
                      "I create REST APIs",
                      "I implement CI/CD pipelines",
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "text-xl md:text-2xl font-semibold text-primary",
                  }}
                />
              </div>
              <p className="text-lg">
                I'm a passionate Full-Stack Developer with expertise in .NET, Angular, CI/CD, and REST APIs. I have a
                strong foundation in building scalable web applications and implementing efficient backend services.
              </p>
              <p className="text-lg">
                My technical skills include .NET, Angular, C#, REST API, SQL, and Azure, along with knowledge of Python,
                NLP, Machine Learning, and more. I'm dedicated to creating high-quality software solutions that deliver
                exceptional user experiences.
              </p>
              <p className="text-lg">
                With experience at EPAM Systems as a Software Developer and internships at iGurus Consultancy Services and
                Gramin Seva Sangh, I've developed a diverse skill set spanning from deep learning and NLP to project
                coordination and technical supervision.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}