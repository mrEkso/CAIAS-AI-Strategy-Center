import { useState, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext.js";
import { Header } from "./components/Header.js";
import { StickyHeader } from "./components/StickyHeader.js";
import { HomePage } from "./components/HomePage.js";
import { ArticlesDetailPage } from "./components/ArticlesDetailPage.js";
import { Partnership } from "./components/Partnership.js";
import { Contacts } from "./components/Contacts.js";
import { AboutUs } from "./components/AboutUs.js";
import { ResearchTopics } from "./components/ResearchTopics.js";
import { Publications } from "./components/Publications.js";
import { PublicationsDetailPage } from "./components/PublicationsDetailPage.js";
import { Datasets } from "./components/Datasets.js";
import { DatasetsDetailPage } from "./components/DatasetsDetailPage.js";
import { Podcasts } from "./components/Podcasts.js";
import { Events } from "./components/Events.js";
import { EventsDetailPage } from "./components/EventsDetailPage.js";
import { ExpertsPage } from "./components/ExpertsPage.js";
import { ExpertDetailPage } from "./components/ExpertDetailPage.js";
import { Footer } from "./components/Footer.js";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedExpert, setSelectedExpert] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<string | null>(null);
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

   // 🔹 Глобальний скрол вгору при зміні сторінки або відкритті контенту
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedExpert, selectedArticle, selectedPublication, selectedDataset, selectedEvent]);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setSelectedExpert(null);
    setSelectedArticle(null);
    setSelectedPublication(null);
    setSelectedDataset(null);
    setSelectedEvent(null);
  };

  const handleArticleClick = (articleId: string) => {
    setSelectedArticle(articleId);
    setCurrentPage("articleDetail");
  };

  const handlePublicationClick = (publicationId: string) => {
    setSelectedPublication(publicationId);
    setCurrentPage("publicationDetail");
  };

  const handleDatasetClick = (datasetId: string) => {
    setSelectedDataset(datasetId);
    setCurrentPage("datasetDetail");
  };

  const handleEventClick = (eventId: string) => {
    setSelectedEvent(eventId);
    setCurrentPage("eventDetail");
  };

  const handleExpertClick = (expertId: string) => {
    setSelectedExpert(expertId);
    setCurrentPage("expertDetail");
  };

  const handleBackToAnnouncements = () => {
    setSelectedArticle(null);
    setCurrentPage("home");
  };

  const handleBackToPublications = () => {
    setSelectedPublication(null);
    setCurrentPage("publications");
  };

  const handleBackToDatasets = () => {
    setSelectedDataset(null);
    setCurrentPage("datasets");
  };

  const handleBackToEvents = () => {
    setSelectedEvent(null);
    setCurrentPage("events");
  };

  const handleBackToExperts = () => {
    setSelectedExpert(null);
    setCurrentPage("experts");
  };

  const homePage = (
  <HomePage 
    onArticleClick={handleArticleClick} 
    onNavigate={handleNavigation} 
    currentPage={currentPage} 
  />
);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
      default:
        return homePage;
      case "articleDetail":
        return selectedArticle ? (
          <ArticlesDetailPage
            articleId={selectedArticle}
            onBack={handleBackToAnnouncements}
          />
        ) : (
          homePage
        ); 
      case "partnership":
        return <Partnership />;
      case "contacts":
        return <Contacts />;
      case "about":
        return <AboutUs />;
      case "researchTopics":
        return <ResearchTopics />;
      case "publications":
        return <Publications onPublicationClick={handlePublicationClick} />;
      case "publicationDetail":
        return selectedPublication ? (
          <PublicationsDetailPage
            publicationId={selectedPublication}
            onBack={handleBackToPublications}
          />
        ) : (
          <Publications onPublicationClick={handlePublicationClick} />
        ); 
      case "datasets":
        return <Datasets onDatasetClick={handleDatasetClick} />;
      case "datasetDetail":
        return selectedDataset ? (
          <DatasetsDetailPage
            datasetId={selectedDataset}
            onBack={handleBackToDatasets}
          />
        ) : (
          <Datasets onDatasetClick={handleDatasetClick} />
        ); 
      case "podcasts":
        return <Podcasts />;
      case "events":
        return <Events onEventClick={handleEventClick} />;
      case "eventDetail":
        return selectedEvent ? (
          <EventsDetailPage
            eventId={selectedEvent}
            onBack={handleBackToEvents}
          />
        ) : (
          <Events onEventClick={handleEventClick} />
        ); 
      case "experts":
        return <ExpertsPage onExpertClick={handleExpertClick} />;
      case "expertDetail":
        return selectedExpert ? (
          <ExpertDetailPage
            expertId={selectedExpert}
            onBack={handleBackToExperts}
          />
        ) : (
          <ExpertsPage onExpertClick={handleExpertClick} />
        );
    }
  };

  const showFooter = currentPage !== "expertDetail";

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigation}
      />
      <StickyHeader
        currentPage={
          currentPage === "articleDetail" ? "home" : 
          currentPage === "publicationDetail" ? "publications" : 
          currentPage === "datasetDetail" ? "datasets" : 
          currentPage === "eventDetail" ? "events" : 
          currentPage === "expertDetail" ? "experts" :
          currentPage
        }
        onNavigate={handleNavigation}
        onArticleClick={handleArticleClick}
        onPublicationClick={handlePublicationClick}
        onDatasetClick={handleDatasetClick}
        onEventClick={handleEventClick}
        onExpertClick={handleExpertClick}
      />
      {renderCurrentPage()}
      {showFooter && (
      <Footer 
        currentPage={currentPage}
        onNavigate={handleNavigation} 
      />
    )}
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