import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.js";
import { Badge } from "./ui/badge.js";
import { Button } from "./ui/button.js";
import { Calendar, Clock, ArrowRight, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { useLanguage } from "../contexts/LanguageContext.js";

export function AnnouncementsSection() {
  const { t } = useLanguage();

  const announcements = [
    {
      title: t('announcements.title').includes('Announcements') 
        ? "AI in Healthcare Conference 2024"
        : "Конференція \"ШІ у охороні здоров'я\" 2024",
      description: t('announcements.title').includes('Announcements')
        ? "Join leading experts discussing the future of artificial intelligence in medical diagnostics and treatment"
        : "Приєднуйтесь до провідних експертів, які обговорюють майбутнє штучного інтелекту в медичній діагностиці та лікуванні",
      category: t('announcements.title').includes('Announcements') ? "Conference" : "Конференція",
      date: "2024-12-15",
      time: "09:00",
      location: t('announcements.title').includes('Announcements') 
        ? "KPI Main Building, Hall 101"
        : "КПІ, Головний корпус, зала 101",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      type: t('announcements.title').includes('Announcements') ? "Event" : "Подія"
    },
    {
      title: t('announcements.title').includes('Announcements')
        ? "Workshop: Neural Networks for Beginners"
        : "Воркшоп: Нейронні мережі для початківців",
      description: t('announcements.title').includes('Announcements')
        ? "Free hands-on workshop introducing fundamental concepts of neural networks and deep learning"
        : "Безкоштовний практичний воркшоп, що знайомить з фундаментальними концепціями нейронних мереж та глибинного навчання",
      category: t('announcements.title').includes('Announcements') ? "Workshop" : "Воркшоп",
      date: "2024-12-08",
      time: "14:00",
      location: t('announcements.title').includes('Announcements')
        ? "Online (Zoom)"
        : "Онлайн (Zoom)",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      type: t('announcements.title').includes('Announcements') ? "Workshop" : "Воркшоп"
    },
    {
      title: t('announcements.title').includes('Announcements')
        ? "Open Call: AI Ethics Research Grant"
        : "Відкритий конкурс: Грант на дослідження етики ШІ",
      description: t('announcements.title').includes('Announcements')
        ? "Applications now open for research grants focused on ethical aspects of artificial intelligence development"
        : "Прийом заявок на дослідницькі гранти, зосереджені на етичних аспектах розвитку штучного інтелекту",
      category: t('announcements.title').includes('Announcements') ? "Grant" : "Грант",
      date: "2024-12-31",
      time: "23:59",
      location: t('announcements.title').includes('Announcements')
        ? "Application Deadline"
        : "Термін подачі заявок",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
      type: t('announcements.title').includes('Announcements') ? "Grant" : "Грант"
    }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <Card key={index} className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
              <div className="relative h-48">
                <ImageWithFallback
                  src={announcement.image}
                  alt={announcement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-blue-600 text-white text-xs">
                    {announcement.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs">
                    {announcement.type}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {announcement.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {announcement.time}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight line-clamp-2">
                  {announcement.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {announcement.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    {announcement.location}
                  </div>
                </div>
                <Button size="sm" className="w-full">
                  {t('announcements.learnMore')}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            {t('announcements.viewAll')}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}