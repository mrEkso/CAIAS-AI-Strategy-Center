// Головна подія

export const featuredEventsArticle = (isUk: boolean) => ({
  id: "featured-event",
  title: isUk
    ? "Щорічна конференція з ШІ | 15-16 листопада 2024"
    : "Annual AI Conference | November 15-16, 2024",
  description: isUk
    ? "Цьогорічна щорічна конференція зосереджена на 25-річчі досліджень штучного інтелекту та його впливі на українську економіку"
    : "This year's annual conference focuses on 25 years of artificial intelligence research and its impact on Ukrainian economy",
  category: isUk 
    ? "Щорічні заходи" 
    : "Annual Events",
  date: "2024.11.15",
  readTime: "8",
  image: "https://images.unsplash.com/photo-1589320843284-4b70884083a6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  author: isUk 
    ? "Д-р Андрій Мельник" 
    : "Dr. Andriy Melnyk",
  tags: isUk
    ? ["штучний інтелект", "конференція", "дослідження"]
    : ["artificial intelligence", "conference", "research"]
});

// Останні події

export const EventsArticles = (isUk: boolean) => [
  {
    id: "event-1",
    title: isUk
      ? "ШІ в сільському господарстві: рішення для розумного фермерства"
      : "AI in Agriculture: Smart Farming Solutions",
    description: isUk
      ? "Нові інструменти на основі ШІ допомагають українським фермерам оптимізувати врожайність та зменшити вплив на довкілля"
      : "New AI-powered tools help Ukrainian farmers optimize crop yields and reduce environmental impact",
    category: isUk 
      ? "Застосування" 
      : "Applications",
    date: "2024.11.02",
    readTime: "4",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    author: isUk 
      ? "Проф. Олександр Петренко" 
      : "Prof. Oleksandr Petrenko",
    tags: isUk
      ? ["агротехнології", "штучний інтелект", "довкілля"]
      : ["agriculture", "artificial intelligence", "environment"]
  },
  {
    id: "event-2",
    title: isUk
      ? "Воркшоп з машинного навчання для студентів"
      : "Machine Learning Workshop for Students",
    description: isUk
      ? "Безкоштовна освітня програма знайомить молодь з основами штучного інтелекту"
      : "Free educational program introduces young minds to the fundamentals of artificial intelligence",
    category: isUk 
      ? "Освіта" 
      : "Education",
    date: "2024.10.28",
    readTime: "3",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    author: isUk 
      ? "Юлія Бондаренко" 
      : "Yulia Bondarenko",
    tags: isUk
      ? ["освіта", "машинне навчання", "молодь"]
      : ["education", "machine learning", "youth"]
  },
  {
    id: "event-3",
    title: isUk
      ? "Партнерство з європейськими центрами досліджень ШІ"
      : "Partnership with European AI Research Centers",
    description: isUk
      ? "Нова співпраця відкриває можливості для спільних дослідницьких проєктів та обміну знаннями"
      : "New collaboration opens opportunities for joint research projects and knowledge exchange",
    category: isUk 
      ? "Партнерства" 
      : "Partnerships",
    date: "2024.10.25",
    readTime: "5",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
    author: isUk 
      ? "Д-р Андрій Мельник" 
      : "Dr. Andriy Melnyk",
    tags: isUk
      ? ["співпраця", "Європа", "дослідження"]
      : ["collaboration", "Europe", "research"]
  }
];
