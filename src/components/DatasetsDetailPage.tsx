import { Button } from "./ui/button.js";
import { Badge } from "./ui/badge.js";
import { Card } from "./ui/card.js";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Tag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { useLanguage } from "../contexts/LanguageContext.js";
import { Link } from "react-router-dom";

interface DatasetsDetailPageProps {
  datasetId?: string;
}

export function DatasetsDetailPage({ datasetId }: DatasetsDetailPageProps) {
  const { t, language } = useLanguage();
  const isUk = language === "uk";

  // Отримуємо дані статті на основі ID
  const getDatasetData = (id: string) => {

    const allDatasets = {
      "featured": {
        id: "featured",
        title: isUk
          ? "Основний набір даних"
          : "Annual AI Conference | November 15-16, 2024",
        description: isUk
          ? "Цьогорічна щорічна конференція зосереджена на 25-річчі досліджень штучного інтелекту та його впливі на українську економіку"
          : "This year's annual conference focuses on 25 years of artificial intelligence research and its impact on Ukrainian economy",
        category: isUk 
          ? "Щорічні заходи" 
          : "Annual Events",
        date: "2024.11.15",
        readTime: "8",
        image: "https://images.unsplash.com/photo-1724245047328-431c55de6cb7?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: isUk 
          ? "Проф. Олександр Петренко" 
          : "Center for Strategic Use of AI",
        tags: isUk
          ? ["штучний інтелект", "конференція", "дослідження", "економіка", "Україна"]
          : ["artificial intelligence", "conference", "research", "economy", "Ukraine"],
        content: isUk ? [
          "Центр стратегічного використання штучного інтелекту з гордістю оголошує про проведення своєї щорічної конференції, присвяченої 25-річчю досліджень в галузі ШІ в Україні. Ця знакова подія відбудеться 15-16 листопада 2024 року і зберіт провідних експертів, дослідників та інноваторів з усього світу.",
          "Протягом двох днів учасники матимуть можливість познайомитися з найновішими досягненнями в сфері штучного інтелекту, обговорити виклики та перспективи розвитку технологій ШІ в контексті української економіки та суспільства.",
          "Програма конференції включатиме:",
          "• Основні доповіді від провідних світових експертів з ШІ",
          "• Панельні дискусії про етичні аспекти використання ШІ",
          "• Презентації останніх досліджень українських наукових інституцій",
          "• Воркшопи з практичного застосування ШІ в різних секторах економіки",
          "• Нетворкінг сесії для професійного спілкування",
          "Особлива увага буде приділена впливу штучного інтелекту на трансформацію української економіки, зокрема в контексті відновлення після війни та інтеграції з європейськими стандартами.",
          "Конференція також стане платформою для презентації нових ініціатив Центру, включаючи програми міжнародного співробітництва та освітні проєкти, спрямовані на розвиток талантів у сфері ШІ.",
          "Реєстрація на подію вже відкрита на офіційному веб-сайті Центру. Кількість місць обмежена, тому рекомендуємо реєструватися якомога швидше."
        ] : [
          "The Center for Strategic Use of Artificial Intelligence proudly announces its annual conference dedicated to 25 years of AI research in Ukraine. This landmark event will take place on November 15-16, 2024, bringing together leading experts, researchers, and innovators from around the world.",
          "Over two days, participants will have the opportunity to explore the latest advances in artificial intelligence, discuss challenges and prospects for AI technology development in the context of the Ukrainian economy and society.",
          "The conference program will include:",
          "• Keynote speeches from leading global AI experts",
          "• Panel discussions on ethical aspects of AI use",
          "• Presentations of latest research from Ukrainian scientific institutions", 
          "• Workshops on practical AI applications across various economic sectors",
          "• Networking sessions for professional communication",
          "Special attention will be paid to the impact of artificial intelligence on the transformation of the Ukrainian economy, particularly in the context of post-war reconstruction and integration with European standards.",
          "The conference will also serve as a platform for presenting new Center initiatives, including international cooperation programs and educational projects aimed at developing AI talent.",
          "Registration for the event is now open on the Center's official website. Space is limited, so we recommend registering as soon as possible."
        ]
      },
      "dataset-1": {
        id: "dataset-1", 
        title: isUk
          ? "Набір даних 1"
          : "New AI Research Center Opens in Kyiv",
        description: isUk
          ? "Центр зосередиться на розробці рішень ШІ для сфер охорони здоров'я та освіти"
          : "The center will focus on developing AI solutions for healthcare and education sectors",
        category: isUk 
          ? "Дослідження" 
          : "Research",
        date: "2024.11.10",
        readTime: "5",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
        author: isUk 
          ? "Д-р Марина Коваленко" 
          : "Dr. Marina Kovalenko",
        tags: isUk 
          ? ["дослідження", "охорона здоров'я", "освіта", "Київ", "інновації"]
          : ["research", "healthcare", "education", "Kyiv", "innovation"],
        content: isUk ? [
          "У Києві відкрився новий центр досліджень штучного інтелекту, який стане важливим кроком у розвитку AI-технологій в Україні. Центр розташований у сучасному науково-технологічному парку та оснащений найновішим обладнанням для проведення досліджень світового рівня.",
          "Основні напрямки роботи центру:",
          "• Розробка AI-рішень для діагностики та лікування захворювань",
          "• Створення інтелектуальних освітніх платформ",
          "• Дослідження етичних аспектів використання ШІ",
          "• Підготовка спеціалістів у сфері штучного інтелекту",
          "Центр планує співпрацювати з провідними медичними закладами України для впровадження AI-технологій в охороні здоров'я. Це включає розробку систем для раннього виявлення захворювань, оптимізації лікувальних процесів та покращення якості медичної допомоги.",
          "У сфері освіти центр зосередиться на створенні персоналізованих навчальних систем, які зможуть адаптуватися до індивідуальних потреб кожного учня або студента.",
          "Відкриття центру стало можливим завдяки підтримці Міністерства освіти і науки України та міжнародних партнерів."
        ] : [
          "A new artificial intelligence research center has opened in Kyiv, marking an important step in the development of AI technologies in Ukraine. The center is located in a modern science and technology park and is equipped with state-of-the-art equipment for conducting world-class research.",
          "Main areas of the center's work:",
          "• Development of AI solutions for disease diagnosis and treatment",
          "• Creation of intelligent educational platforms", 
          "• Research on ethical aspects of AI use",
          "• Training specialists in artificial intelligence",
          "The center plans to collaborate with leading medical institutions in Ukraine to implement AI technologies in healthcare. This includes developing systems for early disease detection, optimizing treatment processes, and improving the quality of medical care.",
          "In education, the center will focus on creating personalized learning systems that can adapt to the individual needs of each student.",
          "The opening of the center was made possible through support from Ukraine's Ministry of Education and Science and international partners."
        ]
      },
      "dataset-2": {
        id: "dataset-2",
        title: isUk
          ? "Набір даних 2"
          : "Ukraine Joins Global AI Ethics Initiative",
        description: isUk
          ? "Нове міжнародне партнерство має на меті встановити етичні керівні принципи для розвитку ШІ"
          : "New international partnership aims to establish ethical guidelines for AI development",
        category: isUk 
          ? "Етика" 
          : "Ethics",
        date: "2024.11.08",
        readTime: "6",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        author: isUk 
          ? "Катерина Шевченко" 
          : "Kateryna Shevchenko",
        tags: isUk 
          ? ["етика", "міжнародне співробітництво", "стандарти", "регулювання"]
          : ["ethics", "international cooperation", "standards", "regulation"],
        content: isUk ? [
          "Україна офіційно приєдналася до Глобальної ініціативи з етики штучного інтелекту, що стало важливим кроком у формуванні міжнародних стандартів відповідального розвитку AI-технологій.",
          "Ця ініціатива об'єднує понад 50 країн та міжнародних організацій з метою розробки спільних принципів етичного використання штучного інтелекту.",
          "Основні цілі ініціативи:",
          "• Розробка універсальних етичних стандартів для AI",
          "• Створення механізмів контролю та моніторингу",
          "• Обмін досвідом між країнами-учасницями",
          "• Захист прав людини в епоху штучного інтелекту",
          "Участь України в цій ініціативі відкриває нові можливості для співпраці з провідними світовими експертами в галузі етики AI та сприяє розвитку відповідального підходу до впровадження нових технологій."
        ] : [
          "Ukraine has officially joined the Global AI Ethics Initiative, marking an important step in shaping international standards for responsible AI technology development.",
          "This initiative brings together over 50 countries and international organizations to develop common principles for ethical AI use.",
          "Main goals of the initiative:",
          "• Development of universal ethical standards for AI",
          "• Creation of control and monitoring mechanisms", 
          "• Experience sharing between participating countries",
          "• Protection of human rights in the age of artificial intelligence",
          "Ukraine's participation in this initiative opens new opportunities for collaboration with leading global experts in AI ethics and promotes a responsible approach to implementing new technologies."
        ]
      },
      "dataset-3": {
        id: "dataset-3",
        title: isUk
          ? "Набір даних 3"
          : "Ukraine Joins Global AI Ethics Initiative",
        description: isUk
          ? "Нове міжнародне партнерство має на меті встановити етичні керівні принципи для розвитку ШІ"
          : "New international partnership aims to establish ethical guidelines for AI development",
        category: isUk 
          ? "Етика" 
          : "Ethics",
        date: "2024.11.08",
        readTime: "6",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
        author: isUk 
          ? "Катерина Шевченко" 
          : "Kateryna Shevchenko",
        tags: isUk 
          ? ["етика", "міжнародне співробітництво", "стандарти", "регулювання"]
          : ["ethics", "international cooperation", "standards", "regulation"],
        content: isUk ? [
          "Україна офіційно приєдналася до Глобальної ініціативи з етики штучного інтелекту, що стало важливим кроком у формуванні міжнародних стандартів відповідального розвитку AI-технологій.",
          "Ця ініціатива об'єднує понад 50 країн та міжнародних організацій з метою розробки спільних принципів етичного використання штучного інтелекту.",
          "Основні цілі ініціативи:",
          "• Розробка універсальних етичних стандартів для AI",
          "• Створення механізмів контролю та моніторингу",
          "• Обмін досвідом між країнами-учасницями",
          "• Захист прав людини в епоху штучного інтелекту",
          "Участь України в цій ініціативі відкриває нові можливості для співпраці з провідними світовими експертами в галузі етики AI та сприяє розвитку відповідального підходу до впровадження нових технологій."
        ] : [
          "Ukraine has officially joined the Global AI Ethics Initiative, marking an important step in shaping international standards for responsible AI technology development.",
          "This initiative brings together over 50 countries and international organizations to develop common principles for ethical AI use.",
          "Main goals of the initiative:",
          "• Development of universal ethical standards for AI",
          "• Creation of control and monitoring mechanisms", 
          "• Experience sharing between participating countries",
          "• Protection of human rights in the age of artificial intelligence",
          "Ukraine's participation in this initiative opens new opportunities for collaboration with leading global experts in AI ethics and promotes a responsible approach to implementing new technologies."
        ]
      },
    };

    return allDatasets[id as keyof typeof allDatasets] || allDatasets.featured;
  };

  const dataset = getDatasetData(datasetId || "featured");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/datasets" >
            <Button 
              variant="ghost" 
              className="text-primary hover:text-primary-dark"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {isUk ? 'Назад до наборів даних' : 'Back to Datasets'}
            </Button>
          </Link>
        </div>
      </div>

      {/* Dataset Header */}
      <section className="py-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Badge className="mb-4 bg-blue-600 text-white">
              {dataset.category}
            </Badge>
            
            <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6 leading-tight">
              {dataset.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{dataset.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{dataset.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{dataset.readTime} min</span>
              </div>
            </div>

            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              {dataset.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {dataset.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* <div className="flex items-center gap-4">
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    {isUk ? 'Поділитися' : 'Share'}
                  </Button>
                </div>
            */}

              {/*
              <Button size="sm" variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                {isUk ? 'Зберегти' : 'Save'}
              </Button>
            */}

            
          </div>
        </div>
      </section>


      {/* Dataset Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-72 sm:h-96 md:h-128 lg:h-256 rounded-lg overflow-hidden shadow-lg"> {/* h-64 md:h-96 */}
            <ImageWithFallback
              src={dataset.image}
              alt={dataset.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Dataset Content */}
      <section className="pt-4 pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {dataset.content.map((paragraph, index) => (
              <div key={index} className="mb-6">
                {paragraph.startsWith('•') ? (
                  <div className="ml-4 text-base text-gray-800 leading-relaxed">
                    {paragraph}
                  </div>
                ) : (
                  <p className="text-gray-800 leading-relaxed">
                    {paragraph}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Datasets */}

      {/*
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-medium text-gray-900 mb-8">
            {isUk ? "Схожі статті" : "Related Datasets"}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
                  alt="Ukraine Joins Global AI Ethics Initiative"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {isUk ? 'Етика' : 'Ethics'}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-medium text-gray-900 mb-2 leading-tight">
                  {isUk
                    ? "Україна приєднується до глобальної ініціативи з етики ШІ"
                    : "Ukraine Joins Global AI Ethics Initiative"
                  }
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {isUk
                    ? "Нове міжнародне партнерство має на меті встановити етичні керівні принципи для розвитку ШІ"
                    : "New international partnership aims to establish ethical guidelines for AI development"
                  }
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  2024-11-08
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop"
                  alt="Breakthrough in Quantum AI Computing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {isUk ? 'Технології' : 'Technology'}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-medium text-gray-900 mb-2 leading-tight">
                  {isUk
                    ? "Прорив у квантових обчисленнях ШІ"
                    : "Breakthrough in Quantum AI Computing"
                  }
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {isUk
                    ? "Українські дослідники досягають значної віхи в алгоритмах квантового машинного навчання"
                    : "Ukrainian researchers achieve significant milestone in quantum machine learning algorithms"
                  }
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  2024-11-05
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      */}
        
      
    </div>
  );
}