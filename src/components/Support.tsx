import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Support = () => {
  const { t } = useTranslation()
  const faqs = t('support.items', { returnObjects: true }) as { q: string, a: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="support" className="py-24 bg-[#05070a] border-t border-white/5 relative">
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-12 tracking-tight">
          {t('support.title')}
        </h2>
        
        <div className="flex flex-col border-t border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-lg text-white font-medium pr-8 group-hover:text-white/80 transition-colors">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 text-white/50 group-hover:text-white transition-colors">
                    {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-white/60 text-[15px] leading-relaxed pr-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Support
