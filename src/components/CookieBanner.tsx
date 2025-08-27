import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Button } from "./ui/button.js";
import { Card, CardContent } from "./ui/card.js";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog.js";
import { Switch } from "./ui/switch.js";
import { Cookie, Settings, Shield, BarChart3, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Читаємо збережену згоду з cookie
    const necessary = Cookies.get("necessary");
    const analytics = Cookies.get("analytics");
    const marketing = Cookies.get("marketing");
    const preferences = Cookies.get("preferences");

    if (!necessary && !analytics && !marketing && !preferences) {
      // Показуємо банер, якщо немає cookie
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      setConsent({
        necessary: necessary === "1",
        analytics: analytics === "1",
        marketing: marketing === "1",
        preferences: preferences === "1",
      });
    }
  }, []);

  const saveConsent = (consentData: CookieConsent) => {
    Cookies.set("necessary", consentData.necessary ? "1" : "0", { expires: 180, path: "/" });
    Cookies.set("analytics", consentData.analytics ? "1" : "0", { expires: 180, path: "/" });
    Cookies.set("marketing", consentData.marketing ? "1" : "0", { expires: 180, path: "/" });
    Cookies.set("preferences", consentData.preferences ? "1" : "0", { expires: 180, path: "/" });
    Cookies.set("cookieConsentDate", new Date().toISOString(), { expires: 180, path: "/" });
  };

  const handleAcceptAll = () => {
    const fullConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    saveConsent(fullConsent);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    saveConsent(consent);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    saveConsent(minimalConsent);
    setIsVisible(false);
  };

  const toggleConsent = (type: keyof CookieConsent) => {
    if (type === "necessary") return;
    setConsent(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <>
      {/* Банер */}
      <div className={`cookie-banner-wrapper fixed bottom-0 left-0 right-0 z-50 p-4 ${isVisible ? "show" : ""}`}>
        <Card className="mx-auto max-w-7xl bg-white border-primary/20 shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="mb-3 text-foreground">{t("cookieBanner.title")}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t("cookieBanner.description")}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90 text-white">
                    {t("cookieBanner.acceptAll")}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowSettings(true)} 
                    className="border-primary/20 hover:bg-primary/5"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {t("cookieBanner.customize")}
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={handleRejectAll} 
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t("cookieBanner.necessaryOnly")}
                  </Button>
                </div>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Діалог налаштувань */}
        <Dialog open={showSettings} onOpenChange={setShowSettings}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 pb-2">
                <Settings className="w-5 h-5 text-primary" />
                {t("cookieBanner.settingsTitle")}
              </DialogTitle>
              <DialogDescription>
                {t("cookieBanner.settingsDescription")}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Необхідні cookies */}
              <div className="flex items-start justify-between p-4 bg-gray-100 rounded-xl">
                <div className="flex items-start gap-3 flex-1">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{t("cookieBanner.necessary.title")}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t("cookieBanner.necessary.description")}
                    </p>
                  </div>
                </div>
                <Switch checked={consent.necessary} disabled className="mt-1" />
              </div>

              {/* Аналітичні cookies */}
              <div className="flex items-start justify-between p-4 border border-border rounded-xl">
                <div className="flex items-start gap-3 flex-1">
                  <BarChart3 className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{t("cookieBanner.analytics.title")}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t("cookieBanner.analytics.description")}
                    </p>
                  </div>
                </div>
                <Switch checked={consent.analytics} onCheckedChange={() => toggleConsent("analytics")} className="mt-1" />
              </div>

              {/* Маркетингові cookies */}
              <div className="flex items-start justify-between p-4 border border-border rounded-xl">
                <div className="flex items-start gap-3 flex-1">
                  <Cookie className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{t("cookieBanner.marketing.title")}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t("cookieBanner.marketing.description")}
                    </p>
                  </div>
                </div>
                <Switch checked={consent.marketing} onCheckedChange={() => toggleConsent("marketing")} className="mt-1" />
              </div>

              {/* Персоналізація */}
              <div className="flex items-start justify-between p-4 border border-border rounded-xl">
                <div className="flex items-start gap-3 flex-1">
                  <Settings className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{t("cookieBanner.preferences.title")}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t("cookieBanner.preferences.description")}
                    </p>
                  </div>
                </div>
                <Switch checked={consent.preferences} onCheckedChange={() => toggleConsent("preferences")} className="mt-1" />
              </div>
            </div>

            <div className="flex gap-3 pt-6 border-t border-border">
              <Button onClick={handleAcceptSelected} className="flex-1 bg-primary hover:bg-primary/90 text-white">
                {t("cookieBanner.saveSettings")}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowSettings(false)}
                className="border-primary/20 hover:bg-primary/5"
              >
                {t("cookieBanner.cancel")}
              </Button>
            </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
