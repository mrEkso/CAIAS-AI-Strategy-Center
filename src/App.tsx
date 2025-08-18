import { useState } from "react";
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
  const [SelectedPublication, setSelectedPublication] = useState<string | null>(null);
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setSelectedExpert(null);
  };

  const handleExpertClick = (expertId: string) => {
    setSelectedExpert(expertId);
    setCurrentPage("expert-detail");
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

  const handleBackToExperts = () => {
    setSelectedExpert(null);
    setCurrentPage("experts");
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

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
      default:
        return <HomePage onArticleClick={handleArticleClick} />;
      case "articleDetail":
        return selectedArticle ? (
          <ArticlesDetailPage
            articleId={selectedArticle}
            onBack={handleBackToAnnouncements}
          />
        ) : (
          <HomePage onArticleClick={handleArticleClick} />
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
        return SelectedPublication ? (
          <PublicationsDetailPage
            publicationId={SelectedPublication}
            onBack={handleBackToPublications}
          />
        ) : (
          <Datasets onDatasetClick={handleDatasetClick} />
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
      case "expert-detail":
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
      {showFooter && (
      <Footer 
        currentPage={currentPage === "expert-detail" ? "experts" : currentPage}
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