import { Card, CardContent } from "../ui/card.js";
import { Calendar, Users, Globe, BookOpen, Target, Lightbulb, Users2, Award } from "lucide-react";

export function AboutContent() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Основна інформація */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="mb-8 text-foreground">Про центр</h2>
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Центр стратегій застосування штучного інтелекту КПІ ім. Ігоря Сікорського заснований у 2025 році 
                  як незалежна аналітична платформа нового покоління (Think Tank), що об'єднує молодих експертів, 
                  провідних менторів, представників держави, бізнесу, міжнародної спільноти та молодих талантів, 
                  які прагнуть визначати стратегії цифрового розвитку України.
                </p>
                
                <p>
                  Центр функціонує як інтелектуальний хаб, де молоді таланти отримують можливість творити аналітику 
                  стратегічного рівня, а їхні ідеї, у партнерстві з досвідом менторів-експертів, перетворюються 
                  на рішення, здатні трансформувати державну політику, економіку та систему врядування. 
                  Ми дотримуємось принципів незалежності, відкритості та наукової обґрунтованості.
                </p>
                
                <p>
                  Діяльність Центру інтегрована у реалізацію Стратегії розвитку ШІ КПІ ім. Ігоря Сікорського, 
                  яка спрямована на посилення експертного впливу університету у сфері цифрової трансформації, 
                  та відповідає завданням Стратегії ШІ України 2030, яка визначає штучний інтелект як критичний 
                  ресурс відновлення, безпеки та економічного зростання держави.
                </p>
                
                <p>
                  Через публікації, стратегічні дослідження, публічні дискусії та активну участь у міжнародних 
                  ініціативах Центр формує відкритий простір для обговорення ключових викликів і рішень у сфері 
                  штучного інтелекту.
                </p>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h3 className="mb-6 text-foreground">Дослідницька програма</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Річна дослідницька програма Центру формується на основі відкритого діалогу з дослідниками, 
                  представниками урядових структур, бізнесу та міжнародних організацій. Програма відображає 
                  актуальні пріоритети національного розвитку у контексті глобальних трендів у сфері ШІ 
                  та затверджується у вересні кожного року.
                </p>
                
                <p className="font-bold text-foreground">
                  Центр стратегій застосування ШІ - це місце, де молоді таланти стають авторами нової хвилі 
                  аналітичного лідерства України, активно взаємодіючи з провідними світовими Think Tanks 
                  та формуючи місце України у глобальному технологічному ландшафті.
                </p>
              </div>
            </div>
          </div>

          {/* Бічна панель */}
          <div className="space-y-8">
            {/* Ключові факти */}
            <Card className="bg-card/70 backdrop-blur-sm border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="mb-8 text-foreground">Ключові факти</h3>
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
            <Card className="bg-card/70 backdrop-blur-sm border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="mb-8 text-foreground">Принципи роботи</h3>
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
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-200">
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