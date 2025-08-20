import { teamMembersData } from "../data/TeamMembersData.js";
import { useLanguage } from "../../contexts/LanguageContext.js";
import { TeamMemberCard } from "./TeamMemberCard.js";
import { DirectorCard } from "./DirectorCard.js";

interface TeamSectionProps {
  onTeamMemberClick?: ((teamMemberId: string) => void) | undefined;
}

export function TeamSection({ onTeamMemberClick }: TeamSectionProps) {
  const { t, language } = useLanguage();
  const isUk = language === "uk";

  const teamMember = teamMembersData(isUk);

  const handleTeamMemberClick = (teamMemberId: string) => {
    onTeamMemberClick?.(teamMemberId);
  };

   // Директорка
  const director = teamMember.find(teamMember => teamMember.id === "ilyash");
  // Всі інші члени команди
  const otherMembers = teamMember.filter(teamMember => teamMember.id !== "ilyash");

  return (
    <section id="team-members-section" className="py-20 px-4 relative overflow-hidden bg-gray-50">

      {/* Заголовок */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-6 text-foreground text-2xl">{t('aboutUs.teamSection.title')}</h1>
          <p className="text-muted-foreground max-w-5xl mx-auto text-lg leading-relaxed text-gray-700">
            {t('aboutUs.teamSection.subtitle')}
          </p>
        </div>
      </div>

      {/* Керівник команди - горизонтальний прямокутний блок */}
        {director && (
          <div className="max-w-6xl mx-auto mb-12">
            <DirectorCard {...(director as typeof director & { description: string })} 
              onClick={() => handleTeamMemberClick(director.id)}
            />
          </div>
        )}

        {/* Інші члени команди - вертикальні квадратні блоки */}
       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8 mb-4">
          {otherMembers.map((teamMember, index) => (
            <TeamMemberCard key={index} {...teamMember} 
              onClick={() => handleTeamMemberClick(teamMember.id)}
            />
          ))}
        </div>
    </section>
  );
}