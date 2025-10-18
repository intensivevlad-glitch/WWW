import { motion } from "framer-motion";

// 🩸 High-quality images for projects
const img1 = "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80";
const img2 = "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80";
const img3 = "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80";
const img4 = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80";

const projects = [
  {
    title: "Підтримка пацієнтів",
    titleEn: "Patient Support",
    desc: "Ми надаємо фінансову, психологічну та медичну допомогу людям, які борються з раком крові. Кожен внесок — це шанс на одужання.",
    descEn: "We provide financial, psychological, and medical assistance to people fighting blood cancer. Every contribution is a chance for recovery.",
    img: img1,
  },
  {
    title: "Сучасна діагностика",
    titleEn: "Modern Diagnostics",
    desc: "Фонд фінансує лабораторні дослідження, аналізи та закупівлю реагентів для клінік, що лікують онкогематологічних пацієнтів.",
    descEn: "The foundation funds laboratory research, analyses, and reagent procurement for clinics treating oncohematological patients.",
    img: img2,
  },
  {
    title: "Освітні ініціативи",
    titleEn: "Educational Initiatives",
    desc: "Ми організовуємо тренінги та лекції для донорів, волонтерів і медичних працівників, поширюючи знання про важливість донорства.",
    descEn: "We organize training and lectures for donors, volunteers, and medical professionals, spreading awareness about the importance of donation.",
    img: img3,
  },
  {
    title: "Підтримка сімей",
    titleEn: "Family Support",
    desc: "Ми допомагаємо родинам пацієнтів у період лікування — від соціальної підтримки до реабілітаційних програм.",
    descEn: "We help patients' families during treatment — from social support to rehabilitation programs.",
    img: img4,
  },
];

export default function Projects() {
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
          Наші проекти
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 text-lg mb-14 max-w-3xl mx-auto"
        >
          Кожен проект — це конкретна історія надії, життя та перемоги над хворобою
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((p, i) => (
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
            Станьте частиною змін
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ваша підтримка допомагає нам продовжувати рятувати життя та надавати надію тим, хто цього потребує
          </p>
          <a
            href="/donate"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Підтримати проекти
          </a>
        </motion.div>
      </div>
    </section>
  );
}

