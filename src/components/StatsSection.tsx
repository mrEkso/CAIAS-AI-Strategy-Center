import { NeuralNetwork } from "./NeuralNetwork.js";
import { GridBackground } from "./GridBackground.js";

export function StatsSection() {
  const stats = [
    {
      number: "50+",
      label: "Експертних досліджень",
      description: "Проведено аналітичних досліджень у сфері ШІ"
    },
    {
      number: "25+",
      label: "Партнерських організацій",
      description: "Активна співпраця з провідними установами"
    },
    {
      number: "100+",
      label: "Наукових публікацій",
      description: "Опубліковано статей та аналітичних матеріалів"
    },
    {
      number: "15+",
      label: "Освітніх програм",
      description: "Реалізовано програм підвищення кваліфікації"
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background decorative elements */}
      <GridBackground opacity={0.15} size={50} />
      <NeuralNetwork nodeCount={25} connectionDistance={140} className="opacity-80" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-700/60" style={{ zIndex: 2 }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 3 }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">
            Результати нашої роботи
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Цифри, що демонструють наш внесок у розвиток штучного інтелекту в Україні
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl lg:text-5xl font-medium text-transparent bg-gradient-to-br from-blue-200 to-blue-300 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-medium mb-2">
                  {stat.label}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
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