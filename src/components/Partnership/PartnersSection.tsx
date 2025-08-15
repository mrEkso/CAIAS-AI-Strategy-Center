import { PartnerCard } from "./PartnerCard.js";
import { Building2 } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext.js";

const partnersData = [
  {
    name: "NOSC-UA Digital Innovation Hub",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=120&fit=crop",
    description: "Національний офіс стратегічних комунікацій України - центр цифрових інновацій, що підтримує розвиток ШІ-технологій для державного сектору.",
    category: "Технологічний партнер",
    website: "https://www.noscuadih.org/"
  },
  {
    name: "Міністерство цифрової трансформації України",
    logo: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=200&h=120&fit=crop",
    description: "Урядовий орган, що відповідає за формування та реалізацію державної політики у сфері цифровізації, ШІ та електронного урядування.",
    category: "Державний партнер",
    website: "https://thedigital.gov.ua"
  },
  {
    name: "e-Governance Academy",
    logo: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=200&h=120&fit=crop",
    description: "Естонська академія електронного урядування - провідний європейський експерт у сфері цифрової трансформації та електронного урядування.",
    category: "Академічний партнер",
    website: "https://ega.ee"
  },
  {
    name: "Прогрестех-Україна",
    logo: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=200&h=120&fit=crop",
    description: "Progresstech-Ukraine - технологічна компанія, що спеціалізується на впровадженні інноваційних рішень штучного інтелекту в бізнес-процесах.",
    category: "Технологічний партнер",
    website: "https://www.progresstech.ua/"
  },
  {
    name: "Diia.Osvita",
    logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=120&fit=crop",
    description: "Освітня платформа від команди Дія, що розвиває цифрові навички та знання у сфері штучного інтелекту для українців.",
    category: "Державний партнер",
    website: "https://osvita.diia.gov.ua"
  },
  {
    name: "ESTDEV",
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=120&fit=crop",
    description: "Estonian Centre for International Development - естонський центр міжнародного розвитку, що підтримує цифрову трансформацію в Україні.",
    category: "Академічний партнер",
    website: "https://estdev.ee"
  },
];

export function PartnersSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            {t('partnerships.section.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('partnerships.section.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partnersData.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>

        {/* Статистика партнерства */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "6", label: "Ключових партнерів", description: "Стратегічна співпраця" },
            { number: "3", label: "Країни", description: "Міжнародна мережа" },
            { number: "15+", label: "Спільних проектів", description: "У 2024 році" },
            { number: "100%", label: "Відкритість", description: "Прозора співпраця" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-foreground font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}