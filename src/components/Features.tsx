import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Features = () => {
  const { t } = useTranslation()
  const features = t('features.items', { returnObjects: true }) as any[];
  
  return (
    <section id="features" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-medium text-white mb-16 tracking-tight text-center">
          {t('features.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-6xl lg:text-7xl font-light text-white tracking-tighter">{f.value}</span>
                <span className="text-xl text-white/50">{f.unit}</span>
              </div>
              <p className="text-white/60 text-lg leading-relaxed max-w-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
