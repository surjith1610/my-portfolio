"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const{ref} = useSectionInView("About",0.5);
  
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  I&apos;m a Software Engineer based in Boston, currently pursuing my Master’s in 
  <span className="font-medium">Computer Software Engineering</span>. My journey includes working directly with the founders at 
  <span className="font-medium">countrify.app</span>, an early-stage E-commerce startup connecting businesses, and serving as a 
  <span className="font-medium">Mitacs Globalink Research Intern</span> at Wilfrid Laurier University, a highly competitive, fully-funded global internship program. I specialize in 
  <span className="font-medium">Domain-Driven Design</span>, 
  <span className="font-medium">Test-Driven Development</span>, and have a solid grasp of 
  <span className="font-medium">Python, MySQL, Flask, and Django</span>.
</p>


<p>
  Along with that, I’m skilled in{" "}
  <span className="font-medium">React, Node.js, MongoDB, TypeScript, and JavaScript</span>. I believe the best products solve real-world problems—fancy features come second to value and impact. I'm always eager to learn new technologies and grow with each project I take on. 
</p>

    </motion.section>
  )
}
