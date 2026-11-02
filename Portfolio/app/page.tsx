import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tagline } from "@/components/Tagline";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Tagline />
      <Services />
      <TechStack />
      <FeaturedProjects />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </>
  );
}
