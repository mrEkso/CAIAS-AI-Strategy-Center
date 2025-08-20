import { AboutHero } from "./AboutUs/AboutHero.js";
import { AboutContent } from "./AboutUs/AboutContent.js";
import { TeamSection } from "./AboutUs/TeamSection.js";

interface AboutUsProps {
  onTeamMemberClick?: (teamMemberId: string) => void;
}

export function AboutUs({ onTeamMemberClick }: AboutUsProps) {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <TeamSection onTeamMemberClick={onTeamMemberClick}/>
    </main>
  );
}
