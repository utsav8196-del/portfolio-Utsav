"use client";

import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "03",
    category: "Full Stack Developer",
    title: "Food Delivery App",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "TypeScript" }, { name: "React.js" }, { name: "Node.js" }, { name: "Redux" }, { name: "MongoDB" }, { name: "Express.js" }],
    image: "/assets/projects/thumb2.png",
    live: "https://food-frontend-kb1v.vercel.app/",
    github: "https://github.com/utsav8196-del/Food-frontend",
  },
  {
    num: "01",
    category: "Frontend Developer",
    title: "E-Commerce Store",
    description: "Shopping UI ",
    stack: [
      { name: "HTML" },
      { name: "JS" },
      { name: "Tailwind" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Redux" },
      
    ],
    image: "/assets/projects/thumb4.png",
    live: "https://book-scape-seven.vercel.app/",
    github: "https://github.com/utsav8196-del/BookScape-frontend",
  },
  {
    num: "02",
    category: "Frontend Developer",
    title: "Doctors-Cares",
   
    stack: [{ name: "Html" }, { name: "Css" }, { name: "JavaScript" }, { name: "React.js" }, { name: "Node.js" }, { name: "Redux" }],
    image: "/assets/projects/thumb6.png",
    live: "https://go-service-frontend-x7xq.vercel.app/",
    github: "https://github.com/utsav8196-del/Go-Service-Frontend",
  },
  {
    num: "05",
    category: "Full Stack Developer",
    title: "StackChat",
    description:
      "You might be trying to sort conversations by date, name, or activity.",
    stack: [{ name: "React.js" }, { name: "TailwindCSS" }, { name: "Vite" }],
    image: "/assets/projects/thumb1.png",
    live: "https://chat-f-beta.vercel.app//",
    github: "https://github.com/utsav8196-del/chat-f",
  },

];

const Projects = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <h3 className="h3 mb-8 text-accent text-center">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover rounded-xl"
                  priority={project.num === "02"}
                />
              </div>

              {/* Project Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/95 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-2 text-white/80">
                  {project.description}
                </p>

                {/* Stack */}
                <ul className="flex gap-2 text-xs mt-2">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsArrowUpRight className="text-xl" />
                    </div>
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsGithub className="text-xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
