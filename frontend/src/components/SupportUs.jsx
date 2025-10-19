import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CreditCard, Building2, Globe, Heart } from 'lucide-react'

const donationMethods = [
  {
    key: 'card',
    icon: CreditCard,
    gradient: 'from-brand to-red-600',
    link: '#card-donation'
  },
  {
    key: 'monobank',
    icon: Building2,
    gradient: 'from-red-600 to-brand',
    link: '#monobank-donation'
  },
  {
    key: 'paypal',
    icon: Globe,
    gradient: 'from-brand to-red-500',
    link: '#paypal-donation'
  }
]

export default function SupportUs() {
  const { t } = useTranslation()

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-sky-25 to-white overflow-hidden">
      {/* Декоративні елементи */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Іконка серця */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring', bounce: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-brand to-red-600 shadow-2xl mb-6"
          >
            <Heart className="w-10 h-10 text-white fill-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-navy mb-6">
            {t('support.title')}
          </h2>
          <p className="text-lg md:text-xl text-navy/70 max-w-2xl mx-auto leading-relaxed">
            {t('support.subtitle')}
          </p>
        </motion.div>

        {/* Кнопки донатів */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {donationMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.key}
                href={method.link}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${method.gradient} shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden`}
              >
                {/* Анімований фон при hover */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                  initial={false}
                  whileHover={{ opacity: 0.1 }}
                />

                {/* Іконка */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Текст */}
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-1">{t(`support.${method.key}`)}</h3>
                  <p className="text-sm text-white/80">Натисніть для оплати</p>
                </div>

                {/* Світіння при hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent)'
                  }}
                  initial={false}
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Додаткова інформація */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-white border-2 border-brand/20 shadow-lg">
            <p className="text-navy/70 mb-3">
              💝 Всі кошти йдуть на лікування пацієнтів з раком крові
            </p>
            <p className="text-sm text-navy/50">
              Ми публікуємо звіти щомісяця про використання коштів
            </p>
          </div>
        </motion.div>

        {/* Статистика донатів */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '2M+', label: 'UAH зібрано' },
            { value: '350+', label: 'Пацієнтів' },
            { value: '1200+', label: 'Донорів' },
            { value: '100%', label: 'Прозорість' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-brand/10"
            >
              <div className="text-3xl font-extrabold text-brand mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-navy/60 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}



