import { AboutHero } from "./AboutUs/AboutHero.js";
import { AboutContent } from "./AboutUs/AboutContent.js";
import { TeamSection } from "./AboutUs/TeamSection.js";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export function AboutUs() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "team") {
      const element = document.getElementById("team");
      if (element) {
        element.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }
  }, [location]);

  return (
    <main>
      <AboutHero />
      <AboutContent />
      <TeamSection />
    </main>
  );
}
