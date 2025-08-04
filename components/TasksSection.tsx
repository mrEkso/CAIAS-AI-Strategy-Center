import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Search, Users, BookOpen, Lightbulb } from "lucide-react";
import { GridBackground } from "./GridBackground";
import { FloatingShapes } from "./FloatingShapes";

export function TasksSection() {
  const tasks = [
    {
      icon: Search,
      title: "Аналітичні дослідження",
      description: "Проведення глибинних досліджень у сфері штучного інтелекту та його застосування в різних галузях економіки."
    },
    {
      icon: Users,
      title: "Консультування стейкхолдерів",
      description: "Надання експертних консультацій для бізнесу, державного сектору та наукових установ."
    },
    {
      icon: BookOpen,
      title: "Навчання та поширення досвіду",
      description: "Організація освітніх програм, семінарів та воркшопів для підвищення кваліфікації фахівців."
    },
    {
      icon: Lightbulb,
      title: "Обговорення стратегій та інновацій",
      description: "Розробка та впровадження інноваційних стратегій використання ШІ в ключових секторах економіки."
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-blue-100 overflow-hidden">
      {/* Background decorative elements */}
      <GridBackground className="opacity-5" size={80} />
      <FloatingShapes count={6} className="opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            Завдання центру
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ми працюємо над створенням комплексної екосистеми для розвитку штучного інтелекту в Україні
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tasks.map((task, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white/90">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <task.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{task.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {task.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}