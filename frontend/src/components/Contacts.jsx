import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { MapPin, Mail, Phone, Send, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Contacts() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert(`${t('contacts.send')}! ✅`)
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contacts.address'),
      value: t('contacts.addressValue'),
      color: 'text-brand'
    },
    {
      icon: Mail,
      label: t('contacts.email'),
      value: t('contacts.emailValue'),
      color: 'text-brand',
      link: `mailto:${t('contacts.emailValue')}`
    },
    {
      icon: Phone,
      label: t('contacts.phone'),
      value: t('contacts.phoneValue'),
      color: 'text-brand',
      link: `tel:${t('contacts.phoneValue')}`
    }
  ]

  const socialMedia = [
    {
      name: 'Facebook',
      icon: Facebook,
      link: 'https://facebook.com',
      color: 'hover:bg-[#1877F2] hover:text-white'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      link: 'https://instagram.com',
      color: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white'
    },
    {
      name: 'Telegram',
      icon: MessageCircle,
      link: 'https://t.me',
      color: 'hover:bg-[#0088cc] hover:text-white'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            {t('contacts.title')}
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            {t('contacts.subtitle')}
          </p>
        </motion.div>

        {/* Основний контент */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Ліва колонка - Контактна інформація */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-navy mb-6">
                {t('contacts.title')}
              </h3>

              {contactInfo.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-navy/60 mb-1">
                        {item.label}
                      </div>
                      <div className="text-navy font-medium">
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                )

                return item.link ? (
                  <a key={index} href={item.link} className="block">
                    {content}
                  </a>
                ) : content
              })}

              {/* Карта (декоративний блок) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 h-48 rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 border-2 border-brand/20 flex items-center justify-center"
              >
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-brand mx-auto mb-2" />
                  <p className="text-navy/60 text-sm">Київ, Україна 🇺🇦</p>
                </div>
              </motion.div>
            </div>

            {/* Права колонка - Форма */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                {t('contacts.message')}
              </h3>

              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Ім'я */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                    {t('contacts.yourName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                    placeholder="Іван Петренко"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    {t('contacts.yourEmail')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                    placeholder="ivan@example.com"
                  />
                </div>

                {/* Повідомлення */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                    {t('contacts.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all resize-none"
                    placeholder="Ваше повідомлення..."
                  />
                </div>

                {/* Кнопка відправки */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand to-red-600 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Надсилаємо...</span>
                    </>
                  ) : (
                    <>
                      <span>{t('contacts.send')}</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>

        {/* Соціальні мережі */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-navy mb-6">
            {t('contacts.followUs')} 💙
          </h3>
          <div className="flex justify-center gap-4">
            {socialMedia.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1, type: 'spring', bounce: 0.5 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center transition-all shadow-md hover:shadow-xl ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}



