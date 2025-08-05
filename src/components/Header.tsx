import { Button } from "./ui/button.js";
import { Menu } from "lucide-react";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage = "home", onNavigate }: HeaderProps) {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => handleNavigation("home")}>
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
                <path d="M12 2L13.09 8.26L19 7L17.74 13.26L22 15L15.74 16.09L17 22L10.74 20.74L9 24L7.91 17.74L2 19L3.26 12.74L0 11L6.26 9.91L5 4L11.26 5.26L12 2Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-medium text-gray-900">
                Центр стратегій застосування штучного інтелекту
              </h1>
              <p className="text-sm text-gray-600">КПІ ім. Ігоря Сікорського</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation("home")}
              className={`transition-colors ${
                currentPage === "home" 
                  ? "text-blue-600 font-medium" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Головна
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              Новини
            </button>
            <button 
              onClick={() => handleNavigation("experts")}
              className={`transition-colors ${
                currentPage === "experts" 
                  ? "text-blue-600 font-medium" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Експерти
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              Дослідження
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              Публікації
            </button>
          </nav>
          
          <Button variant="outline" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}