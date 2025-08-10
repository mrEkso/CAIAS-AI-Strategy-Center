import { AnnouncementsSection } from "./Homepage/AnnouncementsSection.js";
import { Hero } from "./Homepage/Hero.js";
import { TasksSection } from "./Homepage/TasksSection.js";
import { InitiativesSection } from "./Homepage/InitiativesSection.js";
import { StatsSection } from "./Homepage/StatsSection.js";

export function HomePage() {
  return (
    <main>
      <AnnouncementsSection />
      <TasksSection />
      <Hero />
      <InitiativesSection />
      <StatsSection />
    </main>
  );
}