import { AboutHero } from "./AboutUs/AboutHero.js";
import { AboutContent } from "./AboutUs/AboutContent.js";
import { TeamSection } from "./AboutUs/TeamSection.js";

export function AboutUs() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <TeamSection />
    </main>
  );
}
