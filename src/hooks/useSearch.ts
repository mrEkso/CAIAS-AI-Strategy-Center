import { useState, useMemo } from 'react';
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

export function useSearch() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data, API or database
  const searchData = useMemo((): SearchResult[] => {
    const isUk = language === "uk";
    
    return [
      // News articles
      {
        id: "featured",
        type: "publication",
        title: isUk 
          ? "Щорічна конференція з ШІ | 15-16 листопада 2024"
          : "Annual AI Conference | November 15-16, 2024",
        description: isUk
          ? "Приєднуйтесь до нас на щорічній конференції з штучного інтелекту, де провідні експерти обговорюватимуть останні досягнення та тенденції в галузі ШІ."
          : "Join us for the annual AI conference where leading experts will discuss the latest advances and trends in artificial intelligence.",
        category: isUk ? "Подія" : "Event",
        author: isUk ? "Команда організаторів" : "Organizing Team",
        date: "2024-11-15",
        tags: isUk 
          ? ["конференція", "штучний інтелект", "дослідження", "інновації"]
          : ["conference", "artificial intelligence", "research", "innovation"],
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop"
      },
      {
        id: "article-1",
        type: "publication",
        title: isUk
          ? "Новий центр досліджень ШІ відкривається в Києві"
          : "New AI Research Center Opens in Kyiv",
        description: isUk
          ? "Центр зосередиться на розробці рішень ШІ для сфер охорони здоров'я та освіти"
          : "The center will focus on developing AI solutions for healthcare and education sectors",
        category: isUk ? "Дослідження" : "Research",
        author: isUk ? "Д-р Марина Коваленко" : "Dr. Marina Kovalenko",
        date: "2024-11-10",
        tags: isUk 
          ? ["дослідження", "охорона здоров'я", "освіта", "Київ", "інновації"]
          : ["research", "healthcare", "education", "Kyiv", "innovation"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
      },
      {
        id: "article-2",
        type: "publication",
        title: isUk
          ? "Україна приєднується до глобальної ініціативи з етики ШІ"
          : "Ukraine Joins Global AI Ethics Initiative",
        description: isUk
          ? "Нове міжнародне партнерство має на меті встановити етичні керівні принципи для розвитку ШІ"
          : "New international partnership aims to establish ethical guidelines for AI development",
        category: isUk ? "Етика" : "Ethics",
        author: isUk ? "Катерина Шевченко" : "Kateryna Shevchenko",
        date: "2024-11-08",
        tags: isUk 
          ? ["етика", "міжнародне співробітництво", "стандарти", "регулювання"]
          : ["ethics", "international cooperation", "standards", "regulation"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
      },

      // Announcements
      {
        id: "announcement-1",
        type: "announcement",
        title: isUk 
          ? "Трансформація європейської політики ШІ: нова рамка для інновацій та етики"
          : "Transforming European AI Policy: A New Framework for Innovation and Ethics",
        description: isUk
          ? "Глибокий аналіз нових європейських рамок політики ШІ та їх вплив на інноваційний ландшафт"
          : "An in-depth analysis of new European AI policy frameworks and their impact on the innovation landscape",
        category: isUk ? "Книга" : "Book",
        author: isUk 
          ? "Дмитро Колесніков, Анна Петрик, Сергій Федоров та Марія Ткаченко"
          : "Dmytro Kolesnikov, Anna Petryk, Sergiy Fedorov and Maria Tkachenko",
        date: "2025-07-10",
        tags: ["eu budget", "ai policy", "innovation"],
        image: "https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYm9vayUyMHBvbGljeSUyMHJlc2VhcmNofGVufDF8fHx8MTc1NDY4ODE0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: "announcement-2",
        type: "announcement",
        title: isUk
          ? "Моделі управління ШІ на ринках, що розвиваються"
          : "AI governance models across emerging markets",
        description: isUk
          ? " Аналіз підходів до управління штучним інтелектом в країнах, що розвиваються"
          : "Analysis of different approaches to artificial intelligence governance in developing countries",
        category: isUk ? "Політична записка" : "Policy Brief",
        author: isUk ? "Олександр Савченко" : "Oleksandr Savchenko",
        date: "2025-08-07",
        tags: ["governance", "emerging markets", "ai regulation"],
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop"
      },
      // Datasets
      {
        id: "dataset-1",
        type: "dataset",
        title: isUk
          ? "ШІ в сільському господарстві: рішення для розумного фермерства"
          : "AI in Agriculture: Smart Farming Solutions",
        description: isUk
          ? " Аналіз підходів до управління штучним інтелектом в країнах, що розвиваються"
          : "Analysis of different approaches to artificial intelligence governance in developing countries",
        category: isUk ? "Політична записка" : "Policy Brief",
        author: isUk ? "Олександр Савченко" : "Oleksandr Savchenko",
        date: "2025-08-07",
        tags: ["governance", "emerging markets", "ai regulation"],
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop"
      },
      // Events
      {
        id: "event-1",
        type: "event",
        title: isUk
          ? "Подія"
          : "AI in Agriculture: Smart Farming Solutions",
        description: isUk
          ? " Аналіз підходів до управління штучним інтелектом в країнах, що розвиваються"
          : "Analysis of different approaches to artificial intelligence governance in developing countries",
        category: isUk ? "Політична записка" : "Policy Brief",
        author: isUk ? "Олександр Савченко" : "Oleksandr Savchenko",
        date: "2025-08-07",
        tags: ["governance", "emerging markets", "ai regulation"],
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop"
      },
      // Experts
      {
        id: "petrenko",
        type: "expert",
        title: isUk ? "Проф. Олександр Петренко" : "Prof. Oleksandr Petrenko",
        description: isUk 
          ? "Професор кафедри штучного інтелекту, спеціаліст з машинного навчання та нейронних мереж"
          : "Professor of Artificial Intelligence, specialist in machine learning and neural networks",
        category: isUk ? "Експерт" : "Expert",
        image: "https://images.unsplash.com/photo-1494790108755-2616c00c2f92?w=400&h=400&fit=crop"
      },
      {
        id: "kovalenko",
        type: "expert",
        title: isUk ? "Д-р Марина Коваленко" : "Dr. Marina Kovalenko",
        description: isUk 
          ? "Директор центру, спеціаліст з етики ШІ та політики в сфері технологій"
          : "Center Director, specialist in AI ethics and technology policy",
        category: isUk ? "Експерт" : "Expert",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      },
      {
        id: "expert-3",
        type: "expert",
        title: isUk ? "Д-р Марія Шевченко" : "Dr. Maria Shevchenko",
        description: isUk 
          ? "Старший науковий співробітник, спеціаліст з комп'ютерного зору та розпізнавання образів"
          : "Senior Research Fellow, specialist in computer vision and pattern recognition",
        category: isUk ? "Експерт" : "Expert",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
      }
    ];
  }, [t]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const lowercaseSearchQuery = searchQuery.toLowerCase();
    
    return searchData.filter(item => {
      const searchString = `${item.title} ${item.description || ''} ${item.author || ''} ${item.category || ''} ${item.tags?.join(' ') || ''}`.toLowerCase();
      return searchString.includes(lowercaseSearchQuery);
    }).slice(0, 10); // Limit to 10 results
  }, [searchQuery, searchData]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    searchData
  };
}