import { Card, CardContent } from "../ui/card.js";
import { Calendar, Users, Globe, BookOpen, Target, Lightbulb, Users2, Award } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext.js";
const Background = "/images/HeaderBackgrounds/192.jpg";

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 px-4 bg-white">

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ 
          backgroundImage: `url(${Background})`,
          zIndex: 0
        }}
      />

      {/* Subtle dark overlay for text readability only */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" style={{ zIndex: 1 }} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Основна інформація */}
          <div className="lg:col-span-9 space-y-8">
            
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500">
              <h2 className="mb-8 text-foreground text-2xl">{t('aboutUs.aboutContent.aboutCenter.title')}</h2>
              <div className="space-y-8 text-muted-foreground leading-relaxed text-md">
                <p>{t('aboutUs.aboutContent.aboutCenter.paragraph1')}</p>
                <p>{t('aboutUs.aboutContent.aboutCenter.paragraph2')}</p>
                <p>{t('aboutUs.aboutContent.aboutCenter.paragraph3')}</p>
                <p>{t('aboutUs.aboutContent.aboutCenter.paragraph4')}</p>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500">
              <h3 className="mb-6 text-foreground text-xl">{t('aboutUs.aboutContent.aboutResearch.title')}</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>{t('aboutUs.aboutContent.aboutResearch.paragraph1')}</p>
                <p className="font-bold text-foreground">{t('aboutUs.aboutContent.aboutResearch.paragraph2')}</p>
              </div>
            </div>
          </div>

          {/* Бічна панель */}
          <div className="lg:col-span-3 space-y-8">
            {/* Ключові факти */}
            <Card className="bg-white backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="mb-8 text-foreground text-lg">{t('aboutUs.aboutContent.keyFacts.title')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{t('aboutUs.aboutContent.keyFacts.founded')}</div>
                      <div className="text-foreground font-medium">{t('aboutUs.aboutContent.keyFacts.foundedYear')}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{t('aboutUs.aboutContent.keyFacts.organizationType')}</div>
                      <div className="text-foreground font-medium">{t('aboutUs.aboutContent.keyFacts.organizationTypeValue')}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{t('aboutUs.aboutContent.keyFacts.focus')}</div>
                      <div className="text-foreground font-medium">{t('aboutUs.aboutContent.keyFacts.focusValue')}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{t('aboutUs.aboutContent.keyFacts.status')}</div>
                      <div className="text-foreground font-medium">{t('aboutUs.aboutContent.keyFacts.statusValue')}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Принципи роботи */}
            <Card className="bg-white backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="mb-8 text-foreground text-lg">{t('aboutUs.aboutContent.principles.title')}</h3>
                <div className="space-y-2">
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
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
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
