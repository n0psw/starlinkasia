import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CloudSun, Plug, Wifi } from 'lucide-react'

const Setup = () => {
  const { t } = useTranslation()
  const steps = t('setup.steps', { returnObjects: true }) as { title: string, desc: string }[]

  const icons = [
    <CloudSun size={32} strokeWidth={1.5} />,
    <Plug size={32} strokeWidth={1.5} />,
    <Wifi size={32} strokeWidth={1.5} />
  ]

  return (
    <section id="setup" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side - Real Hardware Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-video lg:aspect-square bg-[#05070a] rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
            
            <img 
              src="https://pngimg.com/uploads/starlink/starlink_PNG10.png" 
              alt="Starlink Kit" 
              className="relative w-[80%] h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
            />

          </motion.div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              {t('setup.title')}
            </h2>
            <p className="text-xl text-white/50 font-light mb-12 max-w-lg leading-relaxed">
              {t('setup.desc')}
            </p>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                    {icons[i]}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                    <p className="text-white/50 text-[15px]">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Setup
