import { Button } from "../ui/button.js";
import { Card, CardContent } from "../ui/card.js";
import { Mail, Phone, MapPin } from "lucide-react";

export function PartnershipCTA() {
  return (
    <section className="py-16 px-4 bg-gradient-to-t from-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-foreground">Станьте нашим партнером</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Ми завжди відкриті до нових стратегічних партнерств з організаціями, 
            які поділяють наше бачення розвитку штучного інтелекту в Україні та світі.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-card border-border">
            <CardContent className="p-0">
              <h3 className="mb-6 text-foreground">Сфери співпраці</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Спільні наукові дослідження та R&D проекти
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Розробка освітніх програм та курсів з ШІ
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Впровадження ШІ-рішень у бізнес-процеси
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Академічний обмін та стажування
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Організація конференцій та воркшопів
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Комерціалізація університетських розробок
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8 bg-card border-border">
            <CardContent className="p-0">
              <h3 className="mb-6 text-foreground">Контактна інформація</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1">Email</div>
                    <div className="text-muted-foreground">ai-center@kpi.ua</div>
                    <div className="text-muted-foreground">partnerships@kpi.ua</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1">Телефон</div>
                    <div className="text-muted-foreground">+38 (044) 204-85-85</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1">Адреса</div>
                    <div className="text-muted-foreground">
                      просп. Перемоги, 37<br />
                      Київ, 03056, Україна<br />
                      КПІ ім. Ігоря Сікорського
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <Button className="w-full" size="lg">
                  Надіслати пропозицію про партнерство
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}