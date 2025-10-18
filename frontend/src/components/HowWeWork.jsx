import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { DollarSign, Pill, Truck, Heart, BarChart3 } from 'lucide-react'

const icons = [DollarSign, Pill, Truck, Heart, BarChart3]

export default function HowWeWork() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-25 relative overflow-hidden">
      {/* Timeline dots декоративні елементи */}
      <div className="absolute left-1/2 top-20 bottom-20 w-1 bg-gradient-to-b from-brand/20 via-brand/40 to-brand/20 hidden lg:block transform -translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">
            {t('how.title')}
          </h2>
          <p className="text-lg md:text-xl text-navy/70 max-w-3xl mx-auto">
            {t('how.subtitle')}
          </p>
        </motion.div>

        {/* Кроки */}
        <div className="space-y-12 md:space-y-16">
          {[1, 2, 3, 4, 5].map((step, index) => {
            const Icon = icons[index]
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                {/* Лівий/правий контент */}
                <motion.div
                  whileHover={{ scale: 1.03, x: isEven ? -5 : 5 }}
                  className={`flex-1 p-8 rounded-3xl bg-white border-2 border-transparent hover:border-brand shadow-xl hover:shadow-2xl transition-all ${
                    isEven ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                    {t(`how.steps.${step}.title`)}
                  </h3>
                  <p className="text-navy/70 leading-relaxed text-base md:text-lg">
                    {t(`how.steps.${step}.desc`)}
                  </p>

                  {/* Анімована лінія */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    className={`h-1 bg-gradient-to-r from-brand to-brand/50 rounded-full mt-6 ${
                      isEven ? 'md:origin-right' : 'md:origin-left'
                    }`}
                  />
                </motion.div>

                {/* Центральна іконка */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: 'spring', bounce: 0.5 }}
                  className="relative flex-shrink-0"
                >
                  {/* Timeline точка для desktop */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-brand to-red-600 shadow-2xl" />
                  
                  <div className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl border-4 border-brand">
                    <Icon className="w-12 h-12 text-brand" />
                  </div>

                  {/* Номер кроку */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.4, type: 'spring' }}
                    className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-brand to-red-600 text-white flex items-center justify-center font-bold text-lg shadow-lg"
                  >
                    {step}
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="/donate"
            className="inline-block px-8 py-4 bg-brand text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            {t('hero.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

