import { Hero } from "./Hero.js";
import { TasksSection } from "./TasksSection.js";
import { InitiativesSection } from "./InitiativesSection.js";
import { StatsSection } from "./StatsSection.js";

export function HomePage() {
  return (
    <main>
      <Hero />
      <TasksSection />
      <InitiativesSection />
      <StatsSection />
    </main>
  );
}