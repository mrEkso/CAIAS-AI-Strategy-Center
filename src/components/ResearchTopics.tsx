import { useLanguage } from "../contexts/LanguageContext.js";

export function ResearchTopics() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[40vh] flex flex-col items-center justify-center px-4 overflow-hidden bg-gray-50">

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-4xl leading-relaxed mb-10 text-foreground">
            {t('researchTopics.title')}
          </p>
        </div>
      </div>
    </section>
  );
}