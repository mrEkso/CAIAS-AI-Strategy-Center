import { Card, CardContent, CardHeader, CardTitle } from "../ui/card.js";
import { Search, Users, BookOpen, Lightbulb } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext.js";

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            {t('tasks.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tasks.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tasks.map((task, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <task.icon className="w-8 h-8 text-gray-700" />
                </div>
                <CardTitle className="text-lg">{task.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
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