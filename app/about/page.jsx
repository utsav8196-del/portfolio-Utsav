"use client";

import { FaReact } from "@/node_modules/react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiRedux,
  SiHtml5,
  SiJavascript,
  SiCss3,
} from "react-icons/si";
import { motion } from "framer-motion";

// components
import { ScrollArea } from "@/app/src/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/src/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/src/components/ui/tooltip";

// about data
const about = {
  title: "About me",
  description:
    "Driven by curiosity and perseverance, I am passionate about developing intuitive software that brings value to the world. I believe in the power of technology to bridge gaps, spark positive change, and empower users to achieve their goals.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Utsav Bhoraniya",
    },
    {
      fieldName: "Experience",
      fieldValue: "3 Years",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9904988263",
    },
    {
      fieldName: "Email",
      fieldValue: "utsav8196@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Surat , Gujarat, India",
    },
    {
      fieldName: "Languages",
      fieldValue: "Gujarati, English, Hindi",
    },
  ],
};

// education data
const education = {
  title: "My education",
  description:
    "",
  items: [
    {
      institution: "Saurashtra University",
      degree: "Bachelor of Computer Technology ",
      duration: "2020-2023",
    }
  ],
};

// experience data
const experience = {
  title: "My experience",
  description:
    "Skilled in frontend developer .",
  items: [
    {
      position: "Frontend Developer",
      duration: "2023-2026",
      description: "99 Working",
    },
    {
      position: "Internship 6 Months",
      duration: "July-December (2023)",
      description: "99 Working",
    },
  ],
};

// skills data
const skills = {
  title: "My technical skills",
  description:
    "Adept in the JavaScript ecosystem, I work with modern frameworks and tools to build fast and visually engaging web applications that deliver seamless user experiences.",
  skillList: [
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiHtml5 />,
      name: "HTML5",
    },
    {
      icon: < SiCss3 />,
      name: "Css3",
    },
    {
      icon: <SiVite />,
      name: "Vite.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: < SiJavascript />,
      name: "Javascript",
    },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] xl:px-[30px] h-[80vh] xl:h-[582px] overflow-hidden"
        >
          {/* list */}
          <TabsList className="flex flex-row md:flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6 overflow-x-auto whitespace-nowrap">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[25vh]">
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{about.title}</h3>
                  <p className="p">{about.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent uppercase">
                            {item.fieldName}
                          </span>
                          <h3 className="text-base tracking-tight text-white/80">
                            {item.fieldValue}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{education.title}</h3>
                  <p className="p">{education.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:text-left">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[60px] flex items-center justify-center">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{experience.title}</h3>
                  <p className="p">{experience.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:text-left">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[60px] flex items-center justify-center">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{skills.title}</h3>
                  <p className="p">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex flex-col justify-center items-center group">
                                <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                                {/* Display the skill name directly on smaller screens */}
                                <p className="text-sm mt-2 xl:hidden group-hover:text-accent transition-all duration-300">
                                  {skill.name}
                                </p>
                              </TooltipTrigger>
                              {/* Tooltip content only visible on xl screens and larger */}
                              <TooltipContent className="hidden xl:block">
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
