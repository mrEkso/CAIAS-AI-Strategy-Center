import { Card, CardContent } from "../ui/card.js";
import { ImageWithFallback } from "../figma/ImageWithFallback.js";
import { Mail, Linkedin } from "lucide-react";

interface TeamMemberCardProps {
  id: string;
  name: string;
  position: string;
  photo: string;
  description?: string;
  onClick?: () => void;
}

  export function TeamMemberCard({ id, name, position, photo, description, onClick }: TeamMemberCardProps) {

    {/* Картки членів команди Центру */}
    return (
      <Card 
        onClick={onClick}
        className="bg-white h-full border-border shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-500 group cursor-pointer"
        >
        <CardContent className="p-8 flex flex-col h-full">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border border-border group-hover:border-primary/20 transition-all duration-500">
                <ImageWithFallback
                  src={photo}
                  alt={`${name} фото`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
            </div>
          </div>
          
          <div className="text-center mb-2">
            <h3 className="mb-3 text-lg text-foreground group-hover:text-primary transition-colors duration-500">{name}</h3>
            <div className="text-md text-primary font-medium mb-2">{position}</div>
          </div>
          
        </CardContent>
      </Card>
    );
  }