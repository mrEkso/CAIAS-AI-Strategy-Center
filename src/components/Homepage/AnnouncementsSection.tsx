import { Badge } from "../ui/badge.js";
import { Button } from "../ui/button.js";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext.js";

interface AnnouncementsSectionProps {
  onArticleClick?: ((articleId: string) => void) | undefined;
}

export function AnnouncementsSection({ onArticleClick }: AnnouncementsSectionProps) {
  const { t } = useLanguage();

  const announcements = [
    {
      id: "featured-article",
      title: t('announcements.title').includes('Announcements') 
        ? "Transforming European AI Policy: A New Framework for Innovation and Ethics"
        : "Трансформація європейської політики ШІ: нова рамка для інновацій та етики",
      category: t('announcements.title').includes('Announcements') ? "Book" : "Книга",
      authors: t('announcements.title').includes('Announcements') 
        ? "Dmytro Kolesnikov, Anna Petryk, Sergiy Fedorov and Maria Tkachenko"
        : "Дмитро Колесніков, Анна Петрик, Сергій Федоров та Марія Ткаченко",
      date: t('announcements.title').includes('Announcements') 
        ? "10 July 2025"
        : "10 липня 2025",
      tags: ["eu budget", "ai policy", "innovation"],
      image: "https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?w=1080",
      size: "large"
    },
    {
      id: "article-1",
      title: t('announcements.title').includes('Announcements')
        ? "AI governance models across emerging markets"
        : "Моделі управління ШІ на ринках, що розвиваються",
      category: t('announcements.title').includes('Announcements') ? "Policy Brief" : "Політична записка",
      authors: t('announcements.title').includes('Announcements') 
        ? "Oleksandr Savchenko"
        : "Олександр Савченко",
      date: t('announcements.title').includes('Announcements') 
        ? "07 August 2025"
        : "07 серпня 2025",
      tags: ["governance", "emerging markets", "ai regulation"],
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: "article-2",
      title: t('announcements.title').includes('Announcements')
        ? "The Ukrainian AI ecosystem: building sustainable innovation networks"
        : "Українська екосистема ШІ: побудова сталих інноваційних мереж",
      category: t('announcements.title').includes('Announcements') ? "Working paper" : "Робоча стаття",
      authors: t('announcements.title').includes('Announcements') 
        ? "Viktoriia Levchenko and Taras Kovalenko"
        : "Вікторія Левченко та Тарас Коваленко",
      date: t('announcements.title').includes('Announcements') 
        ? "18 July 2025"
        : "18 липня 2025",
      tags: ["ukraine", "innovation", "ecosystem"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: "article-3",
      title: t('announcements.title').includes('Announcements')
        ? "Machine learning applications in sustainable development: progress and challenges"
        : "Застосування машинного навчання у сталому розвитку: прогрес та виклики",
      category: t('announcements.title').includes('Announcements') ? "Analysis" : "Аналіз",
      authors: t('announcements.title').includes('Announcements') 
        ? "Ivan Petrenko"
        : "Іван Петренко",
      date: t('announcements.title').includes('Announcements') 
        ? "25 July 2025"
        : "25 липня 2025",
      tags: ["machine learning", "sustainability", "development"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: "article-4",
      title: t('announcements.title').includes('Announcements')
        ? "Digital transformation strategies for public sector AI implementation"
        : "Стратегії цифрової трансформації для впровадження ШІ в державному секторі",
      category: t('announcements.title').includes('Announcements') ? "Report" : "Звіт",
      authors: t('announcements.title').includes('Announcements') 
        ? "Oksana Marchenko and Andriy Shevchenko"
        : "Оксана Марченко та Андрій Шевченко",
      date: t('announcements.title').includes('Announcements') 
        ? "02 August 2025"
        : "02 серпня 2025",
      tags: ["digital transformation", "public sector", "implementation"],
      image: "https://images.unsplash.com/photo-1726064855881-3bbb7000b29f?w=1080",
      size: "small"
    }
  ];

  const placeholderImg = "/images/placeholder.jpg";

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            {t('announcements.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('announcements.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Large featured article */}
          <div className="lg:col-span-1 lg:row-span-2">
            <div 
              onClick={() => {
                const id = announcements[0]?.id;
                if (id) {
                  onArticleClick?.(id);
                }
              }}
              className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <img
                src={announcements[0]?.image ?? placeholderImg}
                alt={announcements[0]?.title ?? ""}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <Badge className="bg-white text-gray-900 hover:bg-white text-sm font-medium">
                  {announcements[0]?.category ?? ""}
                </Badge>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-medium leading-tight mb-3 group-hover:text-blue-300 transition-colors">
                  {announcements[0]?.title ?? ""}
                </h3>
                <p className="text-white/90 text-sm mb-3 line-clamp-2">
                  {announcements[0]?.authors ?? ""}
                </p>
                <p className="text-white/80 text-sm mb-4">
                  {announcements[0]?.date ?? ""}
                </p>
                <div className="flex flex-wrap gap-2">
                  {announcements[0]?.tags?.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="border-white/40 text-white/90 hover:bg-white/10 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Smaller articles */}
          <div className="lg:col-span-2 grid grid-rows-2 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {announcements.slice(1, 3).map((announcement, index) => (
                <div 
                  key={index + 1} 
                  onClick={() => onArticleClick?.(announcement.id)}
                  className="relative h-[285px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <img
                    src={announcement?.image ?? placeholderImg}
                    alt={announcement?.title ?? ""}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <Badge className={`text-white text-xs font-medium ${
                      announcement?.category?.toLowerCase().includes('policy') || announcement?.category?.toLowerCase().includes('політична') ? 'bg-red-600 hover:bg-red-700' :
                      announcement?.category?.toLowerCase().includes('working') || announcement?.category?.toLowerCase().includes('робоча') ? 'bg-purple-600 hover:bg-purple-700' :
                      'bg-blue-600 hover:bg-blue-700'
                    }`}>
                      {announcement?.category ?? ""}
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-base font-medium leading-tight mb-2 group-hover:text-blue-200 transition-colors line-clamp-2">
                      {announcement?.title ?? ""}
                    </h3>
                    <p className="text-white/90 text-xs mb-2">
                      {announcement?.authors ?? ""}
                    </p>
                    <p className="text-white/80 text-xs mb-3">
                      {announcement?.date ?? ""}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {announcement?.tags?.slice(0, 2).map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline" 
                          className="border-white/40 text-white/90 hover:bg-white/10 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {announcement?.tags && announcement.tags.length > 2 && (
                        <Badge 
                          variant="outline" 
                          className="border-white/40 text-white/90 hover:bg-white/10 text-xs"
                        >
                          ...
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {announcements.slice(3, 5).map((announcement, index) => (
                <div 
                  key={index + 3} 
                  onClick={() => onArticleClick?.(announcement.id)}
                  className="relative h-[285px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <img
                    src={announcement?.image ?? placeholderImg}
                    alt={announcement?.title ?? ""}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <Badge className={`text-white text-xs font-medium ${
                      announcement?.category?.toLowerCase().includes('policy') || announcement?.category?.toLowerCase().includes('політична') ? 'bg-red-600 hover:bg-red-700' :
                      announcement?.category?.toLowerCase().includes('working') || announcement?.category?.toLowerCase().includes('робоча') ? 'bg-purple-600 hover:bg-purple-700' :
                      announcement?.category?.toLowerCase().includes('analysis') || announcement?.category?.toLowerCase().includes('аналіз') ? 'bg-green-600 hover:bg-green-700' :
                      announcement?.category?.toLowerCase().includes('report') || announcement?.category?.toLowerCase().includes('звіт') ? 'bg-orange-600 hover:bg-orange-700' :
                      'bg-blue-600 hover:bg-blue-700'
                    }`}>
                      {announcement?.category ?? ""}
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-base font-medium leading-tight mb-2 group-hover:text-blue-200 transition-colors line-clamp-2">
                      {announcement?.title ?? ""}
                    </h3>
                    <p className="text-white/90 text-xs mb-2">
                      {announcement?.authors ?? ""}
                    </p>
                    <p className="text-white/80 text-xs mb-3">
                      {announcement?.date ?? ""}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {announcement?.tags?.slice(0, 2).map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline" 
                          className="border-white/40 text-white/90 hover:bg-white/10 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {announcement?.tags && announcement.tags.length > 2 && (
                        <Badge 
                          variant="outline" 
                          className="border-white/40 text-white/90 hover:bg-white/10 text-xs"
                        >
                          ...
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
