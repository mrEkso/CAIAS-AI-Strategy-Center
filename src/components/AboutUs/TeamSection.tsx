import { TeamCard } from "./TeamCard.js";

const teamData = [
  {
    name: "Ольга Іляш",
    position: "Директорка центру",
    photo: "/images/TeamPhotos/Olga_Ilyash.jpg",
  },
  {
    name: "Давид Окаянченко",
    position: "Розробник",
    photo: "/images/TeamPhotos/Davyd_Okaianchenko.jpg",
  },
  {
    name: "Катерина Кулеш",
    position: "Розробниця",
    photo: "/images/TeamPhotos/Kateryna_Kulesh.jpg",
  },
  {
    name: "Артем Пархоменко",
    position: "Розробник",
    photo: "/images/TeamPhotos/Artem_Parkhomenko.jpg",
  }
];

export function TeamSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Фонові елементи */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="mb-6 text-foreground">Наша команда</h1>
          <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
            Команда центру складається з досвідчених експертів та молодих талантів, 
            які об'єднують наукову досконалість з практичним досвідом впровадження ШІ-технологій.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {teamData.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}