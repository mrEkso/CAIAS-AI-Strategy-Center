import { Button } from "./ui/button.js";
import { NeuralNetwork } from "./NeuralNetwork.js";
import { GridBackground } from "./GridBackground.js";
import { FloatingShapes } from "./FloatingShapes.js";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background decorative elements */}
      <GridBackground className="opacity-20" size={60} />
      <FloatingShapes count={12} />
      <NeuralNetwork nodeCount={18} connectionDistance={200} />
      
      {/* Gradient overlay with blue focus */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-blue-700/80" style={{ zIndex: 2 }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" style={{ zIndex: 3 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              Формування експертного середовища у сфері ШІ
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Розроблення інноваційних рішень у сфері штучного інтелекту в стратегічних секторах економіки
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Дізнатися більше
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Наші дослідження
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-400/40 to-blue-500/30 h-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                  </svg>
                </div>
                <div className="bg-gradient-to-br from-blue-500/40 to-blue-600/30 h-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="bg-gradient-to-br from-blue-600/40 to-blue-700/30 h-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Наша місія</h3>
                <p className="text-blue-100 text-sm">
                  Експертне середовище • Інноваційні рішення • Стратегічні сектори
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}