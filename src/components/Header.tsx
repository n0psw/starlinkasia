import { useState, useEffect, useRef } from 'react'
import { Menu, X, Globe, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import ScrollProgress from './ScrollProgress'

const loginUrl = 'https://starlink.com/auth/login?ReturnUrl=https%3A%2F%2Fstarlink.com%2Faccount'
const accountUrl = 'https://starlink.com/account'

const LANGUAGES = [
  { code: 'ru', label: 'Русский' },
  { code: 'kk', label: 'Қазақша' },
  { code: 'ky', label: 'Кыргызча' },
  { code: 'uz', label: "O'zbekcha" },
  { code: 'tg', label: 'Тоҷикӣ' },
]

const Header = () => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [langOpen, setLangOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  
  const navLinks = [
    { id: 'map', label: t('nav.map') },
    { id: 'countries', label: t('nav.countries') },
    { id: 'features', label: t('nav.features') },
    { id: 'setup', label: t('nav.setup') },
    { id: 'specs', label: t('nav.specs') },
    { id: 'calculator', label: t('nav.calc') || 'Калькулятор' },
    { id: 'support', label: t('nav.support') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const ids = navLinks.map(l => l.id)
      const pos = window.scrollY + 200
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && pos >= el.offsetTop) { setActiveSection(ids[i]); return }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks])

  useEffect(() => {
    if (!isMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false)
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey) }
  }, [isMenuOpen])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = headerRef.current?.offsetHeight ?? 64
      window.scrollTo({ top: el.offsetTop - offset - 8, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const changeLang = (code: string) => {
    i18n.changeLanguage(code)
    setLangOpen(false)
  }

  return (
    <header ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}>
      <ScrollProgress />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-14 md:h-16">
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}) }}
            className="flex items-center gap-1 flex-shrink-0">
            <span className="text-white font-semibold text-[15px] tracking-[2px] uppercase">STARLINK</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)}
                className="px-3 py-1.5 text-[12px] uppercase tracking-wider font-medium rounded transition-colors duration-200"
                style={{
                  color: activeSection === link.id ? '#fff' : 'rgba(255,255,255,0.6)',
                  background: activeSection === link.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                }}>
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            
            <div className="hidden xl:flex flex-col items-end gap-1">
              <a href="tel:+77007006613"
                className="text-[11px] text-white/50 hover:text-white transition-colors">
                +7 700 700 6613
              </a>
              <a href="tel:+77019444441"
                className="text-[11px] text-white/50 hover:text-white transition-colors">
                +7 701 944 4441
              </a>
            </div>
            
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)}
                className="hidden md:inline-flex items-center gap-1 px-2 h-8 rounded transition-colors text-[12px] text-white/70 hover:text-white"
                style={{ background: langOpen ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)' }}>
                <Globe size={14} />
                <span className="uppercase">{i18n.language}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 w-32 rounded-lg bg-[#16191d] border border-white/10 shadow-2xl overflow-hidden py-1">
                  {LANGUAGES.map(l => (
                    <button key={l.code} onClick={() => changeLang(l.code)}
                      className="w-full text-left px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href={accountUrl} target="_blank" rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors"
              style={{ background: 'rgba(255,255,255,0.08)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}>
              <User size={14} color="#fff" />
            </a>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded transition-colors text-white">
              {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex flex-col pt-3 gap-1">
              {navLinks.map(link => (
                <button key={link.id} onClick={() => scrollTo(link.id)}
                  className="text-left px-3 py-2.5 text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors rounded"
                  style={{ background: activeSection === link.id ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                  {link.label}
                </button>
              ))}
              
              <div className="px-3 py-2 flex flex-wrap gap-2 mt-2">
                {LANGUAGES.map(l => (
                  <button key={l.code} onClick={() => changeLang(l.code)}
                    className="px-2 py-1 text-xs rounded border border-white/20 text-white/70"
                    style={{ background: i18n.language === l.code ? 'rgba(255,255,255,0.1)' : 'transparent' }}>
                    {l.label}
                  </button>
                ))}
              </div>

              <div className="mt-2 pt-2 flex flex-col gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <a href="tel:+77007006613" className="px-3 py-2 text-sm text-white/50">+7 700 700 6613</a>
                <a href="tel:+77019444441" className="px-3 py-2 text-sm text-white/50">+7 701 944 4441</a>
                <a href={loginUrl} target="_blank" rel="noopener noreferrer"
                  className="mx-3 mt-1 py-2.5 text-center text-sm font-medium rounded text-black bg-white">
                  {t('nav.signIn')}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
