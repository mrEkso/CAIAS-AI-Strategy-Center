import { Card, CardContent } from "../ui/card.js";
import { Calendar, Users, Globe, BookOpen, Target, Lightbulb, Users2, Award } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext.js";
const Background = "/images/HeaderBackgrounds/12.jpg";

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 px-4 bg-white">

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75"
        style={{ 
          backgroundImage: `url(${Background})`,
          zIndex: 0
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Основна інформація */}
          <div className="lg:col-span-9 space-y-8">
            
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500">
              <h2 className="mb-8 text-foreground text-2xl font-semibold">{t('aboutUs.aboutContent.aboutCenter.title')}</h2>
              <div className="space-y-8 text-muted-foreground leading-relaxed text-md">
                <p>{t('aboutUs.aboutContent.aboutCenter.paragraph1')}</p>
                <p>{t('aboutUs.aboutContent.aboutCenter.paragraph2')}</p>
                <p>{t('aboutUs.aboutContent.aboutCenter.paragraph3')}</p>
                <p>{t('aboutUs.aboutContent.aboutCenter.paragraph4')}</p>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500">
              <h3 className="mb-6 text-foreground text-xl font-semibold">{t('aboutUs.aboutContent.aboutResearch.title')}</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>{t('aboutUs.aboutContent.aboutResearch.paragraph1')}</p>
                <p className="font-semibold text-foreground">{t('aboutUs.aboutContent.aboutResearch.paragraph2')}</p>
              </div>
            </div>
          </div>

          {/* Бічна панель */}
          <div className="lg:col-span-3 space-y-8">

            {/* Ключові факти */}
            <Card className="bg-white backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="mb-6 text-foreground text-lg font-semibold">
                  {t('aboutUs.aboutContent.keyFacts.title')}
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Calendar,
                      label: t('aboutUs.aboutContent.keyFacts.founded'),
                      value: t('aboutUs.aboutContent.keyFacts.foundedYear'),
                    },
                    {
                      icon: Users,
                      label: t('aboutUs.aboutContent.keyFacts.organizationType'),
                      value: t('aboutUs.aboutContent.keyFacts.organizationTypeValue'),
                    },
                    {
                      icon: Globe,
                      label: t('aboutUs.aboutContent.keyFacts.focus'),
                      value: t('aboutUs.aboutContent.keyFacts.focusValue'),
                    },
                    {
                      icon: BookOpen,
                      label: t('aboutUs.aboutContent.keyFacts.status'),
                      value: t('aboutUs.aboutContent.keyFacts.statusValue'),
                    },
                  ].map((fact, index) => {
                    const Icon = fact.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-700 mb-1">{fact.label}</div>
                          <div className="text-foreground font-medium">{fact.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Принципи роботи */}
            <Card className="bg-white backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="mb-4 text-foreground text-lg font-semibold">{t('aboutUs.aboutContent.principles.title')}</h3>
                <div className="space-y-2 font-medium">
                  {[
                    { icon: Target, text: t('aboutUs.aboutContent.principles.independence') },
                    { icon: Lightbulb, text: t('aboutUs.aboutContent.principles.transparency') },
                    { icon: Award, text: t('aboutUs.aboutContent.principles.scientific') },
                    { icon: Users2, text: t('aboutUs.aboutContent.principles.youngTalents') },
                    { icon: Globe, text: t('aboutUs.aboutContent.principles.international') }
                  ].map((principle, index) => {
                    const Icon = principle.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4 p-2 rounded-xl">
                        <div className="w-8 h-8 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm">{principle.text}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}
