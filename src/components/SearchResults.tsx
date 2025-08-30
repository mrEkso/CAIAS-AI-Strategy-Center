import React from 'react';
import { Card, CardContent } from "./ui/card.js";
import { Badge } from "./ui/badge.js";
import { Megaphone, Calendar, Database, User, FileText, Users } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext.js";
import { Link } from "react-router-dom";

interface SearchResult {
  id: string;
  type: 'announcement' | 'publication' | 'dataset' | 'event' | 'expert' | 'team';
  title: string;
  description?: string;
  category?: string;
  author?: string;
  date?: string;
  tags?: string[];
  image?: string;
}

interface SearchResultsProps {
  searchQuery: string;
  results: SearchResult[];
  onClose: () => void;
}

export function SearchResults({ searchQuery, results, onClose }: SearchResultsProps) {
  const { t } = useLanguage();

  if (!searchQuery.trim()) return null;

  // Мапа для побудови URL
  const getRoute = (type: SearchResult['type'], id: string) => {
    switch (type) {
      case 'announcement':
        return `/announcements/${id}`;
      case 'publication':
        return `/publications/${id}`;
      case 'dataset':
        return `/datasets/${id}`;
      case 'event':
        return `/events/${id}`;
      case 'expert':
        return `/experts/${id}`;
      case 'team':
        return `/about-us/team/${id}`;
      default:
        return `/`; // fallback
    }
  };

  return (
    <div className="
      fixed top-20 inset-0 w-full h-[calc(100vh-5rem)] p-4 z-50 bg-white 
      sm:absolute sm:inset-auto sm:mt-2 sm:top-full sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-[120%] sm:h-auto sm:max-h-96 sm:p-0 sm:rounded-lg
      shadow-lg border border-gray-200 overflow-y-auto
    "> 
    {/* "absolute mt-2 top-full left-1/2 transform -translate-x-1/2 w-[120%] right-0 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50"> */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">
            {t('search.results')} "{searchQuery}" ({results.length})
          </h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-400 text-sm"
          >
            {t('search.close')}
          </button>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          {t('search.noResults')}
        </div>
      ) : (
        <div className="p-2">
          {results.map((result) => (
            <Link
              key={result.id}
              to={getRoute(result.type, result.id)}
              className="block mb-2"
              onClick={onClose} // закривати пошук після кліку
            >
              <Card className="cursor-pointer hover:shadow-lg transition-shadow border-0 shadow-md h-full">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    {result.image && (
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-16 h-12 object-cover rounded flex-shrink-0"
                      />
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        {result.type === 'announcement' && <Megaphone className="w-4 h-4 text-blue-500" />}
                        {result.type === 'publication' && <FileText className="w-4 h-4 text-green-500" />}
                        {result.type === 'dataset' && <Database className="w-4 h-4 text-purple-500" />}
                        {result.type === 'event' && <Calendar className="w-4 h-4 text-pink-500" />}
                        {result.type === 'expert' && <Users className="w-4 h-4 text-orange-500" />}
                        {result.type === 'team' && <User className="w-4 h-4 text-yellow-500" />}

                        {result.category && (
                          <Badge variant="secondary" className="text-xs bg-gray-100 rounded-full">
                            {result.category}
                          </Badge>
                        )}
                      </div>

                      <h4 className="font-medium text-gray-900 truncate mb-1">
                        {result.title}
                      </h4>

                      {result.description && (
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                          {result.description}
                        </p>
                      )}

                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        {result.author && (
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{result.author}</span>
                          </div>
                        )}

                        {result.date && (
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{result.date}</span>
                          </div>
                        )}
                      </div>

                      {result.tags && result.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {result.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {result.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{result.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
