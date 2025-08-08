import { PartnerCard } from "./PartnerCard.js";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs.js";

const partnersData = {
  tech: [
    {
      name: "Microsoft Ukraine",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=200&h=80&fit=crop&crop=center",
      description: "Співпраця в розробці хмарних рішень на базі Azure AI та впровадженні корпоративних ШІ-систем для українських підприємств.",
      category: "Технологічний партнер",
      website: "https://microsoft.com/uk-ua"
    },
    {
      name: "Google for Education",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=80&fit=crop&crop=center",
      description: "Розвиток освітніх програм з машинного навчання та впровадження Google AI інструментів в навчальний процес.",
      category: "Технологічний партнер",
      website: "https://edu.google.com"
    },
    {
      name: "NVIDIA",
      logo: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=200&h=80&fit=crop&crop=center",
      description: "Дослідження в сфері високопродуктивних обчислень та deep learning з використанням GPU технологій NVIDIA.",
      category: "Технологічний партнер",
      website: "https://nvidia.com"
    },
    {
      name: "SoftServe",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=80&fit=crop&crop=center",
      description: "Українська IT-компанія, партнер у розробці ШІ-рішень для бізнесу та підготовці IT-фахівців.",
      category: "Технологічний партнер",
      website: "https://softserve.com"
    },
    {
      name: "EPAM Ukraine",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=80&fit=crop&crop=center",
      description: "Спільні R&D проекти та програми стажувань для студентів у сфері штучного інтелекту та машинного навчання.",
      category: "Технологічний партнер",
      website: "https://epam.com"
    },
    {
      name: "Grammarly",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=80&fit=crop&crop=center",
      description: "Дослідження в галузі обробки природної мови (NLP) та розробки лінгвістичних ШІ-моделей.",
      category: "Технологічний партнер",
      website: "https://grammarly.com"
    }
  ],
  academic: [
    {
      name: "MIT Computer Science",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=80&fit=crop&crop=center",
      description: "Академічне партнерство в дослідженнях штучного інтелекту та обміні студентами і викладачами.",
      category: "Академічний партнер",
      website: "https://csail.mit.edu"
    },
    {
      name: "Stanford AI Lab",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=80&fit=crop&crop=center",
      description: "Спільні дослідження в галузі computer vision та робототехніки, програми академічного обміну.",
      category: "Академічний партнер",
      website: "https://ai.stanford.edu"
    },
    {
      name: "ETH Zurich",
      logo: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=200&h=80&fit=crop&crop=center",
      description: "Європейський партнер у сфері машинного навчання та прикладної математики в ШІ-системах.",
      category: "Академічний партнер",
      website: "https://ethz.ch"
    },
    {
      name: "Університет Тарту",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=80&fit=crop&crop=center",
      description: "Балтійський партнер у розробці ШІ-рішень для цифрового урядування та електронних послуг.",
      category: "Академічний партнер",
      website: "https://ut.ee"
    },
    {
      name: "Варшавський університет",
      logo: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=200&h=80&fit=crop&crop=center",
      description: "Польський партнер у галузі комп'ютерних наук та розвитку ШІ-екосистеми у Східній Європі.",
      category: "Академічний партнер",
      website: "https://uw.edu.pl"
    },
    {
      name: "НАН України",
      logo: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=80&fit=crop&crop=center",
      description: "Національна академія наук України - партнер у фундаментальних дослідженнях ШІ та прикладних розробках.",
      category: "Академічний партнер",
      website: "https://nas.gov.ua"
    }
  ],
  government: [
    {
      name: "Мінцифра України",
      logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&h=80&fit=crop&crop=center",
      description: "Міністерство цифрової трансформації - ключовий партнер у впровадженні ШІ в державне управління.",
      category: "Державний партнер",
      website: "https://thedigital.gov.ua"
    },
    {
      name: "Держспецзв'язку",
      logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=80&fit=crop&crop=center",
      description: "Співпраця в розвитку кібербезпеки та захисту критичної інфраструктури за допомогою ШІ-технологій.",
      category: "Державний партнер",
      website: "https://dsszzi.gov.ua"
    },
    {
      name: "НКРЗІ",
      logo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=80&fit=crop&crop=center",
      description: "Національна комісія з регулювання зв'язку та інформатизації - партнер у розробці регуляторних підходів до ШІ.",
      category: "Державний партнер",
      website: "https://nkrzi.gov.ua"
    },
    {
      name: "Ukrainian Startup Fund",
      logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=200&h=80&fit=crop&crop=center",
      description: "Підтримка стартапів у сфері штучного інтелекту та комерціалізації університетських розробок.",
      category: "Державний партнер",
      website: "https://usf.com.ua"
    },
    {
      name: "Дія.City",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=80&fit=crop&crop=center",
      description: "IT-кластер для розвитку інноваційних технологій та стартапів у сфері штучного інтелекту в Україні.",
      category: "Державний партнер", 
      website: "https://city.diia.gov.ua"
    }
  ]
};

export function PartnersSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-foreground">Екосистема партнерств</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Наш центр будує багатогранні стратегічні партнерства з різними секторами для створення 
            комплексної екосистеми розвитку штучного інтелекту в Україні.
          </p>
        </div>

        <Tabs defaultValue="tech" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="tech">Технологічні</TabsTrigger>
            <TabsTrigger value="academic">Академічні</TabsTrigger>
            <TabsTrigger value="government">Державні</TabsTrigger>
          </TabsList>

          <TabsContent value="tech">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnersData.tech.map((partner, index) => (
                <PartnerCard key={index} {...partner} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="academic">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnersData.academic.map((partner, index) => (
                <PartnerCard key={index} {...partner} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="government">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnersData.government.map((partner, index) => (
                <PartnerCard key={index} {...partner} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}