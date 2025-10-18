import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// 🩸 High-quality images for projects
const img1 = "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80";
const img2 = "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80";
const img3 = "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80";
const img4 = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80";

export default function ProjectsWithLang() {
  const { lang } = useLanguage();

  const content = {
    ua: {
      title: "Наші проекти",
      subtitle: "Кожен проект — це конкретна історія надії, життя та перемоги над хворобою",
      cta: {
        title: "Станьте частиною змін",
        desc: "Ваша підтримка допомагає нам продовжувати рятувати життя та надавати надію тим, хто цього потребує",
        button: "Підтримати проекти"
      },
      projects: [
        {
          title: "Підтримка пацієнтів",
          desc: "Ми надаємо фінансову, психологічну та медичну допомогу людям, які борються з раком крові. Кожен внесок — це шанс на одужання.",
          img: img1,
        },
        {
          title: "Сучасна діагностика",
          desc: "Фонд фінансує лабораторні дослідження, аналізи та закупівлю реагентів для клінік, що лікують онкогематологічних пацієнтів.",
          img: img2,
        },
        {
          title: "Освітні ініціативи",
          desc: "Ми організовуємо тренінги та лекції для донорів, волонтерів і медичних працівників, поширюючи знання про важливість донорства.",
          img: img3,
        },
        {
          title: "Підтримка сімей",
          desc: "Ми допомагаємо родинам пацієнтів у період лікування — від соціальної підтримки до реабілітаційних програм.",
          img: img4,
        },
      ]
    },
    en: {
      title: "Our Projects",
      subtitle: "Each project is a story of hope, life, and victory over disease",
      cta: {
        title: "Become Part of the Change",
        desc: "Your support helps us continue saving lives and giving hope to those who need it",
        button: "Support Projects"
      },
      projects: [
        {
          title: "Patient Support",
          desc: "We provide financial, psychological, and medical assistance to people fighting blood cancer. Every contribution is a chance for recovery.",
          img: img1,
        },
        {
          title: "Modern Diagnostics",
          desc: "The foundation funds laboratory research, analyses, and reagent procurement for clinics treating oncohematological patients.",
          img: img2,
        },
        {
          title: "Educational Initiatives",
          desc: "We organize training and lectures for donors, volunteers, and medical professionals, spreading awareness about the importance of donation.",
          img: img3,
        },
        {
          title: "Family Support",
          desc: "We help patients' families during treatment — from social support to rehabilitation programs.",
          img: img4,
        },
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-800"
        >
          {t.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 text-lg mb-14 max-w-3xl mx-auto"
        >
          {t.subtitle}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl shadow-md overflow-hidden bg-gray-50 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-3 text-gray-800 group-hover:text-red-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 border border-red-100"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {t.cta.title}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t.cta.desc}
          </p>
          <a
            href="/donate"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {t.cta.button}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

