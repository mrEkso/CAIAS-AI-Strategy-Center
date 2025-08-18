import { Card, CardContent } from "../ui/card.js";
import { ImageWithFallback } from "../figma/ImageWithFallback.js";

interface PartnerCardProps {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
}

export function PartnerCard({ name, logo, description, category, website }: PartnerCardProps) {
  return (
    <Card className="h-full bg-card border-border shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/15 transition-shadow duration-500">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-center mb-4 h-20">
          <ImageWithFallback
            src={logo}
            alt={`${name} логотип`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="mb-2 text-center text-foreground">{name}</h3>
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm">
              {category}
            </span>
          </div>
          <p className="text-muted-foreground flex-1 mb-4">{description}</p>
          {website && (
            <a 
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              Відвідати сайт →
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}