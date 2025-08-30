import React from "react";
import { Home, Users, BookOpen, FileText, Database, Mic, Calendar, Handshake, Phone, Info } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";
import { Link, useLocation } from "react-router-dom";

interface SideMenuProps {
  onNavigate: (page: string) => void;
}

export function SideMenu({ onNavigate }: SideMenuProps) {
  const { t } = useLanguage();
  const location = useLocation();

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // Меню розбите на секції
  const sections = [
    [
      { label: t("header.nav.home"), icon: <Home className="w-4 h-4 mr-3" />, to: "/", page: "home" },
      { label: t("header.bottomNav.experts"), icon: <Users className="w-4 h-4 mr-3" />, to: "/experts", page: "experts" },
      { label: t("header.bottomNav.researchTopics"), icon: <BookOpen className="w-4 h-4 mr-3" />, to: "/research-topics", page: "researchTopics" },
    ],
    [
      { label: t("header.bottomNav.publications"), icon: <FileText className="w-4 h-4 mr-3" />, to: "/publications", page: "publications" },
      { label: t("header.bottomNav.datasets"), icon: <Database className="w-4 h-4 mr-3" />, to: "/datasets", page: "datasets" },
      { label: t("header.bottomNav.podcasts"), icon: <Mic className="w-4 h-4 mr-3" />, to: "/podcasts", page: "podcasts" },
      { label: t("header.bottomNav.events"), icon: <Calendar className="w-4 h-4 mr-3" />, to: "/events", page: "events" },
    ],
    [
      { label: t("header.topNav.partnership"), icon: <Handshake className="w-4 h-4 mr-3" />, to: "/partnership", page: "partnership" },
      { label: t("header.topNav.contacts"), icon: <Phone className="w-4 h-4 mr-3" />, to: "/contacts", page: "contacts" },
      { label: t("header.topNav.about"), icon: <Info className="w-4 h-4 mr-3" />, to: "/about-us", page: "about" },
    ]
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      {sections.map((section, secIdx) => (
        <div key={secIdx} className="space-y-1">
          {section.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              onClick={() => handleNavigation(item.page)}
              className={`w-full flex items-center justify-start text-left text-[15px] h-11 px-4 rounded-full ${
                location.pathname === item.to // currentPage === item.page
                  ? "bg-white text-gray-900 font-medium"
                  : "text-white/90 hover:text-gray-900 hover:bg-gradient-to-r from-white to-transparent"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}

          {/* Divider після секції, крім останньої */}
          {secIdx < sections.length - 1 && (
            <div className="border-t border-gray-300 pb-2 my-4"></div>
          )}
        </div>
      ))}
    </div>
  );
}
