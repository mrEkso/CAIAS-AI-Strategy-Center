import { PartnerCard } from "./Partnership/PartnerCard.js";
import { PartnersSection } from "./Partnership/PartnersSection.js";
import { PartnershipCTA } from "./Partnership/PartnershipCTA.js";

export function Partnership() {
  return (
    <main>
      <PartnerCard
  name="Harvard University"
  logo="/images/harvard.png"
  description="Один з найстаріших університетів США."
  category="Освіта"
/>
      <PartnersSection />
      <PartnershipCTA />
    </main>
  );
}

