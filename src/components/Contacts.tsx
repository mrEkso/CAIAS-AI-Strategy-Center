import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.js";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";

export function Contacts() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              {t('contacts.getInTouch')}
            </h2>
          </div>
          
          {/* Center Information Card */}
          <Card className="bg-white/70 shadow-sm mb-8">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center space-x-3">
                <Building2 className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-xl text-center">
                  {t('contacts.centerName')}
                </CardTitle>
              </div>
              <p className="text-gray-600 text-center text-lg">
                {t('contacts.university')}
              </p>
            </CardHeader>
          </Card>

          {/* Contact Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-white/70 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-3">
                    {t('contacts.addressLabel')}
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {t('contacts.address')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-3">
                    {t('contacts.workingHours')}
                  </h3>
                  <p className="text-gray-600">
                    {t('contacts.workingDays')}
                  </p>
                  <p className="text-gray-600">
                    {t('contacts.workingTime')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <Phone className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-3">
                    {t('contacts.phoneLabel')}
                  </h3>
                  <p className="text-gray-600">
                    +380 44 204 8000
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <Mail className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-3">
                    {t('contacts.emailLabel')}
                  </h3>
                  <p className="text-gray-600">
                    info@ai-center.kpi.ua
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              {t('contacts.findUs')}
            </h2>
            <p className="text-gray-600">
              {t('contacts.findUsDetails')}
            </p>
          </div>
          
          <Card className="overflow-hidden max-w-4xl mx-auto">
            <div className="h-[560px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1089494993675!2d30.450247!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce637bfe1717%3A0x5370c2254bbbd2a6!2sBeresteiskyi%20Ave%2C%2037%2C%20Kyiv%2C%20Ukraine%2C%2003056!5e0!3m2!1sen!2sus!4v1642000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="КПІ ім. Ігоря Сікорського - Берестейський проспект, 37"
                className="w-full h-full"
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}