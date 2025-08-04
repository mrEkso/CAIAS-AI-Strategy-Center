import { Hero } from "./Hero";
import { TasksSection } from "./TasksSection";
import { InitiativesSection } from "./InitiativesSection";
import { StatsSection } from "./StatsSection";

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