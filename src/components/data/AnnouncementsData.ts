// Головний та інші анонси

export const Announcements = (isUk: boolean) => [
    {
      id: "featured-article",
      title: isUk
        ? "Трансформація європейської політики ШІ: нова рамка для інновацій та етики"
        : "Transforming European AI Policy: A New Framework for Innovation and Ethics",
      category: isUk 
        ? "Книга" 
        : "Book",
      authors: isUk
        ? "Дмитро Колесніков, Анна Петрик, Сергій Федоров та Марія Ткаченко"
        : "Dmytro Kolesnikov, Anna Petryk, Sergiy Fedorov and Maria Tkachenko",
      date: isUk
        ? "10 липня 2025"
        : "10 July 2025",
      tags: isUk 
        ? ["бюджет єс", "політика ші", "інновації"]
        : ["eu budget", "ai policy", "innovation"],
      image: "https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?w=1080",
      size: "large"
    },
    {
      id: "article-1",
      title: isUk
        ? "Моделі управління ШІ на ринках, що розвиваються"
        : "AI governance models across emerging markets",
      category: isUk 
        ? "Політична записка" 
        : "Policy Brief",
      authors: isUk
        ? "Олександр Савченко"
        : "Oleksandr Savchenko",
      date: isUk
        ? "07 серпня 2025"
        : "07 August 2025",
      tags: isUk 
        ? ["врядування", "нові ринки", "регулювання ші"]
        : ["governance", "emerging markets", "ai regulation"],
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: "article-2",
      title: isUk
        ? "Українська екосистема ШІ: побудова сталих інноваційних мереж"
        : "The Ukrainian AI ecosystem: building sustainable innovation networks",
      category: isUk 
        ? "Робоча стаття" 
        : "Working paper",
      authors: isUk
        ? "Вікторія Левченко та Тарас Коваленко"
        : "Viktoriia Levchenko and Taras Kovalenko",
      date: isUk
        ? "18 липня 2025"
        : "18 July 2025",
      tags: isUk 
        ? ["україна", "інновації", "екосистема"]
        : ["ukraine", "innovation", "ecosystem"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: "article-3",
      title: isUk
        ? "Застосування машинного навчання у сталому розвитку: прогрес та виклики"
        : "Machine learning applications in sustainable development: progress and challenges",
      category: isUk 
        ? "Аналіз" 
        : "Analysis",
      authors: isUk
        ? "Іван Петренко"
        : "Ivan Petrenko",
      date: isUk
        ? "25 липня 2025"
        : "25 July 2025",
      tags: isUk
        ? ["машинне навчання", "сталий розвиток"]
        : ["machine learning", "sustainability"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      size: "small"
    },
    {
      id: "article-4",
      title: isUk
        ? "Стратегії цифрової трансформації для впровадження ШІ в державному секторі"
        : "Digital transformation strategies for public sector AI implementation",
      category: isUk 
        ? "Звіт" 
        : "Report",
      authors: isUk 
        ? "Оксана Марченко та Андрій Шевченко"
        : "Oksana Marchenko and Andriy Shevchenko",
      date: isUk
        ? "02 серпня 2025"
        : "02 August 2025",
      tags: isUk
        ? ["цифрова трансформація", "державний сектор", "впровадження"]
        : ["digital transformation", "public sector", "implementation"],
      image: "https://images.unsplash.com/photo-1726064855881-3bbb7000b29f?w=1080",
      size: "small"
    }
  ];


