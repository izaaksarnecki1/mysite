import { About } from "@/components/about";
import { GradientBackground } from "@/components/gradient-background";
import { Hero } from "@/components/hero";
import { Parallax } from "@/components/parallax";
import { Particles } from "@/components/particles";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="relative">
      <GradientBackground />
      <Particles />
      <Parallax />
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
