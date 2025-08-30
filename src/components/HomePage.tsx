import { AnnouncementsSection } from "./Homepage/AnnouncementsSection.js";
import { HomeHero } from "./Homepage/HomeHero.js";
import { TasksSection } from "./Homepage/TasksSection.js";
import { InitiativesSection } from "./Homepage/InitiativesSection.js";
import { StatsSection } from "./Homepage/StatsSection.js";

export function HomePage() {
  return (
    <main>
      <AnnouncementsSection />
      <TasksSection />
      <HomeHero />
      <InitiativesSection />
      <StatsSection />
    </main>
  );
}
