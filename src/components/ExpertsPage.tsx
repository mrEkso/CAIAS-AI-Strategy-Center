import { Card, CardContent } from "./ui/card.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { Users, Mail, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";

interface ExpertsPageProps {
  onExpertClick?: (expertId: string) => void;
}

export function ExpertsPage({ onExpertClick }: ExpertsPageProps) {
  const { language } = useLanguage();
  const isUk = language === "uk";

  const experts = [
    {
      id: "petrenko",
      name: isUk ? "Проф. Олександр Петренко" : "Prof. Oleksandr Petrenko",
      position: isUk ? "Керівник центру" : "Center Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: "kovalenko",
      name: isUk ? "Д-р Марина Коваленко" : "Dr. Marina Kovalenko",
      position: isUk ? "Провідний науковий співробітник" : "Lead Research Associate",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: "melnyk",
      name: isUk ? "Д-р Андрій Мельник" : "Dr. Andriy Melnyk",
      position: isUk ? "Старший науковий співробітник" : "Senior Research Associate",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: "shevchenko",
      name: isUk ? "Катерина Шевченко" : "Kateryna Shevchenko",
      position: isUk ? "Молодший науковий співробітник" : "Junior Research Associate",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: "ivanenko",
      name: isUk ? "Д-р Віктор Іваненко" : "Dr. Viktor Ivanenko",
      position: isUk ? "Науковий співробітник" : "Research Associate",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: "bondarenko",
      name: isUk ? "Юлія Бондаренко" : "Yulia Bondarenko",
      position: isUk ? "Аналітик даних" : "Data Analyst",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: "artemenko",
      name: isUk ? "Анна Артеменко" : "Anna Artemenko",
      position: isUk ? "Аспірант" : "PhD Student",
      image: "/images/ExpertPhotos/artemenko.jpg"
    },
    {
      id: "franko",
      name: isUk ? "Анастасія Франко" : "Anastasia Franko",
      position: isUk ? "Спеціаліст з комунікацій" : "Communications Specialist",
      image: "/images/ExpertPhotos/franko.jpg"
    }
  ];

  const opportunities = [
    {
      icon: Calendar,
      title: isUk ? "Стажування" : "Internship",
      description: isUk ? "Програми для студентів" : "Programs for students",
      details: isUk ? "3-6 місяців практичного досвіду" : "3-6 months of practical experience"
    },
    {
      icon: Users,
      title: isUk ? "Дослідження" : "Research",
      description: isUk ? "Позиції для PhD" : "PhD positions",
      details: isUk ? "Участь у міжнародних проектах" : "Participation in international projects"
    },
    {
      icon: Mail,
      title: isUk ? "Експертиза" : "Expertise",
      description: isUk ? "Консультанти та ментори" : "Consultants and mentors",
      details: isUk ? "Гнучкий графік співпраці" : "Flexible collaboration schedule"
    }
  ];

  const handleExpertClick = (expertId: string) => {
    onExpertClick?.(expertId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Experts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert) => (
              <Card
                key={expert.id}
                className="border shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 bg-white cursor-pointer hover:scale-105"
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{expert.name}</h3>
                  <p className="text-sm text-gray-600">{expert.position}</p>
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
                  <h2 className="text-xl font-medium mb-6 text-foreground">
                    {isUk ? "Приєднуйтесь до нашої команди" : "Join Our Team"}
                  </h2>
                  <p className="text-gray-700 text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                    {isUk
                      ? "Ми завжди шукаємо талановитих дослідників та аналітиків, які прагнуть впливати на майбутнє штучного інтелекту в Україні."
                      : "We are always looking for talented researchers and analysts who want to shape the future of AI."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {opportunities.map((opportunity, index) => {
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
