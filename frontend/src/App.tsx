import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from './context/LanguageContext'
import HowPage from './pages/How'
import i18n from './i18n'
import Home from './pages/Home'
import AboutWithLang from './pages/AboutWithLang'
import ProjectsPage from './pages/Projects'
import Donate from './pages/Donate'
import ContactWithLang from './pages/ContactWithLang'
import Footer from './components/Footer'

function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()
  return (
    <button 
      onClick={toggleLang}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-brand text-brand font-semibold hover:bg-brand hover:text-white transition-all duration-300 text-sm"
    >
      <span className="text-lg">{lang === 'ua' ? '🇺🇦' : '🇬🇧'}</span>
      <span>{lang === 'ua' ? 'EN' : 'UA'}</span>
    </button>
  )
}

function NavBar() {
  const { t } = useLanguage()
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-extrabold text-brand hover:scale-105 transition-transform">
          {t('site.name')}
        </NavLink>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <NavLink to="/" className={({isActive})=>`hover:text-brand transition ${isActive?'text-brand font-semibold':''}`}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/about" className={({isActive})=>`hover:text-brand transition ${isActive?'text-brand font-semibold':''}`}>
            {t('nav.about')}
          </NavLink>
          <NavLink to="/how" className={({isActive})=>`hover:text-brand transition ${isActive?'text-brand font-semibold':''}`}>
            {t('nav.how')}
          </NavLink>
          <NavLink to="/projects" className={({isActive})=>`hover:text-brand transition ${isActive?'text-brand font-semibold':''}`}>
            {t('nav.projects')}
          </NavLink>
          <NavLink to="/contact" className={({isActive})=>`hover:text-brand transition ${isActive?'text-brand font-semibold':''}`}>
            {t('nav.contact')}
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <NavLink to="/donate" className="md:inline-flex hidden bg-brand text-white px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all">
            {t('nav.donate')}
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default function App() {
  const location = useLocation()
  useEffect(()=>{
    const saved = localStorage.getItem('lang') as 'en' | 'ua' | null
    if (saved) {
      i18n.changeLanguage(saved)
    }
  }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{opacity:0, y: 8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-8}} transition={{duration:0.3}}>
            <Suspense fallback={null}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutWithLang />} />
                <Route path="/how" element={<HowPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/contact" element={<ContactWithLang />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}



