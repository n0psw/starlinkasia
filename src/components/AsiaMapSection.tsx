import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AsiaMap from './AsiaMap'

const AsiaMapSection = () => {
  const { t } = useTranslation()
  return (
    <section id="map" className="py-24 bg-black relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative rounded-[20px] p-[1px] overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)'
          }}>
          <div className="bg-[#05070a] rounded-[20px] overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]" />
            <AsiaMap />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AsiaMapSection
