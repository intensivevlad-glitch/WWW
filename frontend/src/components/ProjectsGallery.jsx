import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const projectImages = [
  'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80', // Медичні працівники
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', // Діти в лікарні
  'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80', // Волонтери
  'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&q=80'  // Медична допомога
]

export default function ProjectsGallery() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Сітка проєктів */}
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((project, index) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer bg-white border border-gray-100"
            >
              {/* Зображення */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={projectImages[index]}
                  alt={t(`projects.items.${project}.title`)}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Градієнт оверлей */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Номер проєкту */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  {project}
                </div>
              </div>

              {/* Контент */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-brand transition-colors">
                  {t(`projects.items.${project}.title`)}
                </h3>
                <p className="text-navy/70 leading-relaxed mb-4">
                  {t(`projects.items.${project}.desc`)}
                </p>

                {/* Кнопка */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-brand font-semibold group-hover:gap-3 transition-all"
                >
                  <span>{t('projects.more')}</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Анімована лінія знизу */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="h-1 bg-gradient-to-r from-brand to-brand/50 origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* Статистика внизу */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '350+', label: t('home.lives_saved') },
            { value: '1200+', label: t('home.donors_joined') },
            { value: '540+', label: t('home.treatments_funded') },
            { value: '100%', label: t('about.values.transparency') }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-brand/10 to-brand/5 border border-brand/20"
            >
              <div className="text-4xl font-extrabold text-brand mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-navy/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}



