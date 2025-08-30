import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext.js";

import { Header } from "./components/Header.js";
import { StickyHeader } from "./components/StickyHeader.js";
import { Footer } from "./components/Footer.js";
import { CookieBanner } from "./components/CookieBanner.js";

import { HomePage } from "./components/HomePage.js";
import { ArticlesDetailPage } from "./components/ArticlesDetailPage.js";
import { Partnership } from "./components/Partnership.js";
import { Contacts } from "./components/Contacts.js";
import { AboutUs } from "./components/AboutUs.js";
import { TeamMemberDetailPage } from "./components/AboutUs/TeamMemberDetailPage.js";
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

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyHeader />

      <Routes>
        {/* Головна */}
        <Route path="/" element={<HomePage />} />

        {/* Оголошення */}
        <Route path="/announcements/:id" element={<ArticlesDetailPage />} />

        {/* Партнерство, контакти, дослідження */}
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/research-topics" element={<ResearchTopics />} />

        {/* Команда */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/team/:id" element={<TeamMemberDetailPage />} />

        {/* Публікації */}
        <Route path="/publications" element={<Publications />} />
        <Route path="/publications/:id" element={<PublicationsDetailPage />} />

        {/* Датасети */}
        <Route path="/datasets" element={<Datasets />} />
        <Route path="/datasets/:id" element={<DatasetsDetailPage />} />

        {/* Подкасти */}
        <Route path="/podcasts" element={<Podcasts />} />

        {/* Події */}
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventsDetailPage />} />

        {/* Експерти */}
        <Route path="/experts" element={<ExpertsPage />} />
        <Route path="/experts/:id" element={<ExpertDetailPage />} />
      </Routes>

      <Footer />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
