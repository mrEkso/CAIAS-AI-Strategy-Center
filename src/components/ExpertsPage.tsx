import { Card, CardContent } from "./ui/card.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { Users, Mail, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";

interface ExpertsPageProps {
  onExpertClick?: (expertId: string) => void;
}

export function ExpertsPage({ onExpertClick }: ExpertsPageProps) {
  const { t } = useLanguage();

  const experts = [
    {
      id: "petrenko",
      name: "Проф. Олександр Петренко",
      nameEn: "Prof. Oleksandr Petrenko",
      position: "Керівник центру",
      positionEn: "Center Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: "kovalenko",
      name: "Д-р Марина Коваленко",
      nameEn: "Dr. Marina Kovalenko",
      position: "Провідний науковий співробітник",
      positionEn: "Lead Research Associate",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: "melnyk",
      name: "Д-р Андрій Мельник",
      nameEn: "Dr. Andriy Melnyk",
      position: "Старший науковий співробітник",
      positionEn: "Senior Research Associate",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: "shevchenko",
      name: "Катерина Шевченко",
      nameEn: "Kateryna Shevchenko",
      position: "Молодший науковий співробітник",
      positionEn: "Junior Research Associate",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: "ivanenko",
      name: "Д-р Віктор Іваненко",
      nameEn: "Dr. Viktor Ivanenko",
      position: "Науковий співробітник",
      positionEn: "Research Associate",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: "bondarenko",
      name: "Юлія Бондаренко",
      nameEn: "Yulia Bondarenko",
      position: "Аналітик даних",
      positionEn: "Data Analyst",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: "artemenko",
      name: "Анна Артеменко",
      nameEn: "Anna Artemenko",
      position: "Аспірант",
      positionEn: "PhD Student",
      image: "/images/ExpertPhotos/artemenko.jpg"
    },
    {
      id: "franko",
      name: "Анастасія Франко",
      nameEn: "Anastasia Franko",
      position: "Спеціаліст з комунікацій",
      positionEn: "Communications Specialist",
      image: "/images/ExpertPhotos/franko.jpg"
    }
  ];

  const handleExpertClick = (expertId: string) => {
    if (onExpertClick) {
      onExpertClick(expertId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-medium mb-6">
              {t('experts.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('experts.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert, index) => (
              <Card 
                key={index} 
                className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white cursor-pointer hover:scale-105"
                onClick={() => handleExpertClick(expert.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 rounded-xl mx-auto overflow-hidden mb-4">
                    <ImageWithFallback
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {t('header.title').includes('Center') ? expert.nameEn : expert.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('header.title').includes('Center') ? expert.positionEn : expert.position}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

      {/* Join Our Team Section */}
      <div className="relative mt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-white backdrop-blur-sm border border-primary/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="mb-6 text-foreground">Приєднуйтесь до нашої команди</h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-3xl mx-auto">
                Ми завжди шукаємо талановитих дослідників, аналітиків та розробників, 
                які прагнуть впливати на майбутнє штучного інтелекту в Україні.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Calendar,
                  title: "Стажування",
                  description: "Програми для студентів",
                  details: "3-6 місяців практичного досвіду"
                },
                {
                  icon: Users,
                  title: "Дослідження",
                  description: "Позиції для PhD",
                  details: "Участь у міжнародних проектах"
                },
                {
                  icon: Mail,
                  title: "Експертиза",
                  description: "Консультанти та ментори",
                  details: "Гнучкий графік співпраці"
                }
              ].map((opportunity, index) => {
                const Icon = opportunity.icon;
                return (
                  <div key={index} className="group text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-foreground mb-2 font-medium">{opportunity.title}</h4>
                    <div className="text-muted-foreground mb-2">{opportunity.description}</div>
                    <div className="text-primary text-sm">{opportunity.details}</div>
                  </div>
                  );
                 })}
                </div>
             </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}