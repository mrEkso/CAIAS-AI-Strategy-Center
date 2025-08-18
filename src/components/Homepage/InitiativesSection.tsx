import { Card, CardContent, CardHeader, CardTitle } from "../ui/card.js";
import { Badge } from "../ui/badge.js";
import { MessageSquare, FileText, Users2, Handshake } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext.js";

export function InitiativesSection() {
  const { t } = useLanguage();

  const initiatives = [
    {
      icon: MessageSquare,
      title: t('initiatives.thinkTanks.title'),
      description: t('initiatives.thinkTanks.description'),
      tags: t('initiatives.thinkTanks.tags')
    },
    {
      icon: FileText,
      title: t('initiatives.expertise.title'),
      description: t('initiatives.expertise.description'),
      tags: t('initiatives.expertise.tags')
    },
    {
      icon: Users2,
      title: t('initiatives.publications.title'),
      description: t('initiatives.publications.description'),
      tags: t('initiatives.publications.tags')
    },
    {
      icon: Handshake,
      title: t('initiatives.partnership.title'),
      description: t('initiatives.partnership.description'),
      tags: t('initiatives.partnership.tags')
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            {t('initiatives.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('initiatives.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="border border-gray-200 shadow-md hover:border-gray-300 hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-500 bg-white">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
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
                  {Array.isArray(initiative.tags) ? initiative.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700 border-gray-200">
                      {tag}
                    </Badge>
                  )) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}