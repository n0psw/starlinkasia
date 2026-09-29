import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const COUNTRIES = [
  { code: 'KZ', name: 'Казахстан', flag: '🇰🇿', url: 'https://starlink.com.kz', region: 'Central Asia' },
  { code: 'KG', name: 'Кыргызстан', flag: '🇰🇬', url: 'https://kg.starlink.com.kz', region: 'Central Asia' },
  { code: 'TJ', name: 'Таджикистан', flag: '🇹🇯', url: 'https://tj.starlink.com.kz', region: 'Central Asia' },
  { code: 'UZ', name: 'Узбекистан', flag: '🇺🇿', url: 'https://uz.starlink.com.kz', region: 'Central Asia' },
]

const Countries = () => {
  const { t } = useTranslation()
  return (
    <section id="countries" className="py-24 bg-[#05070a] relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 tracking-tight">{t('countries.title')}</h2>
            <p className="text-white/50 text-lg font-light">{t('countries.desc')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {COUNTRIES.map((c, i) => (
            <motion.a
              key={c.code}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block p-6 rounded-2xl border border-white/10 bg-[#0a0d12] hover:bg-[#11161d] hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />
              
              <div className="flex items-center justify-between mb-8">
                <span className="text-5xl drop-shadow-lg">{c.flag}</span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all">
                  <ExternalLink size={14} />
                </div>
              </div>
              
              <div>
                <div className="text-xs font-medium text-white/40 tracking-wider uppercase mb-1">{c.region}</div>
                <h3 className="text-2xl font-medium text-white">{c.name}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Countries
