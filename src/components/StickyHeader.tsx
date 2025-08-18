import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button.js";
import { Input } from "./ui/input.js";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "./ui/sheet.js";
import { Globe, Search, Menu, X, Home, Users, Newspaper, BookOpen, Database, Calendar, MessageCircle, Phone, FileText, Handshake, Info, Mic } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";
import { SideMenu } from "./SideMenu.js";

interface StickyHeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function StickyHeader({ currentPage = "home", onNavigate }: StickyHeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky header when scrolled down more than 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    setIsMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'uk' ? 'en' : 'uk');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Here you would implement the actual search functionality
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo and Title */}
            <div 
              className="flex items-center space-x-4 cursor-pointer group flex-shrink-0" 
              onClick={() => handleNavigation("home")}
            >
              {/* University Logo */}
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-white group-hover:bg-gray-100 transition-colors shadow-lg">
              <img
                src="/images/L-100x100.png"
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
            </div>

              {/* Title - Hidden on mobile */}
              <div className="hidden lg:block">
                <h1 className="text-white text-lg font-medium leading-tight">
                  {t('stickyHeader.title')}
                </h1>
              </div>
            </div>

            {/* Center - Search */}
            <div className="flex-1 max-w-md mx-4">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="text"
                    placeholder={t('stickyHeader.search.placeholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-10 h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    autoFocus
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </form>
              ) : (
                <Button
                  variant="outline"
                  className="w-full justify-start text-gray-500 border-gray-300 hover:border-gray-400 h-10"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="w-4 h-4 mr-2" />
                  {t('stickyHeader.search.placeholder')}
                </Button>
              )}
            </div>

            {/* Right side - Language switcher and Menu */}
            <div className="flex items-center space-x-2">
              <Button 
                onClick={toggleLanguage} 
                variant="ghost" 
                size="sm" 
                className="text-white/90 hover:text-gray-900 hover:bg-gray-100 text-sm h-9 px-3 rounded-full"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language === 'uk' ? 'EN' : 'УК'}
              </Button>
              
              <div className="w-px h-6 bg-gray-300"></div>

              {/* Burger Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>

                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="flex items-center justify-center text-white/90 hover:text-gray-900 hover:bg-gray-100 h-12 w-12 p-0 rounded-full"
                  >
                    <Menu className="w-8 h-8" />
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
             </div>
           </div>
        </div>
      </div>
  );
}