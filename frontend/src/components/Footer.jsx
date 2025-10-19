import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Facebook, Instagram, Send, Mail, ArrowUp, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const { t } = useTranslation()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { key: 'aboutUs', href: '#about' },
    { key: 'howWeWork', href: '#how' },
    { key: 'ourProjects', href: '#projects' },
    { key: 'supportUs', href: '#support' },
    { key: 'contacts', href: '#contacts' }
  ]

  const socialMedia = [
    { name: 'Facebook', icon: Facebook, link: 'https://facebook.com', color: 'hover:bg-[#1877F2]' },
    { name: 'Instagram', icon: Instagram, link: 'https://instagram.com', color: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:to-[#FD1D1D]' },
    { name: 'Telegram', icon: Send, link: 'https://t.me', color: 'hover:bg-[#0088cc]' },
    { name: 'Email', icon: Mail, link: 'mailto:info@lifeindrop.org', color: 'hover:bg-red-700' }
  ]

  return (
    <>
      <footer className="relative bg-gradient-to-br from-[#b71c1c] via-brand to-[#d32f2f] text-white overflow-hidden">
        {/* Декоративні елементи */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>

        {/* Округлі кути зверху */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-50 rounded-b-[3rem]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 mt-8">
          {/* Основний контент */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* 1. Логотип і місія */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Логотип */}
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Heart className="w-6 h-6 text-white fill-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-extrabold">{t('footer.foundation')}</h3>
                  <div className="text-xs text-white/80">Життя в краплині</div>
                </div>
              </div>

              {/* Місія */}
              <p className="text-white/90 leading-relaxed font-medium">
                {t('footer.mission')}
              </p>

              {/* Додатковий текст */}
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-white/70">
                  🩸 Допомагаємо пацієнтам з раком крові з 2017 року
                </p>
              </div>
            </motion.div>

            {/* 2. Швидкі посилання */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                {t('footer.quickLinks')}
                <div className="flex-1 h-px bg-white/20" />
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {t(`footer.${link.key}`)}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* 3. Соціальні мережі та контакт */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold mb-6">{t('contacts.followUs')}</h4>
              
              {/* Соціальні іконки */}
              <div className="flex gap-3 mb-8">
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
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1, type: 'spring', bounce: 0.5 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>

              {/* Контактна інформація */}
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@lifeindrop.org" className="hover:text-white transition-colors">
                    info@lifeindrop.org
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Київ, Україна</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Розділова лінія */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-px bg-white/20 mb-8 origin-center"
          />

          {/* Копірайт */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center space-y-2"
          >
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} {t('footer.foundation')}. {t('footer.rights')}
            </p>
            <p className="text-white/60 text-xs">
              {t('footer.created')}
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-brand to-red-600 text-white shadow-2xl flex items-center justify-center cursor-pointer"
        aria-label={t('footer.scrollToTop')}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </>
  )
}



