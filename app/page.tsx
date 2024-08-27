import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import MyExperience from "@/components/my-experience";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
     <Intro/>
     <SectionDivider/>
     <About/>
     <Projects/>
     <Skills/>
     <MyExperience/>
     <Contact/>
    </main>
  );
}
