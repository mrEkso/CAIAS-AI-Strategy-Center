import { Card, CardContent, CardHeader, CardTitle } from "../ui/card.js";
import { Badge } from "../ui/badge.js";
import { Button } from "../ui/button.js";
import { ArrowLeft, Mail, Linkedin, Award, BookOpen, Users, Calendar, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback.js";
import { useLanguage } from "../../contexts/LanguageContext.js";
import { teamMembersData } from "../data/TeamMembersData.js";

interface TeamMemberDetailPageProps {
  teamMemberId: string;
  onBack?: () => void;
}

export function TeamMemberDetailPage({ teamMemberId, onBack }: TeamMemberDetailPageProps) {
  const { t, language } = useLanguage();
  const isUk = language === "uk";

  const teamMembers = teamMembersData(isUk);

  const teamImages: Record<string, string> = {
    ilyash: "/images/TeamPhotos/Olga_Ilyash.jpg",
    okaianchenko: "/images/TeamPhotos/Davyd_Okaianchenko.jpg",
    kulesh: "/images/TeamPhotos/Kateryna_Kulesh.jpg",
    parkhomenko: "/images/TeamPhotos/Artem_Parkhomenko.jpg",
  };


  const researchPapers: Record<string, any[]> = {
    ilyash: [
      {
        title: isUk
          ? "Advanced Neural Network Architectures for Computer Vision"
          : "Розвинені архітектури нейронних мереж для комп'ютерного зору",
        journal: "IEEE Transactions on Pattern Analysis",
        year: "2024",
        citations: 142
      },
      {
        title: isUk
          ? "Machine Learning Applications in Ukrainian Industry"
          : "Застосування машинного навчання в українській промисловості",
        journal: "Journal of AI Research",
        year: "2023",
        citations: 89
      },
      {
        title: isUk
          ? "Ethical AI Framework for Government Applications"
          : "Етична структура ШІ для державних застосувань",
        journal: "AI Ethics Quarterly",
        year: "2023",
        citations: 67
      }
    ],
    okaianchenko: [
      {
        title: isUk
          ? "Transformer Models for Ukrainian Language Processing"
          : "Трансформерні моделі для обробки української мови",
        journal: "Computational Linguistics",
        year: "2024",
        citations: 98
      },
      {
        title: isUk
          ? "Sentiment Analysis in Social Media: Ukrainian Context"
          : "Аналіз настроїв у соціальних мережах: український контекст",
        journal: "Language Resources and Evaluation",
        year: "2023",
        citations: 76
      }
    ],
    kulesh: [
      {
        title: isUk
          ? "Real-time Object Detection for Autonomous Vehicles"
          : "Виявлення об'єктів у реальному часі для автономних транспортних засобів",
        journal: "Computer Vision and Image Understanding",
        year: "2024",
        citations: 123
      },
      {
        title: isUk
          ? "Robotic Vision Systems in Industrial Applications"
          : "Роботичні системи зору в промислових застосуваннях",
        journal: "Robotics and Autonomous Systems",
        year: "2023",
        citations: 87
      }
    ],
    parkhomenko: [
      {
        title: isUk
          ? "Ethical Guidelines for AI Implementation in Ukraine"
          : "Етичні керівні принципи для впровадження ШІ в Україні",
        journal: "AI & Society",
        year: "2024",
        citations: 45
      },
      {
        title: isUk
          ? "Bias Detection in Machine Learning Models"
          : "Виявлення упередженості в моделях машинного навчання",
        journal: "Ethics in Information Technology",
        year: "2023",
        citations: 32
      }
    ]
  };


  // Safely get team member data with fallbacks
  const getName = () => t(`teamMembersData.${teamMemberId}.name`);
  const getPosition = () => t(`teamMembersData.${teamMemberId}.position`);
  const getSpecialization = () => t(`teamMembersData.${teamMemberId}.specialization`);
  const getEducation = () => t(`teamMembersData.${teamMemberId}.education`);
  const getExperience = () => t(`teamMembersData.${teamMemberId}.experience`);
  const getEmail = () => t(`teamMembersData.${teamMemberId}.email`);
  
  const getAchievements = () => {
    const achievementsStr = t(`teamMembersData.${teamMemberId}.achievements`);
    if (achievementsStr && !achievementsStr.includes('teamMembersData')) {
      return achievementsStr.split(',').map(item => item.trim()).filter(item => item.length > 0);
    }
    return [];
  };
  
  const getSkills = () => {
    const skillsStr = t(`teamMembersData.${teamMemberId}.skills`);
    if (skillsStr && !skillsStr.includes('teamMembersData')) {
      return skillsStr.split(',').map(item => item.trim()).filter(item => item.length > 0);
    }
    return [];
  };

  const teamMember = {
    name: getName(),
    position: getPosition(),
    specialization: getSpecialization(),
    education: getEducation(),
    experience: getExperience(),
    achievements: getAchievements(),
    skills: getSkills(),
    email: getEmail(),
    image: teamImages[teamMemberId],
    researchPapers: researchPapers[teamMemberId] || []
  };

  // Check if team member exists (if translation contains the key, it means team member doesn't exist)
  if (!teamMember.name || teamMember.name.includes('teamMembersData')) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">{t('teamMembers.teamMemberNotFound')}</h2>
          <Button onClick={onBack} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('teamMembers.backButton')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button 
            onClick={onBack} 
            variant="outline" 
            className="mb-8 bg-gray-600 text-white hover:bg-gray-400 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('teamMembers.backToList')}
          </Button>
          
          {/* Photo, name and position of the team member */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-700 to-primary-medium2 rounded-2xl p-8 text-center">
                <div className="w-48 h-48 rounded-xl mx-auto overflow-hidden mb-4">
                  <ImageWithFallback
                    src={teamMember.image}
                    alt={teamMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-medium mb-2">{teamMember.name}</h1>
                <p className="text-white mb-4">{teamMember.position}</p>
                <Badge className="text-sm bg-white/20 text-white/90 border-white/30 mb-4 whitespace-normal break-words text-center px-2 py-2">
                  {teamMember.specialization}
                </Badge>
                <div className="flex justify-center space-x-4">
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 border border-white/30">
                    <Mail className="w-4 h-4 mr-2" />
                    {t('teamMembers.contact')}
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/20 hover:bg-white/30 border border-white/30 text-white/90 hover:text-white/90">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-primary-light4 backdrop-blur-sm rounded-xl p-4 text-center h-full flex flex-col justify-center">
                  <div className="text-2xl font-medium mb-1">{teamMember.experience}</div>
                  <p className="text-blue-100 text-sm">{t('teamMembers.experience')}</p>
                </div>
                <div className="bg-primary-light4 backdrop-blur-sm rounded-xl p-4 text-center h-full flex flex-col justify-center">
                  <div className="text-2xl font-medium mb-1">{teamMember.researchPapers.length}+</div>
                  <p className="text-blue-100 text-sm">{t('teamMembers.publicationsCount')}</p>
                </div>
                <div className="bg-primary-light4 backdrop-blur-sm rounded-xl p-4 text-center h-full flex flex-col justify-center">
                  <div className="text-3xl font-medium mb-1">
                    {teamMember.researchPapers.reduce((sum: number, paper: any) => sum + paper.citations, 0)}
                  </div>
                  <p className="text-blue-100 text-sm">{t('teamMembers.citations')}</p>
                </div>
              </div>

              {/* Achievements */}
              <Card className="border bg-primary-light4">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-white/90" />
                    {t('teamMembers.achievements')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {teamMember.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-white/90">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Education */}
              <Card className="border bg-white shadow-md hover:shadow-lg shadow-primary/10 hover:shadow-primary/15 duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-gray-700" />
                    {t('teamMembers.education')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{teamMember.education}</p>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="border bg-white shadow-md hover:shadow-lg shadow-primary/10 hover:shadow-primary/15 duration-500">
                <CardHeader>
                  <CardTitle>{t('teamMembers.keySkills')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {teamMember.skills.map((skill: string, index: number) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">

              {/* Research Papers */}
              <Card className="border bg-white shadow-md hover:shadow-lg shadow-primary/10 hover:shadow-primary/15 duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-gray-700" />
                    {t('teamMembers.recentPublications')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamMember.researchPapers.map((paper: any, index: number) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow shadow-primary/10 hover:shadow-primary/15 duration-500">
                        <h4 className="font-medium text-gray-900 mb-2">{paper.title}</h4>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span className="italic">{paper.journal}</span>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {paper.year}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {paper.citations} {t('teamMembers.citationsText')}
                          </Badge>
                          <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-800">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            {t('teamMembers.view')}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}