import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MessageSquare, FileText, Users2, Handshake } from "lucide-react";
import { GridBackground } from "./GridBackground";
import { FloatingShapes } from "./FloatingShapes";

export function InitiativesSection() {
  const initiatives = [
    {
      icon: MessageSquare,
      title: "Think Tanks, Брифінги, Дебати",
      description: "Організація експертних дискусій та аналітичних сесій з ключових питань розвитку ШІ",
      tags: ["Експертиза", "Дискусії", "Аналітика"]
    },
    {
      icon: FileText,
      title: "Наукова експертиза",
      description: "Проведення незалежної наукової експертизи проєктів та ініціатив у сфері штучного інтелекту",
      tags: ["Дослідження", "Експертиза", "Наука"]
    },
    {
      icon: Users2,
      title: "Публікації та аналітика",
      description: "Підготовка та публікація аналітичних матеріалів, звітів та рекомендацій",
      tags: ["Публікації", "Звіти", "Рекомендації"]
    },
    {
      icon: Handshake,
      title: "Партнерство та співпраця",
      description: "Розвиток партнерських відносин з міжнародними організаціями та дослідницькими центрами",
      tags: ["Партнерство", "Співпраця", "Міжнародні зв'язки"]
    }
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <GridBackground className="opacity-3" size={100} />
      <FloatingShapes count={4} className="opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            Наші заходи
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексний підхід до розвитку штучного інтелекту через різноманітні форми діяльності
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <initiative.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{initiative.title}</CardTitle>
                    <p className="text-gray-600 leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {initiative.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}