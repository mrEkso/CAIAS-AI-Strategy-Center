import { Card, CardContent, CardHeader, CardTitle } from "../ui/card.js";
import { Search, Users, BookOpen, Lightbulb } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext.js";
const GrainTexture = "/images/grain-texture.jpg";

export function TasksSection() {
  const { t } = useLanguage();

  const tasks = [
    {
      icon: Search,
      title: t('tasks.analyticalResearch.title'),
      description: t('tasks.analyticalResearch.description')
    },
    {
      icon: Users,
      title: t('tasks.consulting.title'),
      description: t('tasks.consulting.description')
    },
    {
      icon: BookOpen,
      title: t('tasks.education.title'),
      description: t('tasks.education.description')
    },
    {
      icon: Lightbulb,
      title: t('tasks.strategy.title'),
      description: t('tasks.strategy.description')
    }
  ];

  return (
    <section className="relative py-16 bg-primary-light3/75">
      {/* Grain texture overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${GrainTexture})`,
              opacity: 0.1,
              mixBlendMode: 'overlay',
            }}
          />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-white mb-4">
            {t('tasks.title')}
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            {t('tasks.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tasks.map((task, index) => (
            <Card key={index} className="border shadow-lg shadow-primary/50 hover:shadow-2xl hover:shadow-primary/80 transition-shadow duration-500 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shadow-primary/30">
                  <task.icon className="w-8 h-8 text-primary-medium" />
                </div>
                <CardTitle className="text-lg text-primary-medium">{task.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  {task.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}