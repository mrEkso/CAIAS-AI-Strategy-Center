import { AnnouncementsSection } from "./Homepage/AnnouncementsSection.js";
import { HomeHero } from "./Homepage/HomeHero.js";
import { TasksSection } from "./Homepage/TasksSection.js";
import { InitiativesSection } from "./Homepage/InitiativesSection.js";
import { StatsSection } from "./Homepage/StatsSection.js";

interface HomePageProps {
  onArticleClick?: (articleId: string) => void;
  onNavigate: (page: string) => void;
  currentPage: string;   
}

export function HomePage({ onArticleClick, onNavigate, currentPage }: HomePageProps) {
  return (
    <main>
      <AnnouncementsSection onArticleClick={onArticleClick} />
      <TasksSection />
      <HomeHero onNavigate={onNavigate} currentPage={currentPage}/>
      <InitiativesSection />
      <StatsSection />
    </main>
  );
}