"use client";

import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// components
import { Button } from "@/app/src/components/ui/button";
import Social from "@/app/src/components/Social";
import Photo from "@/app/src/components/Photo";
import Stats from "@/app/src/components/Stats";

const Home = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex flex-col justify-center xl:justify-between py-12 xl:py-0"
    >
      <div className="container mx-auto max-w-[1280px] flex-1 flex items-center">
        {/* main content */}
        <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-[100px] w-full">
          {/* photo */}
          <div className="mb-8 xl:mb-0">
            <Photo />
          </div>
          {/* text */}
          <div className="flex flex-col gap-4 w-auto max-w-[585px] text-center xl:text-left">
            {/* hello */}
            <motion.div
              variants={fadeIn("down", 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h1 className="h1">
                Hello,
                <br />
                I'm <span className="text-accent">Utsav Bhoraniya!</span>
              </h1>
            </motion.div>
            {/* bio */}
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="p w-full text-white/80"
            >
              <p>
                Hey there! I'm Utsav Bhoraniya, and I'm passionate about building clean,
                modern, and user-friendly web experiences. My journey into tech
                started with curiosity about how websites are built, and that
                curiosity soon grew into a love for Frontend Development and UI/UX
                design.
                <br />
                <br />
                Over time, I've honed my skills as a Frontend Developer, working with
                technologies like HTML, CSS, JavaScript, and React to bring ideas to
                life in the browser. I focus on creating responsive, high-performance
                interfaces that emphasize usability and modern design.
                <br />
                <br />
                I'm always looking to expand my skill set—whether it's exploring new
                frameworks, refining user experiences, or diving into creative design
                solutions. I believe growth comes from curiosity, consistency, and a
                love for the craft.
              </p>
            </motion.div>
            {/* take action */}
            <motion.h3
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h3 leading-normal"
            >
              Let's build something extraordinary together!
            </motion.h3>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center justify-center xl:items-center xl:justify-start gap-6 pt-2">
              {/* View Resume button only */}
              <motion.a
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                href="/assets/Utsav Bhoraniya resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Utsav Bhoraniya's Resume"
              >
                <Button
                  variant="outline"
                  size="md"
                  className="uppercase flex items-center gap-2"
                >
                  <span>View Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </motion.a>

              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="mb-8 xl:mb-0 flex justify-center"
              >
                <Social />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Stats at the bottom */}
      <div className="w-full">
        <Stats />
      </div>
    </motion.div>
  );
};

export default Home;
