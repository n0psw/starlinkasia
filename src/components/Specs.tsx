import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Specs = () => {
  const { t } = useTranslation()
  const items = t('specs.items', { returnObjects: true }) as { label: string, value: string }[]

  return (
    <section id="specs" className="py-32 bg-[#05070a] border-t border-white/5 relative">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-16 tracking-tight text-center">
          {t('specs.title')}
        </h2>
        
        <div className="flex flex-col">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center py-6 border-b border-white/10 last:border-0 gap-2 md:gap-8"
            >
              <div className="md:w-1/3 text-white/60 font-medium tracking-wide text-sm uppercase">
                {item.label}
              </div>
              <div className="md:w-2/3 text-white text-lg">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specs
