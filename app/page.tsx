import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { GithubStats } from "@/components/sections/github-stats";
import { Education } from "@/components/sections/education";
import { Achievements } from "@/components/sections/achievements";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { LoadingScreen } from "@/components/ui/loading";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GithubStats />
      <Education />
      <Achievements />
      <Testimonials />
      <Contact />
    </>
  );
}
