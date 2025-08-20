import { Card, CardContent } from "../ui/card.js";
import { ImageWithFallback } from "../figma/ImageWithFallback.js";
import { Mail, Linkedin } from "lucide-react";

interface DirectorCardProps {
  id: string;
  name: string;
  position: string;
  photo: string;
  description: string;
  onClick?: () => void;
}

  export function DirectorCard({ id, name, position, photo, description, onClick }: DirectorCardProps) {

    {/* Картка директорки Центру */}
      return (
        <Card 
          onClick={onClick}
          className="bg-white w-full border-border shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.03] transition-all duration-500 group cursor-pointer"
          >
          <CardContent className="p-12 pb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-4">
              {/* Опис зліва */}
              <div className="flex-1 order-2 md:order-1">
                <p className="text-muted-foreground leading-loose text-gray-700 text-lg">
                  {description}
                </p>
              </div>
              
              {/* Фото та інформація справа */}
              <div className="flex-shrink-0 text-center md:mb-2 order-1 md:order-2">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border border-border group-hover:border-primary/20 transition-all duration-500 mx-auto">
                    <ImageWithFallback
                      src={photo}
                      alt={`${name} фото`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -inset-0.25 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                </div>
                
                <h3 className="text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-500">{name}</h3>
                <div className="text-md text-primary font-medium mb-2">{position}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }
  