import { Button } from "./ui/button";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
                  <path d="M12 2L13.09 8.26L19 7L17.74 13.26L22 15L15.74 16.09L17 22L10.74 20.74L9 24L7.91 17.74L2 19L3.26 12.74L0 11L6.26 9.91L5 4L11.26 5.26L12 2Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  Центр стратегій застосування штучного інтелекту
                </h3>
                <p className="text-gray-400">КПІ ім. Ігоря Сікорського</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Провідний науково-дослідний центр України у сфері стратегічного застосування 
              штучного інтелекту в економіці та суспільстві.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Зв'язатися з нами
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Швидкі посилання</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Про центр</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Дослідження</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Публікації</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Події</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Партнери</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Контакти</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Київ, Україна</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">info@ai-center.kpi.ua</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+380 44 123 45 67</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Центр стратегій застосування штучного інтелекту КПІ ім. Ігоря Сікорського. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}