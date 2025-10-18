import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import HeroSlider from '../components/HeroSlider'
import AboutUs from '../components/AboutUs'
import HowWeWorkWithLang from '../components/HowWeWorkWithLang'
import ProjectsWithLang from '../components/ProjectsWithLang'
import SupportUs from '../components/SupportUs'
import Contacts from '../components/Contacts'

function Counter({ value, label }: { value: number, label: string }) {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    let raf: number
    const start = performance.now()
    const duration = 1200
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setCount(Math.floor(p * value))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [value])
  return (
    <div className="p-6 rounded-2xl bg-white/80 backdrop-blur border text-center">
      <div className="text-4xl font-extrabold text-brand">{count}</div>
      <div className="text-sm text-gray-700 mt-1">{label}</div>
    </div>
  )
}

export default function Home() {
  const { t: tOld } = useTranslation()
  const { lang } = useLanguage()
  
  // Локальные переводы для Home
  const text = {
    ua: {
      heroTitle: "Кожна крапля має значення",
      heroSubtitle: "Допоможіть нам подарувати надію тим, хто бореться з раком крові",
      heroCta: "Підтримати",
      ourProjects: "Наші проекти",
      livesSaved: "Врятованих життів",
      donorsJoined: "Донорів приєдналося",
      treatmentsFunded: "Профінансованих лікувань",
      joinDonor: "Станьте донором і рятуйте життя",
      contact: "Зв'язатися",
    },
    en: {
      heroTitle: "Every Drop Matters",
      heroSubtitle: "Help us give hope to those fighting blood cancer",
      heroCta: "Donate Now",
      ourProjects: "Our Projects",
      livesSaved: "Lives Saved",
      donorsJoined: "Donors Joined",
      treatmentsFunded: "Treatments Funded",
      joinDonor: "Become a donor and save lives",
      contact: "Contact",
    }
  }
  
  const t = text[lang]
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline src="https://videos.pexels.com/video-files/3195398/3195398-hd_1920_1080_25fps.mp4" />
          <div className="absolute inset-0 bg-white/50" />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            key={`hero-${lang}`}
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}} 
            transition={{duration:0.6}}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-navy">{t.heroTitle}</h1>
            <p className="mt-4 text-lg text-navy/80">{t.heroSubtitle}</p>
            <div className="mt-8 flex gap-3">
              <a className="bg-brand text-white px-6 py-3 rounded-full shadow hover:shadow-[0_0_0_6px_rgba(230,57,70,0.2)] transition-transform hover:scale-105" href="/donate">{t.heroCta}</a>
              <a className="px-6 py-3 rounded-full border border-brand text-brand hover:bg-brand hover:text-white" href="/projects">{t.ourProjects}</a>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}}>
            <div className="relative aspect-video rounded-2xl border overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80" 
                alt="Medical care and hope"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/40 via-transparent to-transparent" />
              <motion.div 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:0.3}}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl"
              >
                <div className="text-navy font-bold text-lg">💉 Професійна медична допомога</div>
                <div className="text-navy/70 text-sm mt-1">Professional Medical Care</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-20 grid sm:grid-cols-3 gap-4">
          <motion.div 
            key={`counter1-${lang}`}
            initial={{opacity:0, y:16}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}} 
            transition={{duration:0.5}}
          >
            <Counter value={350} label={t.livesSaved} />
          </motion.div>
          <motion.div 
            key={`counter2-${lang}`}
            initial={{opacity:0, y:16}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}} 
            transition={{duration:0.5, delay:0.1}}
          >
            <Counter value={1200} label={t.donorsJoined} />
          </motion.div>
          <motion.div 
            key={`counter3-${lang}`}
            initial={{opacity:0, y:16}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}} 
            transition={{duration:0.5, delay:0.2}}
          >
            <Counter value={540} label={t.treatmentsFunded} />
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-20">
          <HeroSlider />
          <motion.div 
            key={`cta-${lang}`}
            initial={{opacity:0, y:16}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className="mt-8 p-6 rounded-2xl border bg-white flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="text-navy font-semibold">{t.joinDonor}</div>
            <a href="/contact" className="px-5 py-2 rounded-full bg-brand text-white hover:opacity-90">{t.contact}</a>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Projects Section - Enhanced with i18n */}
      <ProjectsWithLang />

      {/* How We Work Section - Enhanced with i18n */}
      <HowWeWorkWithLang />

      {/* Support Us Section */}
      <SupportUs />

      {/* Contacts Section */}
      <Contacts />
    </>
  )
}



