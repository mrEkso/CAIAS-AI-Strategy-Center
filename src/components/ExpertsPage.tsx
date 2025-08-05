import { Card, CardContent, CardHeader } from "./ui/card.js";
import { Badge } from "./ui/badge.js";
import { Button } from "./ui/button.js";
import { NeuralNetwork } from "./NeuralNetwork.js";
import { GridBackground } from "./GridBackground.js";
import { FloatingShapes } from "./FloatingShapes.js";
import { Mail, Linkedin, BookOpen, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";

export function ExpertsPage() {
  const experts = [
    {
      name: "Проф. Олександр Петренко",
      position: "Керівник центру",
      specialization: "Машинне навчання, Deep Learning",
      education: "Доктор технічних наук, КПІ ім. Ігоря Сікорського",
      experience: "15+ років у сфері ШІ",
      achievements: ["30+ наукових публікацій", "Керівник 5 міжнародних проєктів", "Експерт IEEE"],
      skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP"],
      email: "o.petrenko@ai-center.kpi.ua",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Д-р Марина Коваленко",
      position: "Провідний науковий співробітник",
      specialization: "Обробка природної мови, Когнітивні обчислення",
      education: "Кандидат технічних наук, Національний університет \"Львівська політехніка\"",
      experience: "12+ років у сфері NLP",
      achievements: ["25+ наукових статей", "Розробник 3 патентів", "Лауреат премії НАН України"],
      skills: ["BERT", "GPT", "Transformers", "Sentiment Analysis", "Text Mining"],
      email: "m.kovalenko@ai-center.kpi.ua",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Д-р Андрій Мельник",
      position: "Старший науковий співробітник",
      specialization: "Комп'ютерний зір, Робототехніка",
      education: "Кандидат фізико-математичних наук, Харківський національний університет",
      experience: "10+ років у Computer Vision",
      achievements: ["20+ публікацій", "Учасник 8 міжнародних конференцій", "Ментор стартапів"],
      skills: ["OpenCV", "YOLO", "CNNs", "Object Detection", "Autonomous Systems"],
      email: "a.melnyk@ai-center.kpi.ua",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Катерина Шевченко",
      position: "Молодший науковий співробітник",
      specialization: "Етика ШІ, Аналіз даних",
      education: "Магістр комп'ютерних наук, КПІ ім. Ігоря Сікорського",
      experience: "5+ років у Data Science",
      achievements: ["15+ досліджень", "Організатор AI Ethics Workshop", "Стипендіат Google"],
      skills: ["R", "Python", "Ethics Framework", "Data Visualization", "Statistical Analysis"],
      email: "k.shevchenko@ai-center.kpi.ua",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Д-р Віктор Іваненко",
      position: "Науковий співробітник",
      specialization: "Квантові обчислення, Криптографія",
      education: "Кандидат фізико-математичних наук, Київський університет",
      experience: "8+ років у квантових технологіях",
      achievements: ["18+ наукових праць", "Експерт IBM Quantum", "Розробник алгоритмів"],
      skills: ["Qiskit", "Quantum Algorithms", "Cryptography", "Mathematical Modeling"],
      email: "v.ivanenko@ai-center.kpi.ua",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Юлія Бондаренко",
      position: "Аналітик даних",
      specialization: "Big Data, Бізнес-аналітика",
      education: "Магістр економічної кібернетики, Київський економічний університет",
      experience: "6+ років у аналітиці",
      achievements: ["10+ проєктів", "Сертифікат AWS", "Спікер конференцій"],
      skills: ["Hadoop", "Spark", "SQL", "Tableau", "Business Intelligence"],
      email: "y.bondarenko@ai-center.kpi.ua",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <GridBackground className="opacity-20" size={60} />
        <FloatingShapes count={8} />
        <NeuralNetwork nodeCount={12} connectionDistance={180} />
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-blue-700/80" style={{ zIndex: 2 }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" style={{ zIndex: 3 }}>
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-medium mb-6">
              Наші експерти
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Команда провідних вчених та дослідників, які формують майбутнє штучного інтелекту в Україні
            </p>
          </div>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <GridBackground className="opacity-5" size={80} />
        <FloatingShapes count={6} className="opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
                      <ImageWithFallback
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white text-xs px-3 py-1">
                        Експерт ШІ
                      </Badge>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{expert.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{expert.position}</p>
                  <p className="text-sm text-gray-600 mb-4">{expert.specialization}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                      Освіта
                    </h4>
                    <p className="text-sm text-gray-600">{expert.education}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Досвід</h4>
                    <p className="text-sm text-gray-600">{expert.experience}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-blue-600" />
                      Досягнення
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {expert.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Ключові навички</h4>
                    <div className="flex flex-wrap gap-1">
                      {expert.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 flex space-x-2">
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Mail className="w-4 h-4 mr-2" />
                      Контакт
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <GridBackground opacity={0.15} size={50} />
        <NeuralNetwork nodeCount={15} connectionDistance={120} className="opacity-60" />
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-700/70" style={{ zIndex: 2 }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 3 }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">
              Експертиза команди
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Наша команда об'єднує досвід та знання з різних галузей штучного інтелекту
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-medium text-transparent bg-gradient-to-br from-blue-200 to-blue-300 bg-clip-text mb-2">
                  60+
                </div>
                <h3 className="font-medium mb-2">Років сумарного досвіду</h3>
                <p className="text-blue-200 text-sm">У сфері штучного інтелекту</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-medium text-transparent bg-gradient-to-br from-blue-200 to-blue-300 bg-clip-text mb-2">
                  120+
                </div>
                <h3 className="font-medium mb-2">Наукових публікацій</h3>
                <p className="text-blue-200 text-sm">У провідних журналах</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-medium text-transparent bg-gradient-to-br from-blue-200 to-blue-300 bg-clip-text mb-2">
                  15+
                </div>
                <h3 className="font-medium mb-2">Міжнародних проєктів</h3>
                <p className="text-blue-200 text-sm">Успішно реалізованих</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-medium text-transparent bg-gradient-to-br from-blue-200 to-blue-300 bg-clip-text mb-2">
                  8+
                </div>
                <h3 className="font-medium mb-2">Галузей спеціалізації</h3>
                <p className="text-blue-200 text-sm">ML, NLP, CV, Robotics та інші</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}