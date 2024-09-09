import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cc from "@/public/cc.png";
import ep from "@/public/ep.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer Intern - Hexlet private limited",
    location: "Remote",
    description:
      "As a Remote Software Developer Intern at Hexlet Private Limited, I developed a responsive full-stack e-commerce application using FlutterFlow and integrated secure OTP-based authentication with JWT authorization. I also optimized performance through query optimization and caching, and designed custom UI components to enhance user experience. ",
    icon: React.createElement(LuGraduationCap),
    date: "May 2024 - August 2024",
  },
  {
    title: "Software Engineer - Countrify.app",
    location: "Bengaluru, India",
    description:
      "At Countrify.app, a startup where I worked directly with the founders, I implemented Domain-Driven and Test-Driven Design for a scalable B2B e-commerce platform. I developed RESTful APIs using Python/Flask with a MySQL backend, ensured high code coverage with Pytest, and managed deployment on AWS EC2, integrating Lambda functions and SQS for efficient asynchronous communication.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2022 - August 2023",
  },
  {
    title: "Full-Stack Reseach Developer - Mitacs GRI (Teach Digital Lab)",
    location: "Waterloo, Canada",
    description:
      "As a Full-Stack Research Developer, I built a web application to manage research projects, track lab members, and streamline operations. I used React.js for the frontend, and MongoDB with Django for scalable and flexible RESTful APIs. I also integrated authentication with role-based access and set up CI/CD pipelines for reliable deployment and code quality.",
    icon: React.createElement(FaReact),
    date: "July 2022 - October 2022",
  },
  
] as const;

export const projectsData = [
  {
    title: "ConfideConnect",
    description:
      "ConfideConnect is a full-stack web application that enables users seeking free healthcare to get connected with health professionals and NGO’s.",
    tags: ["React.js", "TypeScript", "MongoDB", "Node.js","Express.js"],
    imageUrl: cc,
    link: "https://github.com/surjith1610/ConfideConnect",
  },
  {
    title: "Edupulse",
    description:
      "EduPulse is a web application that helps to manage and organize student data and their academic records efficiently.",
    tags: ["HTML", "CSS", "JavaScript", "React.js","Firebase"],
    imageUrl: ep,
    link: "https://github.com/surjith1610/EduPulse",
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "Express",
  "Flask",
  "Django",
  "Node.js",
  "React",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Flutterflow",
  "MySQL",
  "MongoDB",
  "Oracle",
  "Firebase",
  "Git",
  "GitHub",
  "Postman",
  "Bruno",
  "VS Code",
  "Xcode",
  "IntelliJ",
  "Jupyter Notebook", 
  "Google Colab",
  "Metabase",
  "AWS EC2",
  "AWS S3",
  "AWS RDS",
  "AWS Lambda",
  "AWS API Gateway",
  "AWS SQS",
  "AWS Cloudwatch",

] as const;