import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// 🔄 High-quality workflow images
const step1 = "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=1200&q=80";
const step2 = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80";
const step3 = "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1200&q=80";
const step4 = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80";

export default function HowWeWorkWithLang() {
  const { lang } = useLanguage();

  const content = {
    ua: {
      title: "Як ми працюємо",
      subtitle: "Прозорий процес від пожертви до результату — кожен крок під контролем",
      steps: [
        {
          title: "1️⃣ Збір пожертв",
          desc: "Ми приймаємо благодійні внески від донорів, партнерів та організацій. Кожна гривня наближає нас до мети — врятувати життя.",
          img: step1,
        },
        {
          title: "2️⃣ Аналіз потреб",
          desc: "Медичні координатори та експерти визначають, кому терміново потрібна допомога — від закупівлі препаратів до фінансування лікування.",
          img: step2,
        },
        {
          title: "3️⃣ Закупівля та доставка",
          desc: "Фонд забезпечує швидке постачання медикаментів, обладнання та лабораторних реактивів до клінік по всій Україні.",
          img: step3,
        },
        {
          title: "4️⃣ Контроль і звітність",
          desc: "Ми звітуємо про кожен крок: опубліковані фінансові звіти, фото, історії пацієнтів, щоб зберегти довіру та прозорість.",
          img: step4,
        },
      ],
      trust: [
        { icon: "✅", label: "100% прозорість" },
        { icon: "🏥", label: "Перевірені клініки" },
        { icon: "📊", label: "Щомісячні звіти" },
        { icon: "❤️", label: "Реальна допомога" },
      ]
    },
    en: {
      title: "How We Work",
      subtitle: "Transparent process from donation to result — every step monitored",
      steps: [
        {
          title: "1️⃣ Fundraising",
          desc: "We accept charitable contributions from donors, partners, and organizations. Every hryvnia brings us closer to our goal — saving lives.",
          img: step1,
        },
        {
          title: "2️⃣ Needs Analysis",
          desc: "Medical coordinators and experts determine who urgently needs help — from purchasing medicines to funding treatment.",
          img: step2,
        },
        {
          title: "3️⃣ Purchase & Delivery",
          desc: "The foundation ensures rapid supply of medicines, equipment, and laboratory reagents to clinics across Ukraine.",
          img: step3,
        },
        {
          title: "4️⃣ Control & Reporting",
          desc: "We report every step: published financial reports, photos, patient stories to maintain trust and transparency.",
          img: step4,
        },
      ],
      trust: [
        { icon: "✅", label: "100% Transparency" },
        { icon: "🏥", label: "Verified Clinics" },
        { icon: "📊", label: "Monthly Reports" },
        { icon: "❤️", label: "Real Help" },
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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

        <div className="grid md:grid-cols-2 gap-10">
          {t.steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative w-full md:w-2/5 h-52 md:h-auto overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 group-hover:text-red-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                
                {/* Progress indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
                  className="mt-4 h-1 bg-gradient-to-r from-red-600 to-pink-400 rounded-full origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {t.trust.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
              className="text-center p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="text-sm font-semibold text-gray-700">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

