import { useState } from "react";
import { Header } from "./components/Header.js";
import { HomePage } from "./components/HomePage.js";
import { ExpertsPage } from "./components/ExpertsPage.js";
import { Footer } from "./components/Footer.js";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "experts":
        return <ExpertsPage />;
      case "home":
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigation}
      />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
}