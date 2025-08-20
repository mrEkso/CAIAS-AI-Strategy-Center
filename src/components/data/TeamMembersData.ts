// Дані про членів команди Центру

export const teamMembersData = (isUk: boolean) => [
  {
    id: "ilyash",
    name: isUk 
      ? "Ольга Іляш"
      : "Olga Ilyash",
    position: isUk 
      ? "Директорка центру"
      : "Center Director",
    photo: "/images/TeamPhotos/Olga_Ilyash.jpg",
    description: isUk 
      ? [ "Докторка технічних наук, експертка у сфері штучного інтелекту та цифрової трансформації.",
          "Має більше 15 років досвіду в галузі ІТ та управлінні технологічними проектами. Очолює стратегічний розвиток центру",
          "та координує міжнародну співпрацю з провідними think tanks. Під її керівництвом центр розробляє стратегії ШІ для відбудови",
          "та розвитку України, об'єднуючи молодих експертів, менторів та представників держави і бізнесу."
        ].join(' ')
      : [ "Doctor of Technical Sciences, an expert in artificial intelligence and digital transformation. She has over 15 years",
          "of experience in IT and technology project management. She leads the strategic development of the Center and coordinates",
          "international cooperation with leading think tanks. Under her leadership, the Center develops AI strategies for the reconstruction",
          "and development of Ukraine, bringing together young experts, mentors, as well as representatives of the state and business."
        ].join(' ')
  },
  {
    id: "okaianchenko",
    name: isUk 
      ? "Давид Окаянченко"
      : "Davyd Okaianchenko",
    position: isUk 
      ? "Розробник"
      : "Developer",
    photo: "/images/TeamPhotos/Davyd_Okaianchenko.jpg",
  },
  {
    id: "kulesh",
    name: isUk 
      ? "Катерина Кулеш"
      : "Kateryna Kulesh",
    position: isUk 
      ? "Розробниця"
      : "Developer",
    photo: "/images/TeamPhotos/Kateryna_Kulesh.jpg",
  },
  {
    id: "parkhomenko",
    name: isUk 
      ? "Артем Пархоменко"
      : "Artem Parkhomenko",
    position: isUk 
      ? "Розробник"
      : "Developer",
    photo: "/images/TeamPhotos/Artem_Parkhomenko.jpg",
  }
];