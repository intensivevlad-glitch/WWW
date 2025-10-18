import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Heart, ShieldCheck, Sun, Award } from 'lucide-react'
import { useEffect, useState } from 'react'

function StatCounter({ value, label, suffix = '' }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let raf
    const start = performance.now()
    const duration = 2000
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration)
      setCount(Math.floor(p * value))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [value])
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="text-center p-6 rounded-2xl bg-gradient-to-br from-brand/10 to-brand/5 border-2 border-brand/20"
    >
      <div className="text-5xl md:text-6xl font-extrabold text-brand mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-navy/70 font-semibold">
        {label}
      </div>
    </motion.div>
  )
}

export default function AboutUs() {
  const { t } = useTranslation()

  const values = [
    { icon: ShieldCheck, key: 'transparency', color: 'from-blue-500 to-brand' },
    { icon: Heart, key: 'compassion', color: 'from-brand to-red-500' },
    { icon: Sun, key: 'hope', color: 'from-yellow-500 to-brand' }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-25 to-white relative overflow-hidden">
      {/* Декоративні елементи */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-navy mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl md:text-2xl text-brand font-semibold max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Контент з зображенням */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Текст */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <p className="text-navy/80 leading-relaxed">
                {t('about.text1')}
              </p>
              <p className="text-navy/80 leading-relaxed">
                {t('about.text2')}
              </p>
              <p className="text-navy/80 leading-relaxed">
                {t('about.text3')}
              </p>
            </div>

            {/* Значок нагороди */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white border-2 border-brand/20"
            >
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-brand" />
              </div>
              <div>
                <div className="font-bold text-navy">Сертифікований фонд</div>
                <div className="text-sm text-navy/60">Офіційна реєстрація та прозорість</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Зображення */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
                alt="Hope and Health"
                className="w-full h-[400px] object-cover"
              />
              {/* Оверлей з градієнтом */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand/40 via-transparent to-transparent" />
              
              {/* Плаваючий badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, type: 'spring', bounce: 0.5 }}
                className="absolute top-6 right-6 bg-white rounded-full p-4 shadow-xl"
              >
                <Heart className="w-8 h-8 text-brand fill-brand" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <StatCounter value={10} label={t('about.years')} suffix="+" />
          <StatCounter value={1200} label={t('about.patients')} suffix="+" />
          <StatCounter value={15} label={t('about.hospitals')} />
        </motion.div>

        {/* Цінності */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-8">
            Наші цінності 💎
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 rounded-2xl bg-white border-2 border-transparent hover:border-brand shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Іконка з градієнтом */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Текст */}
                <h4 className="text-xl font-bold text-navy mb-2 text-center">
                  {t(`about.values.${value.key}`)}
                </h4>

                {/* Анімована лінія */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="h-1 bg-gradient-to-r from-brand to-brand/50 rounded-full mt-4 origin-center"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


