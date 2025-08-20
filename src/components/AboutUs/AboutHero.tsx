import { useLanguage } from "../../contexts/LanguageContext.js";
import { Zap, Telescope } from "lucide-react";
const MissionImage = "images/Icons/superman-3.svg"

export function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[64vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Фон */}
      <div className="absolute inset-0 bg-gray-50"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center mt-2 mb-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-2xl leading-relaxed mt-10 mb-10 text-foreground font-light italic max-w-4xl mx-auto">
            {t('aboutUs.aboutHero.intro')}
          </p>
        </div>
      </div>

      {/* Grid місія + бачення */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto relative z-10 mb-12">
        {/* Місія */}
        <div className="group flex">
          <div className="bg-white relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-500 shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/15 flex-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full items-center">
              {/* Квадратний контур */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                {/* Іконка блискавки */}
                <Zap className="w-8 h-8 text-primary" />
              </div>

              <h3 className="mb-6 text-foreground text-center text-2xl">{t('aboutUs.aboutHero.mission.title')}</h3>
              <p className="text-muted-foreground leading-relaxed text-center text-lg flex-1 text-gray-700">
                {t('aboutUs.aboutHero.mission.text')}
              </p>
            </div>
          </div>
        </div>

        {/* Бачення */}
        <div className="group flex">
          <div className="bg-white relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-500 shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/15 flex-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full items-center">
              {/* Квадратний контур */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                {/* Іконка телескопа */}
                <Telescope className="w-8 h-8 text-primary" />
              </div>

              <h3 className="mb-6 text-foreground text-center text-2xl">{t('aboutUs.aboutHero.vision.title')}</h3>
              <p className="text-muted-foreground leading-relaxed text-center text-lg flex-1 text-gray-700">
                {t('aboutUs.aboutHero.vision.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
