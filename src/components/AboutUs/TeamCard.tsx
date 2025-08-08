import { Card, CardContent } from "../ui/card.js";
import { ImageWithFallback } from "../figma/ImageWithFallback.js";
import { Mail, Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  position: string;
  photo: string;
}

export function TeamCard({ name, position, photo }: TeamCardProps) {
  return (
    <Card className="h-full bg-card border-border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 group">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-2xl overflow-hidden border border-border group-hover:border-primary/20 transition-all duration-300">
              <ImageWithFallback
                src={photo}
                alt={`${name} фото`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <h3 className="mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{name}</h3>
          <div className="text-primary font-medium mb-4">{position}</div>
        </div>
        
      </CardContent>
    </Card>
  );
}