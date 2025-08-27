import { Card, CardContent } from "../ui/card.js";
import { ImageWithFallback } from "../figma/ImageWithFallback.js";
import { useLanguage } from "../../contexts/LanguageContext.js";

interface PartnerCardProps {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
}

export function PartnerCard({ name, logo, description, category, website }: PartnerCardProps) {
  const { t } = useLanguage();

  const categoryStyles: Record<string, string> = {
    "Державний партнер": "bg-primary-light",
    "Government Partner": "bg-primary-light",

    "Академічний партнер": "bg-primary-light2",
    "Academic Partner": "bg-primary-light2",

    "Технологічний партнер": "bg-purple-500",
    "Technological Partner": "bg-purple-500",
  };

  return (
    <Card className="h-full bg-card border-border shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/15 transition-shadow duration-500">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-center mb-4 h-20">
          <ImageWithFallback
            src={logo}
            alt={`${name} логотип`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="mb-4 text-center text-foreground font-semibold">{name}</h3>
          <div className="mb-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm text-white ${
                categoryStyles[category] ?? "bg-gray-500"
              }`}
            >
              {category}
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground flex-1 mb-4">{description}</p>
          </div>
          {website && (
            <a 
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm font-semibold"
            >
              {t('partnerships.card.visitWebsite')}
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}