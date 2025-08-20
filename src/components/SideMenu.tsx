import React from "react";
import { Button } from "./ui/button.js";
import { Home, Users, BookOpen, FileText, Database, Mic, Calendar, Handshake, Phone, Info } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";

interface SideMenuProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function SideMenu({ currentPage, onNavigate }: SideMenuProps) {
  const { t } = useLanguage();

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-1">
        {/* Main Pages */}
        <Button
          variant="ghost"
          className={`w-full justify-start text-left h-11 px-4 ${
            currentPage === "home"
              ? "bg-white text-gray-900 font-medium rounded-full"
              : "text-white/90 hover:text-gray-900 hover:bg-gradient-to-r from-white to-transparent rounded-full" // text-white/90 hover:text-gray-900 hover:bg-white/80 rounded-full
          }`}
          onClick={() => handleNavigation("home")}
        >
          <Home className="w-4 h-4 mr-3" />
          {t("header.nav.home")}
        </Button>

        <Button
          variant="ghost"
          className={`w-full justify-start text-left h-11 px-4 ${
            currentPage === "experts"
              ? "bg-white text-gray-900 font-medium rounded-full"
              : "text-white/90 hover:text-gray-900 hover:bg-gradient-to-r from-white to-transparent rounded-full"
          }`}
          onClick={() => handleNavigation("experts")}
        >
          <Users className="w-4 h-4 mr-3" />
          {t("header.bottomNav.experts")}
        </Button>

        <Button
          variant="ghost"
          className={`w-full justify-start text-left h-11 px-4 ${
            currentPage === "researchTopics"
              ? "bg-white text-gray-900 font-medium rounded-full"
              : "text-white/90 hover:text-gray-900 hover:bg-gradient-to-r from-white to-transparent rounded-full"
          }`}
          onClick={() => handleNavigation("researchTopics")}
        >
          <BookOpen className="w-4 h-4 mr-3" />
          {t("header.bottomNav.researchTopics")}
        </Button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Additional Navigation */}
      <div className="space-y-1">
        <Button
          variant="ghost"
          className={`w-full justify-start text-left h-11 px-4 ${
            currentPage === "publications"
              ? "bg-white text-gray-900 font-medium rounded-full"
              : "text-white/90 hover:text-gray-900 hover:bg-gradient-to-r from-white to-transparent rounded-full"
          }`}
          onClick={() => handleNavigation("publications")}
        >
          <FileText className="w-4 h-4 mr-3" />
          {t("header.bottomNav.publications")}
        </Button>

        <Button
          variant="ghost"
          className={`w-full justify-start text-left h-11 px-4 ${
            currentPage === "datasets"
              ? "bg-white text-gray-900 font-medium rounded-full"
              : "text-white/90 hover:text-gray-900 hover:bg-gradient-to-r from-white to-transparent rounded-full"
          }`}
          onClick={() => handleNavigation("datasets")}
        >
          <Database className="w-4 h-4 mr-3" />
          {t("header.bottomNav.datasets")}
        </Button>

        <Button
          variant="ghost"
          className={`w-full justify-start text-left h-11 px-4 ${
            currentPage === "podcasts"
              ? "bg-white text-gray-900 font-medium rounded-full"
              : "text-white/90 hover:text-gray-900 hover:bg-gradient-to-r from-white to-transparent rounded-full"
          }`}
          onClick={() => handleNavigation("podcasts")}
        >
          <Mic className="w-4 h-4 mr-3" />
          {t("header.bottomNav.podcasts")}
        </Button>

        <Button
          variant="ghost"
          className={`w-full justify-start text-left h-11 px-4 ${
            currentPage === "events"
              ? "bg-white text-gray-900 font-medium rounded-full"
              : "text-white/90 hover:text-gray-900 hover:bg-gradient-to-r from-white to-transparent rounded-full"
          }`}
          onClick={() => handleNavigation("events")}
        >
          <Calendar className="w-4 h-4 mr-3" />
          {t("header.bottomNav.events")}
        </Button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Other Navigation */}
      <div className="space-y-1">
        <Button
          variant="ghost"
          className={`w-full justify-start text-left h-11 px-4 ${
            currentPage === "partnership"
              ? "bg-white text-gray-900 font-medium rounded-full"
              : "text-white/90 hover:text-gray-900 hover:bg-gradient-to-r from-white to-transparent rounded-full"
          }`}
          onClick={() => handleNavigation("partnership")}
        >
          <Handshake className="w-4 h-4 mr-3" />
          {t("header.topNav.partnership")}
        </Button>

        <Button
          variant="ghost"
          className={`w-full justify-start text-left h-11 px-4 ${
            currentPage === "contacts"
              ? "bg-white text-gray-900 font-medium rounded-full"
              : "text-white/90 hover:text-gray-900 hover:bg-gradient-to-r from-white to-transparent rounded-full"
          }`}
          onClick={() => handleNavigation("contacts")}
        >
          <Phone className="w-4 h-4 mr-3" />
          {t("header.topNav.contacts")}
        </Button>

        <Button
          variant="ghost"
          className={`w-full justify-start text-left h-11 px-4 ${
            currentPage === "about"
              ? "bg-white text-gray-900 font-medium rounded-full"
              : "text-white/90 hover:text-gray-900 hover:bg-gradient-to-r from-white to-transparent rounded-full"
          }`}
          onClick={() => handleNavigation("about")}
        >
          <Info className="w-4 h-4 mr-3" />
          {t("header.topNav.about")}
        </Button>
      </div>
    </div>
  );
}
