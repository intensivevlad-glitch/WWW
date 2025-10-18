import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)
  const { lang } = useLanguage()

  const text = {
    ua: {
      title: "Зв'язатися з нами",
      desc: "Ми відкриті до співпраці, запитань і партнерства. Напишіть нам!",
      name: "Ім'я",
      email: "Електронна пошта",
      message: "Повідомлення",
      send: "Надіслати",
      address: "вул. Хрещатик 1, Київ, Україна",
      phone: "+380 44 123 4567",
      success: "Повідомлення надіслано успішно!",
      error: "Помилка відправки повідомлення",
      namePlaceholder: "Ваше ім'я",
      emailPlaceholder: "ваш@email.com",
      messagePlaceholder: "Як ми можемо допомогти?",
    },
    en: {
      title: "Contact Us",
      desc: "We're open to cooperation, questions, and partnerships. Write to us!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      address: "1 Khreshchatyk St, Kyiv, Ukraine",
      phone: "+380 44 123 4567",
      success: "Message sent successfully!",
      error: "Error sending message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "How can we help?",
    },
  }

  const t = text[lang]

  async function onSubmit(e) {
    e.preventDefault()
    setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (!res.ok) throw new Error('Failed to send message')
      setName('')
      setEmail('')
      setMessage('')
      setStatus({ type: 'success', message: t.success })
    } catch (err) {
      setStatus({ type: 'error', message: t.error })
    }
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10" style={{backgroundImage:'url(https://images.unsplash.com/photo-1600959907703-5421cbbd89b8)', backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="absolute inset-0 bg-white/70" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <motion.h1 
          key={`title-${lang}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          {t.title}
        </motion.h1>
        
        <motion.p 
          key={`desc-${lang}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-700 text-lg mb-8"
        >
          {t.desc}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Форма */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={onSubmit} className="grid gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.name}
                </label>
                <input 
                  value={name} 
                  onChange={e=>setName(e.target.value)} 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all" 
                  placeholder={t.namePlaceholder}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.email}
                </label>
                <input 
                  value={email} 
                  onChange={e=>setEmail(e.target.value)} 
                  type="email" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all" 
                  placeholder={t.emailPlaceholder}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.message}
                </label>
                <textarea 
                  value={message} 
                  onChange={e=>setMessage(e.target.value)} 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all" 
                  placeholder={t.messagePlaceholder}
                  required
                />
              </div>
              
              <motion.button 
                whileHover={{scale:1.02}} 
                whileTap={{scale:0.98}}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {t.send}
              </motion.button>
            </form>
            
            {status && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-lg text-sm ${
                  status.type === 'success' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {status.message}
              </motion.div>
            )}
          </motion.div>

          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Карта */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                title="map" 
                src="https://www.google.com/maps?q=Kyiv&output=embed" 
                className="w-full h-64" 
                loading="lazy"
              />
            </div>
            
            {/* Информация */}
            <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">
                    {lang === 'ua' ? 'Адреса' : 'Address'}
                  </div>
                  <div className="text-gray-600">{t.address}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">Email</div>
                  <a href="mailto:info@lifeindrop.org" className="text-red-600 hover:text-red-700 transition">
                    info@lifeindrop.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <span className="text-2xl">☎️</span>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">
                    {lang === 'ua' ? 'Телефон' : 'Phone'}
                  </div>
                  <a href={`tel:${t.phone}`} className="text-red-600 hover:text-red-700 transition">
                    {t.phone}
                  </a>
                </div>
              </div>
              
              {/* Социальные сети */}
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-800 mb-3">
                  {lang === 'ua' ? 'Соціальні мережі' : 'Social Media'}
                </div>
                <div className="flex gap-3">
                  <a 
                    className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white transition text-sm font-medium" 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <a 
                    className="px-4 py-2 rounded-full bg-pink-100 text-pink-700 hover:bg-pink-600 hover:text-white transition text-sm font-medium" 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <a 
                    className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 hover:bg-sky-600 hover:text-white transition text-sm font-medium" 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

