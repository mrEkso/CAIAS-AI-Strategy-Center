import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button.js";
import { Globe, Search, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "./ui/sheet.js";
import { useLanguage } from "../contexts/LanguageContext.js";
import { HeaderContent } from "./data/HeaderContent.js";
import { SideMenu } from "./SideMenu.js";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage = "home", onNavigate }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  const pageData = HeaderContent[currentPage] ?? HeaderContent.home ?? {
    background: "",
    height: ""
  };

  const handleNavigation = (page: string) => {
    setIsMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(language === "uk" ? "en" : "uk");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="relative w-full overflow-hidden"
      style={{ height: pageData.height || "560px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={pageData.background}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Header Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pt-12">
        <div className="flex items-start justify-between h-full">
          {/* Logo Section */}
          <div
            className="flex items-center space-x-6 cursor-pointer group flex-shrink-0"
            onClick={() => handleNavigation("home")}
          >
            {/* University Logo */}
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-gray-900 group-hover:bg-gray-100 transition-colors shadow-lg">
              <img
                src="/images/L-100x100.png"
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Title - Hidden on mobile */}
            <div className="hidden sm:block mt-2">
              <h1 className="text-white text-xl font-medium leading-tight mb-2">
                {t("header.title.line1")}
                <br />
                {t("header.title.line2")}
                <br />
                {t("header.title.line3")}
              </h1>
              <p className="text-white/80 text-base">
                {t("header.subtitle")}
              </p>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="hidden xl:flex flex-col items-end justify-center space-y-6 flex-1 ml-8">
            {/* Top Navigation Row */}
            <div className="flex items-center space-x-8">
              <button
                onClick={() => handleNavigation("partnership")}
                className={`text-[1.05rem] font-regular transition-colors px-3 py-2 rounded-full ${
                  currentPage === "partnership"
                    ? "text-white bg-white/20 shadow-full"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {t("header.topNav.partnership")}
              </button>
              <button
                onClick={() => handleNavigation("contacts")}
                className={`text-[1.05rem] font-regular transition-colors px-3 py-2 rounded-full ${
                  currentPage === "contacts"
                    ? "text-white bg-white/20 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {t("header.topNav.contacts")}
              </button>
              <button
                onClick={() => handleNavigation("about")}
                className={`text-[1.05rem] font-regular transition-colors px-3 py-2 rounded-full ${
                  currentPage === "about"
                    ? "text-white bg-white/20 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {t("header.topNav.about")}
              </button>

              {/* Language Toggle and Search */}
              <div className="flex items-center space-x-3 ml-6">
                <Button
                  onClick={toggleLanguage}
                  variant="ghost"
                  size="sm"
                  className="text-white/90 hover:text-white hover:bg-white/10 text-[1.05rem] h-10 px-4 rounded-full"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  {language === "uk" ? "EN" : "УК"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/90 hover:text-white hover:bg-white/10 h-10 w-10 p-0 rounded-full"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Bottom Navigation Row */}
            <div className="flex items-center space-x-8">
              <button
                onClick={() => handleNavigation("researchTopics")}
                className={`text-[1.05rem] font-bold transition-colors px-3 py-2 rounded-full ${
                  currentPage === "researchTopics"
                    ? "text-white bg-white/20 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {t("header.bottomNav.researchTopics")}
              </button>
              <button
                onClick={() => handleNavigation("publications")}
                className={`text-[1.05rem] font-bold transition-colors px-3 py-2 rounded-full ${
                  currentPage === "publications"
                    ? "text-white bg-white/20 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {t("header.bottomNav.publications")}
              </button>
              <button
                onClick={() => handleNavigation("datasets")}
                className={`text-[1.05rem] font-bold transition-colors px-3 py-2 rounded-full ${
                  currentPage === "datasets"
                    ? "text-white bg-white/20 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {t("header.bottomNav.datasets")}
              </button>
              <button
                onClick={() => handleNavigation("podcasts")}
                className={`text-[1.05rem] font-bold transition-colors px-3 py-2 rounded-full ${
                  currentPage === "podcasts"
                    ? "text-white bg-white/20 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {t("header.bottomNav.podcasts")}
              </button>
              <button
                onClick={() => handleNavigation("events")}
                className={`text-[1.05rem] font-bold transition-colors px-3 py-2 rounded-full ${
                  currentPage === "events"
                    ? "text-white bg-white/20 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {t("header.bottomNav.events")}
              </button>
              <button
                onClick={() => handleNavigation("experts")}
                className={`text-[1.05rem] font-bold transition-colors px-3 py-2 rounded-full ${
                  currentPage === "experts"
                    ? "text-white bg-white/20 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {t("header.bottomNav.experts")}
              </button>
            </div>
          </div>

          {/* Mobile Menu with SideMenu */}
            <div className="xl:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="2xl"
                    className="text-white hover:bg-white/10 p-10 h-8 w-10 rounded-full"
                  >
                    <Menu className="h-8 w-10" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className={`
                    w-80 sm:w-96 bg-gray-900 text-white
                    ${isMenuOpen ? 'slide-in' : 'slide-out'}
                  `}
                  >

                  <SheetHeader className="pb-2">
                    <div>
                      <SheetTitle className="pb-2 text-left text-2xl font-medium text-white/90">
                        {t('header.nav.menu')}
                      </SheetTitle>
                      <SheetDescription className="text-left text-base text-white/80">
                        {t('header.nav.menuDescription')}
                      </SheetDescription>
                    </div>
                  </SheetHeader>

                  <div className="flex-1 overflow-y-auto">
                    <SideMenu currentPage={currentPage} onNavigate={handleNavigation} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>


          {/* Bottom text section */}
            {(() => {
              // Отримуємо тексти: або переклад, або pageData, або undefined
              const bottomText1 = t(`header.bottomText1.${currentPage}`) !== `header.bottomText1.${currentPage}`
                ? t(`header.bottomText1.${currentPage}`)
                : pageData.bottomText1;

              const bottomText2 = t(`header.bottomText2.${currentPage}`) !== `header.bottomText2.${currentPage}`
                ? t(`header.bottomText2.${currentPage}`)
                : pageData.bottomText2;

              // Якщо немає жодного тексту, нічого не рендеримо
              if (!bottomText1 && !bottomText2) return null;

              return (
                <div className="absolute bottom-12 text-left space-y-4">
                  {bottomText1 && (
                    <p className="text-white text-4.75xl font-bold max-w-xl leading-snug">
                      {bottomText1}
                    </p>
                  )}
                  {bottomText2 && (
                    <p className="text-white text-xl font-medium max-w-xl leading-normal">
                      {bottomText2}
                    </p>
                  )}
                </div>
              );
            })()}
          </div>

      {/* Mobile Navigation - Full width dropdown */}
      <div className="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm border-t border-white/20 hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Mobile Title */}
          <div className="md:hidden mb-6">
            <h1 className="text-white text-xl font-medium leading-tight mb-2">
              {t("header.title")}
            </h1>
            <p className="text-white/90 text-base">{t("header.subtitle")}</p>
          </div>

          {/* Top navigation items */}
          <div className="space-y-3 mb-6">
            <button className="block w-full text-left text-white/90 hover:text-white text-base py-3 px-10 rounded-full hover:bg-white/10 transition-colors">
              {t("header.topNav.partnership")}
            </button>
            <button className="block w-full text-left text-white/90 hover:text-white text-base py-3 px-4 rounded-lg hover:bg-white/10 transition-colors">
              {t("header.topNav.contacts")}
            </button>
            <button className="block w-full text-left text-white/90 hover:text-white text-base py-3 px-4 rounded-lg hover:bg-white/10 transition-colors">
              {t("header.topNav.about")}
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-6"></div>

          {/* Bottom navigation items */}
          <div className="space-y-3">
            <button className="block w-full text-left text-white/90 hover:text-white text-base py-3 px-4 rounded-lg hover:bg-white/10 transition-colors">
              {t("header.bottomNav.researchTopics")}
            </button>
            <button
              onClick={() => handleNavigation("publications")}
              className={`block w-full text-left text-base py-3 px-4 rounded-lg transition-colors ${
                currentPage === "publications"
                  ? "text-white font-medium bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t("header.bottomNav.publications")}
            </button>
            <button
              onClick={() => handleNavigation("datasets")}
              className={`block w-full text-left text-base py-3 px-4 rounded-lg transition-colors ${
                currentPage === "datasets"
                  ? "text-white font-medium bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t("header.bottomNav.datasets")}
            </button>
            <button
              onClick={() => handleNavigation("podcasts")}
              className={`block w-full text-left text-base py-3 px-4 rounded-lg transition-colors ${
                currentPage === "podcasts"
                  ? "text-white font-medium bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t("header.bottomNav.podcasts")}
            </button>
            <button
              onClick={() => handleNavigation("events")}
              className={`block w-full text-left text-base py-3 px-4 rounded-lg transition-colors ${
                currentPage === "events"
                  ? "text-white font-medium bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t("header.bottomNav.events")}
            </button>
            <button
              onClick={() => handleNavigation("experts")}
              className={`block w-full text-left text-base py-3 px-4 rounded-lg transition-colors ${
                currentPage === "experts"
                  ? "text-white font-medium bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t("header.bottomNav.experts")}
            </button>
          </div>

          {/* Language toggle in mobile */}
          <div className="border-t border-white/20 mt-6 pt-6">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-white/90 hover:text-white hover:bg-white/10 text-base py-3 px-4 rounded-full"
            >
              <Globe className="w-5 h-5 mr-3" />
              {language === "uk"
                ? "Switch to English"
                : "Перемкнути на українську"}
            </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
