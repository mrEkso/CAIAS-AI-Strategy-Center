import { TeamCard } from "./TeamCard.js";
import { Users, Mail, Calendar } from "lucide-react";

const teamData = [
  {
    name: "Олена Коваленко",
    position: "Директорка центру",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=center",
    description: "Доктор технічних наук, експертка у сфері штучного інтелекту та цифрової трансформації. Має більше 15 років досвіду в галузі ІТ та управлінні технологічними проектами. Очолює стратегічний розвиток центру та координує міжнародну співпрацю з провідними think tanks.",
    email: "o.kovalenko@kpi.ua",
    linkedin: "https://linkedin.com/in/olena-kovalenko",
    expertise: ["Стратегії ШІ", "Цифрова трансформація", "Технологічне лідерство", "Міжнародна співпраця"]
  },
  {
    name: "Андрій Петренко",
    position: "Старший розробник ШІ",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=center",
    description: "Магістр комп'ютерних наук КПІ, спеціалізується на розробці алгоритмів машинного навчання та deep learning. Має досвід роботи з великими даними та створення ШІ-рішень для державного сектору. Відповідає за технічну реалізацію дослідницьких проектів.",
    email: "a.petrenko@kpi.ua",
    linkedin: "https://linkedin.com/in/andriy-petrenko",
    expertise: ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "Big Data"]
  },
  {
    name: "Марія Сидоренко",
    position: "Розробниця NLP рішень",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=center",
    description: "Бакалавр прикладної математики, аспірантка КПІ. Спеціалізується на обробці природної мови та створенні чатботів для державних установ. Бере участь у дослідженнях мультимовних ШІ-моделей та розробці україномовних датасетів.",
    email: "m.sydorenko@kpi.ua",
    linkedin: "https://linkedin.com/in/maria-sydorenko",
    expertise: ["NLP", "Transformers", "PyTorch", "Україномовні моделі", "Чатботи"]
  },
  {
    name: "Дмитро Іваненко",
    position: "Розробник Computer Vision",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
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
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
            <Users className="w-4 h-4 mr-2" />
            Експертна команда
          </div>
          <h2 className="mb-6 text-foreground">Наша команда</h2>
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