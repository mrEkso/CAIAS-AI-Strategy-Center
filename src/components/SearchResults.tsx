import React from 'react';
import { Card, CardContent } from "./ui/card.js";
import { Badge } from "./ui/badge.js";
import { Megaphone, Calendar, Database, User, FileText, Users } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext.js";

interface SearchResult {
  id: string;
  type: 'announcement' | 'publication' | 'dataset' | 'event' | 'expert' ;
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
  onResultClick: (result: SearchResult) => void;
  onClose: () => void;
}

export function SearchResults({ searchQuery, results, onResultClick, onClose }: SearchResultsProps) {
  const { t } = useLanguage();

  if (!searchQuery.trim()) return null;

  return (
    <div className="absolute mt-2 top-full left-1/2 transform -translate-x-1/2 w-[130%] right-0 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
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
            <Card
              key={result.id}
              className="mb-2 cursor-pointer hover:shadow-lg transition-shadow border-0 shadow-md"
              onClick={() => onResultClick(result)}
            >
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
          ))}
        </div>
      )}
    </div>
  );
}