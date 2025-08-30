import { Badge } from "../ui/badge.js";
import { useLanguage } from "../../contexts/LanguageContext.js";
import { Announcements } from "../data/AnnouncementsData.js";
import { Link } from "react-router-dom";


export function AnnouncementsSection() {
  const { t, language } = useLanguage();
  const isUk = language === "uk";

  const announcements = Announcements(isUk);
  const placeholderImg = "/images/placeholder.jpg";

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            {t("announcements.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("announcements.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Large featured announcement */}
          {announcements[0] && (
            <Link
              to={`/announcements/${announcements[0].id}`}
              className="lg:col-span-1 lg:row-span-2 relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <img
                src={announcements[0].image ?? placeholderImg}
                alt={announcements[0].title ?? ""}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <Badge className="bg-white text-gray-900 hover:bg-white text-sm font-medium">
                  {announcements[0].category}
                </Badge>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-medium leading-tight mb-3 group-hover:text-blue-300 transition-colors">
                  {announcements[0].title}
                </h3>
                <p className="text-white/90 text-sm mb-3 line-clamp-2">
                  {announcements[0].authors}
                </p>
                <p className="text-white/80 text-sm mb-4">
                  {announcements[0].date}
                </p>
                <div className="flex flex-wrap gap-2">
                  {announcements[0].tags?.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="border-white/40 text-white/90 hover:bg-white/10 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          )}

          {/* Smaller announcements */}
          <div className="lg:col-span-2 grid grid-rows-2 gap-6">
            {[announcements.slice(1, 3), announcements.slice(3, 5)].map(
              (group, gIndex) => (
                <div
                  key={gIndex}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {group.map((announcement) => (
                    <Link
                      key={announcement.id}
                      to={`/announcements/${announcement.id}`}
                      className="relative h-[285px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <img
                        src={announcement.image ?? placeholderImg}
                        alt={announcement.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`text-white text-xs font-medium ${
                            announcement?.category?.toLowerCase().includes(
                              "policy"
                            ) ||
                            announcement?.category
                              ?.toLowerCase()
                              .includes("політична")
                              ? "bg-red-600 hover:bg-red-700"
                              : announcement?.category
                                  ?.toLowerCase()
                                  .includes("working") ||
                                announcement?.category
                                  ?.toLowerCase()
                                  .includes("робоча")
                              ? "bg-purple-600 hover:bg-purple-700"
                              : announcement?.category
                                  ?.toLowerCase()
                                  .includes("analysis") ||
                                announcement?.category
                                  ?.toLowerCase()
                                  .includes("аналіз")
                              ? "bg-green-600 hover:bg-green-700"
                              : announcement?.category
                                  ?.toLowerCase()
                                  .includes("report") ||
                                announcement?.category
                                  ?.toLowerCase()
                                  .includes("звіт")
                              ? "bg-orange-600 hover:bg-orange-700"
                              : "bg-blue-600 hover:bg-blue-700"
                          }`}
                        >
                          {announcement.category}
                        </Badge>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-base font-medium leading-tight mb-2 group-hover:text-blue-200 transition-colors line-clamp-2">
                          {announcement.title}
                        </h3>
                        <p className="text-white/90 text-xs mb-2">
                          {announcement.authors}
                        </p>
                        <p className="text-white/80 text-xs mb-3">
                          {announcement.date}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {announcement.tags?.slice(0, 2).map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className="border-white/40 text-white/90 hover:bg-white/10 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {announcement.tags && announcement.tags.length > 2 && (
                            <Badge
                              variant="outline"
                              className="border-white/40 text-white/90 hover:bg-white/10 text-xs"
                            >
                              ...
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
