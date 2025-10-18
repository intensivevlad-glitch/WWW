import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ua");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && (saved === "ua" || saved === "en")) {
      setLang(saved);
      updateTitle(saved);
    }
  }, []);

  const updateTitle = (language) => {
    document.title = language === "ua" 
      ? "Життя в краплині — Благодійний фонд боротьби з раком крові"
      : "Life in a Drop — Blood Cancer Charity Foundation";
  };

  const toggleLang = () => {
    const newLang = lang === "ua" ? "en" : "ua";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    updateTitle(newLang);
  };

  const t = (key) => {
    const translations = {
      // Навигация
      "nav.home": { ua: "Головна", en: "Home" },
      "nav.about": { ua: "Про нас", en: "About" },
      "nav.how": { ua: "Як ми працюємо", en: "How We Work" },
      "nav.projects": { ua: "Проекти", en: "Projects" },
      "nav.contact": { ua: "Контакти", en: "Contact" },
      "nav.donate": { ua: "Підтримати", en: "Donate" },
      
      // Название сайта
      "site.name": { ua: "Життя в краплині", en: "Life in a Drop" },
      
      // Главная страница - Герой
      "hero.title": { 
        ua: "Кожна крапля має значення", 
        en: "Every Drop Matters" 
      },
      "hero.subtitle": { 
        ua: "Допоможіть нам подарувати надію тим, хто бореться з раком крові", 
        en: "Help us give hope to those fighting blood cancer" 
      },
      "hero.cta": { ua: "Підтримати", en: "Donate Now" },
      
      // Счетчики
      "home.lives_saved": { ua: "Врятованих життів", en: "Lives Saved" },
      "home.donors_joined": { ua: "Донорів приєдналося", en: "Donors Joined" },
      "home.treatments_funded": { ua: "Профінансованих лікувань", en: "Treatments Funded" },
      "home.join_donor": { ua: "Станьте донором і рятуйте життя", en: "Become a donor and save lives" },
      
      // Проекты
      "projects.title": { ua: "Наші проекти", en: "Our Projects" },
      "projects.subtitle": { 
        ua: "Кожен проект — це конкретна історія надії, життя та перемоги над хворобою", 
        en: "Each project is a story of hope, life, and victory over disease" 
      },
      
      // Як ми працюємо
      "how.title": { ua: "Як ми працюємо", en: "How We Work" },
      "how.subtitle": { 
        ua: "Прозорий процес від пожертви до результату — кожен крок під контролем", 
        en: "Transparent process from donation to result — every step monitored" 
      },
      
      // Про нас
      "about.title": { ua: "Про наш благодійний фонд", en: "About Our Charity Foundation" },
      "about.mission": { ua: "Наша місія", en: "Our Mission" },
      
      // CTA
      "cta.support": { ua: "Підтримати фонд", en: "Support Us" },
      "cta.contact": { ua: "Зв'язатися з нами", en: "Contact Us" },
      "cta.more": { ua: "Дізнатися більше", en: "Learn More" },
      
      // Footer
      "footer.description": { 
        ua: "Благодійний фонд боротьби з раком крові", 
        en: "Blood Cancer Charity Foundation" 
      },
      "footer.rights": { ua: "Всі права захищені", en: "All rights reserved" },
    };

    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

