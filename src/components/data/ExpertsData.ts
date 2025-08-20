// Дані про експертів Центру

export const expertsData = (isUk: boolean) => [
  {
    id: "petrenko",
    name: isUk ? "Проф. Олександр Петренко" : "Prof. Oleksandr Petrenko",
    position: isUk ? "Керівник центру" : "Center Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    scientificPublications: {
      first:{
        title: isUk
          ? "Розвинені архітектури нейронних мереж для комп'ютерного зору"
          : "Advanced Neural Network Architectures for Computer Vision",
        journal: "IEEE Transactions on Pattern Analysis",
        year: "2024",
        citations: 142
      },
      second: {
        title: isUk
          ? "Застосування машинного навчання в українській промисловості"
          : "Machine Learning Applications in Ukrainian Industry",
        journal: "Journal of AI Research",
        year: "2023",
        citations: 89
      },
      third: {
        title: isUk
          ? "Етична структура ШІ для державних застосувань"
          : "Ethical AI Framework for Government Applications",
        journal: "AI Ethics Quarterly",
        year: "2023",
        citations: 67
      }
    },
  },
  {
    id: "kovalenko",
    name: isUk ? "Д-р Марина Коваленко" : "Dr. Marina Kovalenko",
    position: isUk ? "Провідний науковий співробітник" : "Lead Research Associate",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "melnyk",
    name: isUk ? "Д-р Андрій Мельник" : "Dr. Andriy Melnyk",
    position: isUk ? "Старший науковий співробітник" : "Senior Research Associate",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: "shevchenko",
    name: isUk ? "Катерина Шевченко" : "Kateryna Shevchenko",
    position: isUk ? "Молодший науковий співробітник" : "Junior Research Associate",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: "ivanenko",
    name: isUk ? "Д-р Віктор Іваненко" : "Dr. Viktor Ivanenko",
    position: isUk ? "Науковий співробітник" : "Research Associate",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: "bondarenko",
    name: isUk ? "Юлія Бондаренко" : "Yulia Bondarenko",
    position: isUk ? "Аналітик даних" : "Data Analyst",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: "artemenko",
    name: isUk ? "Анна Артеменко" : "Anna Artemenko",
    position: isUk ? "Аспірант" : "PhD Student",
    image: "/images/ExpertPhotos/artemenko.jpg"
  },
  {
    id: "franko",
    name: isUk ? "Анастасія Франко" : "Anastasia Franko",
    position: isUk ? "Спеціаліст з комунікацій" : "Communications Specialist",
    image: "/images/ExpertPhotos/franko.jpg"
  }
];