import { PartnerCard } from "./PartnerCard.js";
import { Building2 } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext.js";

export function PartnersSection() {
  const { t, language } = useLanguage();
  const isUk = language === "uk";


const partnersData = [
  {
    name: isUk ? "NOSC-UA Digital Innovation Hub" : "NOSC-UA Digital Innovation Hub",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=120&fit=crop",
    description: isUk 
      ? "Національний офіс стратегічних комунікацій України - центр цифрових інновацій, що підтримує розвиток ШІ-технологій для державного сектору."
      : "National Office of Strategic Communications of Ukraine – a digital innovation hub supporting the development of AI technologies for the public sector.",
    category: isUk 
      ? "Технологічний партнер"
      : "Technological Partner",
    website: "https://www.noscuadih.org/"
  },
  {
    name: isUk ? "Міністерство цифрової трансформації України" : "The Ministry of Digital Transformation of Ukraine",
    logo: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=200&h=120&fit=crop",
    description: isUk 
      ? "Урядовий орган, що відповідає за формування та реалізацію державної політики у сфері цифровізації, ШІ та електронного урядування."
      : "A government body responsible for shaping and implementing state policy in the field of digitalization, AI, and e-governance.",
    category: isUk 
      ? "Державний партнер"
      : "Government Partner",
    website: "https://thedigital.gov.ua"
  },
  {
    name: isUk ? "e-Governance Academy" : "e-Governance Academy",
    logo: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=200&h=120&fit=crop",
    description: isUk 
      ? "Естонська академія електронного урядування - провідний європейський експерт у сфері цифрової трансформації та електронного урядування."
      : "An Estonian e-governance academy – a leading European expert in digital transformation and e-governance.",
    category: isUk 
      ? "Академічний партнер"
      : "Academic Partner",
    website: "https://ega.ee"
  },
  {
    name: isUk ? "Прогрестех-Україна" : "Progresstech-Ukraine",
    logo: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=200&h=120&fit=crop",
    description: isUk 
      ? "Progresstech-Ukraine - технологічна компанія, що спеціалізується на впровадженні інноваційних рішень штучного інтелекту в бізнес-процесах."
      : "Progresstech-Ukraine – a technology company specializing in the implementation of innovative AI solutions in business processes.",
    category: isUk 
      ? "Технологічний партнер"
      : "Technological Partner",
    website: "https://www.progresstech.ua/"
  },
  {
    name: isUk ? "Diia.Osvita" : "Diia.Education",
    logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=120&fit=crop",
    description: isUk 
      ? "Освітня платформа від команди Дія, що розвиває цифрові навички та знання у сфері штучного інтелекту для українців."
      : "An educational platform by the Diia team that develops digital skills and knowledge in the field of artificial intelligence for Ukrainians.",
    category: isUk 
      ? "Державний партнер"
      : "Government Partner",
    website: "https://osvita.diia.gov.ua"
  },
  {
    name: isUk ? "ESTDEV" : "ESTDEV",
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=120&fit=crop",
    description: isUk 
      ? "Estonian Centre for International Development - естонський центр міжнародного розвитку, що підтримує цифрову трансформацію в Україні."
      : "Estonian Centre for International Development – an Estonian center for international development supporting digital transformation in Ukraine.",
    category: isUk 
      ? "Академічний партнер"
      : "Academic Partner",
    website: "https://estdev.ee"
  },
];


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
            { number: "6", label: isUk ? "Ключових партнерів" : "Key Partners", description: isUk ? "Стратегічна співпраця" : "Strategic Cooperation" },
            { number: "3", label: isUk ? "Країни" : "Countries", description: isUk ? "Міжнародна мережа" : "International Network" },
            { number: "15+", label: isUk ? "Спільних проектів" : "Joint Projects", description: isUk ? "У 2024 році" : "In 2024" },
            { number: "100%", label: isUk ? "Відкритість" : "Openness", description: isUk ? "Прозора співпраця" : "Transparent Cooperation" },
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