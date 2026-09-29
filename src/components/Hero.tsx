import { motion } from 'framer-motion'
import { ArrowRight, Satellite, Search, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import TopBanner from './TopBanner'

const COUNTRIES = [
  { code: 'KZ', name: 'Казахстан', flag: '🇰🇿', url: 'https://starlink.com.kz' },
  { code: 'KG', name: 'Кыргызстан', flag: '🇰🇬', url: 'https://kg.starlink.com.kz' },
  { code: 'TJ', name: 'Таджикистан', flag: '🇹🇯', url: 'https://tj.starlink.com.kz' },
  { code: 'UZ', name: 'Узбекистан', flag: '🇺🇿', url: 'https://uz.starlink.com.kz' },
]

const Hero = () => {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  const filtered = COUNTRIES.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="relative min-h-[100vh] flex flex-col pt-16">
      <TopBanner />
      
      {/* Animated Space Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#020406]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05] mix-blend-screen" />
        
        {/* Glow effect */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 60%)',
            filter: 'blur(80px)'
          }}
        />

        {/* CSS Planet Curve */}
        <div className="absolute -bottom-[60%] left-1/2 -translate-x-1/2 w-[200%] aspect-square rounded-full border-t border-white/10"
          style={{
            background: 'radial-gradient(circle at center, #08121f 0%, #000000 70%)',
            boxShadow: '0 -20px 100px rgba(255,255,255,0.02)'
          }}
        />
      </div>

      <div className="flex-1 max-w-[1400px] mx-auto px-6 md:px-10 w-full flex flex-col justify-center relative z-10 py-20 items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl w-full flex flex-col items-center">
          
          

          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-medium text-white leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-2xl font-light">
            {t('hero.desc')}
          </p>
          
          {/* Interactive Search exactly like Starlink.com "Service Address" */}
          <div className="relative w-full max-w-lg mb-8">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={20} className="text-white/40 group-focus-within:text-white/80 transition-colors" />
              </div>
              <input
                type="text"
                placeholder={t('hero.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowDropdown(true); }}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                className="w-full bg-[#111418] border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-lg shadow-2xl"
              />
            </div>
            
            {showDropdown && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#161a20] border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
                {filtered.length > 0 ? (
                  filtered.map(c => (
                    <a key={c.code} href={c.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/5 last:border-0 group">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{c.flag}</span>
                        <span className="text-white text-base font-medium">{c.name}</span>
                      </div>
                      <ArrowRight size={18} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </a>
                  ))
                ) : (
                  <div className="px-4 py-4 text-white/50 text-sm text-center">
                    Не найдено
                  </div>
                )}
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default Hero
