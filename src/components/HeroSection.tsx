export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-primary">
            Центр стратегій застосування штучного інтелекту
          </h1>
          <div className="text-muted-foreground text-xl mb-6">
            КПІ ім. Ігоря Сікорського
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-foreground">Наші стратегічні партнери</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Центр стратегій застосування штучного інтелекту КПІ ім. Ігоря Сікорського співпрацює з провідними 
            технологічними компаніями, академічними установами та державними організаціями для розвитку 
            інноваційних рішень у сфері штучного інтелекту. Наші партнерства створюють синергію між наукою, 
            бізнесом та державою для впровадження передових ШІ-технологій в Україні.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="text-3xl font-semibold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Стратегічних партнерів</div>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="text-3xl font-semibold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Спільних проектів</div>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="text-3xl font-semibold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Країн співпраці</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}