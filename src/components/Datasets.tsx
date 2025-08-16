import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.js";
import { Badge } from "./ui/badge.js";
import { Button } from "./ui/button.js";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { useLanguage } from "../contexts/LanguageContext.js";
import { featuredDatasetsArticle, DatasetsArticles } from "./data/DatasetsData.js";

interface DatasetsProps {
  onArticleClick?: (articleId: string) => void;
}

export function Datasets() {
  const { t, language } = useLanguage();
  const isUk = language === "uk";

  const featuredArticle = featuredDatasetsArticle(isUk);
  const Articles = DatasetsArticles(isUk);

  return (
    <div className="min-h-screen bg-white">
      {/* Featured Article */}
      <section className="pt-8 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">{t('datasets.featuredDatasets')}</h2>
          </div>
          
          {/*  <Card className="group overflow-hidden border shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">  */}

          <Card className="group overflow-hidden border shadow-lg bg-white hover:shadow-xl transition-transform duration-500 transform hover:scale-[1.02] flex flex-col">
            <div className="grid lg:grid-cols-2 gap-0 h-full">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">{featuredArticle.category}</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between h-full overflow-hidden">
                {/* Верхній ряд: дата і час читання */}
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredArticle.readTime} min
                  </div>
                </div>

                {/* Середній контент */}
                <div className="overflow-hidden">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4 leading-tight line-clamp-2">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                    {featuredArticle.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Нижній ряд: автор і кнопка */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    {featuredArticle.author}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-800 px-2 py-1 text-base"
                  >
                    {t('datasets.readMore')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Latest Datasets Grid */}
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-medium text-gray-900">{t('datasets.latestDatasets')}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Articles.map((article, index) => (
              <Card
                key={index}
                className="group overflow-hidden border shadow-lg bg-white hover:shadow-xl hover:shadow-primary/5 transition-transform duration-500 transform hover:scale-[1.02] flex flex-col"
              >
                <div className="relative h-56">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700 text-sm px-3 py-1">
                      {article.category}
                    </Badge>
                  </div>
                </div>

                {/* Контент, верхній ряд */}
                <CardContent className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {article.readTime} min
                    </div>
                  </div>

                  <CardTitle className="text-xl leading-snug line-clamp-2 mb-3">
                    {article.title}
                  </CardTitle>

                  {/* Середина */}
                  <div className="flex-1">
                    <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {article.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-sm bg-gray-100 text-gray-700 px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Нижній ряд */}
                  <div className="flex items-center justify-between mt-auto pt-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      {article.author}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-800 px-2 py-1 text-base"
                    >
                      {t('datasets.readMore')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button
                variant="outline"
                size="sm"
                className="shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {t('datasets.moreDatasets')}
              </Button>
            </div>
        </div>
      </section>
    </div>
  );
}