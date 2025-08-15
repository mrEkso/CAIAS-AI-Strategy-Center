export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Фонові елементи */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl leading-relaxed mt-10 mb-10 text-foreground font-light">
            Аналітичний центр нового покоління, що розробляє стратегії ШІ та цифрової трансформації 
            для відбудови та розвитку України.
          </p>
          <p className="text-muted-foreground text-lg italic font-light max-w-4xl mx-auto">
            "A next-generation Ukrainian think tank specializing in developing strategies for artificial 
            intelligence and digital transformation to support Ukraine's reconstruction and development."
          </p>
        </div>
      </div>

      {/* Grid місія + бачення */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto relative z-10">
        {/* Місія */}
        <div className="group">
          <div className="relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-primary/60 to-primary rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-lg"></div>
                </div>
              </div>
              <h3 className="mb-6 text-foreground text-center">Наша місія</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Підвищення якості політик і стратегій у сфері ШІ та забезпечення глобального лідерства 
                молодих талантів через відкриті й засновані на фактах дослідження, аналіз і дискусії.
              </p>
            </div>
          </div>
        </div>

        {/* Бачення */}
        <div className="group">
          <div className="relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-primary/60 to-primary rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-lg"></div>
                </div>
              </div>
              <h3 className="mb-6 text-foreground text-center">Наше бачення</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Стати провідною платформою для формування стратегій штучного інтелекту в Україні 
                та інтеграції України у глобальний технологічний ландшафт.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
