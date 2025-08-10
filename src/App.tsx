import { useState } from "react";
import { LanguageProvider } from "./contexts/LanguageContext.js";
import { Header } from "./components/Header.js";
import { StickyHeader } from "./components/StickyHeader.js";
import { HomePage } from "./components/HomePage.js";
import { Partnership } from "./components/Partnership.js";
import { Contacts } from "./components/Contacts.js";
import { AboutUs } from "./components/AboutUs.js";
import { ResearchTopics } from "./components/ResearchTopics.js";
import { Publications } from "./components/Publications.js";
import { Datasets } from "./components/Datasets.js";
import { Events } from "./components/Events.js";
import { ExpertsPage } from "./components/ExpertsPage.js";
import { ExpertDetailPage } from "./components/ExpertDetailPage.js";
import { Footer } from "./components/Footer.js";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedExpert, setSelectedExpert] = useState<string | null>(null);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setSelectedExpert(null);
  };

  const handleExpertClick = (expertId: string) => {
    setSelectedExpert(expertId);
    setCurrentPage("expert-detail");
  };

  const handleBackToExperts = () => {
    setSelectedExpert(null);
    setCurrentPage("experts");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "partnership":
        return <Partnership />;
      case "contacts":
        return <Contacts />;
      case "about":
        return <AboutUs />;
      case "researchTopics":
        return <ResearchTopics />;
      case "publications":
        return <Publications />;
      case "datasets":
        return <Datasets />;
      case "events":
        return <Events />;
      case "experts":
        return <ExpertsPage onExpertClick={handleExpertClick} />;
      case "expert-detail":
        return selectedExpert ? (
          <ExpertDetailPage
            expertId={selectedExpert}
            onBack={handleBackToExperts}
          />
        ) : (
          <ExpertsPage onExpertClick={handleExpertClick} />
        );
      case "home":
      default:
        return <HomePage />;
    }
  };

  const showFooter = currentPage !== "expert-detail";

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage === "expert-detail" ? "experts" : currentPage}
        onNavigate={handleNavigation}
      />
      <StickyHeader
        currentPage={currentPage === "expert-detail" ? "experts" : currentPage}
        onNavigate={handleNavigation}
      />
      {renderCurrentPage()}
      {showFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}