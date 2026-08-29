import { ContactCta } from "@/components/main/contact-cta";
import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Services } from "@/components/main/services";
import { Skills } from "@/components/main/skills";
import { Stats } from "@/components/main/stats";
import { Testimonials } from "@/components/main/testimonials";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Experience />
        <Services />
        <Stats />
        <Testimonials />
        <ContactCta />
      </div>
    </main>
  );
}
