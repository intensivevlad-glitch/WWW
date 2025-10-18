import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Heart, ShieldCheck, Sun } from 'lucide-react'

export default function About() {
  const { t } = useTranslation()
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">{t('about.title')}</h2>
          <p className="mt-4 text-navy/80">{t('about.body')}</p>
        </motion.div>
        <motion.div initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
          <img className="w-full rounded-2xl border" src="https://images.unsplash.com/photo-1584515933487-779824d29309" alt="About" />
        </motion.div>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[{icon: ShieldCheck, key:'transparency'}, {icon: Heart, key:'compassion'}, {icon: Sun, key:'hope'}].map(({icon:Icon, key}, i)=> (
          <motion.div key={key} initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-6 rounded-2xl border bg-white">
            <Icon className="text-brand" />
            <h3 className="font-semibold text-lg mt-3">{t(`about.values.${key}`)}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  )
}



