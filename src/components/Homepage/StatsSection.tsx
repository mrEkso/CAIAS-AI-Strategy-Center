import { useLanguage } from "../../contexts/LanguageContext.js";

export function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      number: t('stats.research.number'),
      label: t('stats.research.label'),
      description: t('stats.research.description')
    },
    {
      number: t('stats.partners.number'),
      label: t('stats.partners.label'),
      description: t('stats.partners.description')
    },
    {
      number: t('stats.publications.number'),
      label: t('stats.publications.label'),
      description: t('stats.publications.description')
    },
    {
      number: t('stats.programs.number'),
      label: t('stats.programs.label'),
      description: t('stats.programs.description')
    }
  ];

  return (
    <section className="py-16 bg-gray-750 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-flex">
              <div className="flex flex-col justify-center items-center text-center w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 
                              shadow-md shadow-white/5 hover:shadow-xl hover:shadow-white/5 transition-shadow duration-500">
                <div className="text-4xl lg:text-5xl font-medium text-white mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-medium mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 