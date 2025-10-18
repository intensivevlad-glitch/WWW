import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const { t } = useTranslation()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (!res.ok) throw new Error('Failed to send message')
      setName(''); setEmail(''); setMessage('')
      setStatus('Message sent successfully!')
    } catch (err: any) {
      setStatus(err.message || 'Error sending message')
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10" style={{backgroundImage:'url(https://images.unsplash.com/photo-1600959907703-5421cbbd89b8)', backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="absolute inset-0 bg-white/70" />
      </div>
      <div className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">{t('contact.title')}</h2>
      <p className="mt-4 text-gray-700">{t('contact.desc')}</p>
      <form onSubmit={onSubmit} className="mt-8 grid gap-4">
        <div>
          <label className="block text-sm font-medium">{t('contact.name')}</label>
          <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full border rounded-xl px-3 py-2" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium">{t('contact.email')}</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="mt-1 w-full border rounded-xl px-3 py-2" placeholder="jane@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium">{t('contact.message')}</label>
          <textarea value={message} onChange={e=>setMessage(e.target.value)} className="mt-1 w-full border rounded-xl px-3 py-2" rows={5} placeholder="How can we help?" />
        </div>
        <motion.button whileHover={{scale:1.04}} className="bg-brand text-white px-5 py-2 rounded-full w-fit">{t('contact.send')}</motion.button>
      </form>
      {status && <div className="mt-4 text-sm">{status}</div>}

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden border">
          <iframe title="map" src="https://www.google.com/maps?q=Kyiv&output=embed" className="w-full h-64" loading="lazy"></iframe>
        </div>
        <div className="p-6 rounded-2xl border bg-white">
          <div className="text-sm text-gray-700">📍 {t('contact.address')}</div>
          <div className="text-sm text-gray-700 mt-2">✉️ info@lifeindrop.org</div>
          <div className="text-sm text-gray-700 mt-2">☎️ {t('contact.phone')}</div>
          <div className="flex gap-3 mt-4">
            <a className="p-2 rounded-full bg-sky-25 hover:bg-brand hover:text-white" href="#">Facebook</a>
            <a className="p-2 rounded-full bg-sky-25 hover:bg-brand hover:text-white" href="#">Instagram</a>
            <a className="p-2 rounded-full bg-sky-25 hover:bg-brand hover:text-white" href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}



