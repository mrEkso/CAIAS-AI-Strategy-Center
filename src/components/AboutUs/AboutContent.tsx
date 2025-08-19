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
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Основна інформація */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="mb-8 text-white text-foreground text-2xl">{t('aboutus.aboutCenter.title')}</h2>
              <div className="space-y-8 text-muted-foreground leading-relaxed text-md">
                <p>{t('aboutus.aboutCenter.paragraph1')}</p>
                <p>{t('aboutus.aboutCenter.paragraph2')}</p>
                <p>{t('aboutus.aboutCenter.paragraph3')}</p>
                <p>{t('aboutus.aboutCenter.paragraph4')}</p>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-white/95">
              <h3 className="mb-6 text-foreground text-xl">{t('aboutus.aboutResearch.title')}</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>{t('aboutus.aboutResearch.paragraph1')}</p>
                <p className="font-bold text-foreground">{t('aboutus.aboutResearch.paragraph2')}</p>
              </div>
            </div>
          </div>


          {/* Бічна панель */}
          <div className="space-y-8">
            {/* Ключові факти */}
            <Card className="bg-white/95 backdrop-blur-sm border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="mb-8 text-foreground text-lg">Ключові факти</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Заснований</div>
                      <div className="text-foreground font-medium">2025 рік</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Тип організації</div>
                      <div className="text-foreground font-medium">Think Tank</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Фокус</div>
                      <div className="text-foreground font-medium">ШІ та цифрова трансформація</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Статус</div>
                      <div className="text-foreground font-medium">Аналітичний центр КПІ</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Принципи роботи */}
            <Card className="bg-white/95 backdrop-blur-sm border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="mb-8 text-foreground text-lg">Принципи роботи</h3>
                <div className="space-y-4">
                  {[
                    { icon: Target, text: "Незалежність досліджень" },
                    { icon: Lightbulb, text: "Відкритість та прозорість" },
                    { icon: Award, text: "Наукова обґрунтованість" },
                    { icon: Users2, text: "Фокус на молодих талантах" },
                    { icon: Globe, text: "Міжнародна співпраця" }
                  ].map((principle, index) => {
                    const Icon = principle.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-xl bg-primary/5">
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