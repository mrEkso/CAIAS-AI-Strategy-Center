import { Card, CardContent } from "./ui/card.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { Users, Mail, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";
import { expertsData } from "./data/ExpertsData.js";
import { Link } from "react-router-dom";


export function ExpertsPage() {
  const { language } = useLanguage();
  const isUk = language === "uk";

  const experts = expertsData(isUk);

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


  return (
    <div className="min-h-screen bg-white">
      {/* Experts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert) => (
              <Link key={expert.id} to={`/experts/${expert.id}`}>
                <Card
                  key={expert.id}
                  className="group border shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 bg-white cursor-pointer hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 rounded-xl mx-auto overflow-hidden mb-4">
                      <ImageWithFallback
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{expert.name}</h3>
                    <p className="text-sm text-gray-600">{expert.position}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        </section>


        {/* Join Our Team Section */}
        <section className="py-16 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              
              <div className="bg-white backdrop-blur-sm border border-primary/20 rounded-3xl p-12 shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20 transition duration-500">
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
        </section>
      </div>
  );
}

