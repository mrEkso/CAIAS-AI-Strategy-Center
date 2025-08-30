import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import React, { useEffect } from 'react';
import { useLanguage } from "../contexts/LanguageContext.js";
import { Link, useLocation } from "react-router-dom";


export function Footer() {
  const { language, t } = useLanguage();
  const isUk = language === "uk";
  const location = useLocation();

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

  const navLinks = [
    { key: "home", label: t('header.nav.home'), path: "/" },
    { key: "experts", label: t('header.nav.experts'), path: "/experts" },
    { key: "publications", label: t('header.nav.publications'), path: "/publications" },
    { key: "datasets", label: t('header.nav.datasets'), path: "/datasets" },
    { key: "events", label: t('header.nav.events'), path: "/events" },
    { key: "contacts", label: t('header.nav.contacts'), path: "/contacts" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">

            {/* Footer Logo + Title */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group mb-6"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault(); // зупиняємо стандартну поведінку, бо вже на HomePage 
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              >
              
              {/* Logo */}
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors shadow-lg">
                <img
                  src="/images/Logos/L-100x100.png"
                  alt="Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Text: Title + Subtitle */}
              <div className="text-left font-sans">
                <h1 className={`text-white text-sm font-medium whitespace-pre-line ${isUk ? "leading-extra-tight" : "leading-super-tight"}`}>
                  {t('footer.title')}
                </h1>
                <p className={`text-gray-300 text-xs whitespace-pre-line ${isUk ? "leading-extra-tight" : "leading-super-tight"} max-w-md`}>
                  {t('footer.subtitle')}
                </p>
              </div>
            </Link>

            {/* Contact info */}
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3" /> {t('footer.address')}
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" /> {t('footer.phone')}
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" /> {t('footer.email')}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className={`text-sm-base transition-colors hover:text-white block ${
                      location.pathname === link.path ? "text-white font-medium" : "text-gray-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-medium mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.caption')}
          </p>
        </div>
      </div>
    </footer>
  );
}
