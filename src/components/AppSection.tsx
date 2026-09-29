import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Smartphone, Download, Settings, BarChart2 } from 'lucide-react'

const AppSection = () => {
  const { t } = useTranslation()
  return (
    <section className="py-32 bg-[#020406] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
          
          {/* Phone Mockup Side */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[580px] rounded-[40px] border-[6px] border-[#1f2226] bg-black shadow-[0_0_80px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col items-center">
              {/* Notch */}
              <div className="absolute top-0 w-32 h-6 bg-[#1f2226] rounded-b-xl z-10" />
              
              {/* Fake UI */}
              <div className="w-full h-full pt-16 px-6 bg-gradient-to-b from-[#0a0d12] to-black">
                <div className="w-full flex justify-between items-center mb-10">
                  <span className="text-white/80 font-semibold tracking-widest text-xs uppercase">STARLINK</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Smartphone size={14} className="text-white" /></div>
                </div>
                
                <div className="w-40 h-40 mx-auto rounded-full border border-green-500/30 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(34,197,94,0.1)]">
                  <div className="w-32 h-32 rounded-full border border-green-500/50 flex items-center justify-center bg-green-500/5">
                    <span className="text-green-500 font-medium">ONLINE</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 rounded-xl p-4 flex flex-col items-center gap-2">
                    <BarChart2 size={20} className="text-white/60" />
                    <span className="text-white/40 text-xs">Statistics</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 flex flex-col items-center gap-2">
                    <Settings size={20} className="text-white/60" />
                    <span className="text-white/40 text-xs">Settings</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 text-white">
              <Smartphone size={24} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              {t('app.title')}
            </h2>
            <p className="text-xl text-white/50 font-light mb-10 max-w-lg leading-relaxed">
              {t('app.desc')}
            </p>

            <a href="#" className="inline-flex items-center gap-3 px-6 py-4 rounded-lg border border-white/20 hover:bg-white hover:text-black hover:border-transparent text-white transition-all w-fit group">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              <span className="font-medium text-sm">{t('app.download')}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AppSection
