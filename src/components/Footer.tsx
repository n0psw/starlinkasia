import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-white font-semibold text-lg tracking-[2px] uppercase mb-4">STARLINK ASIA</div>
            <p className="text-white/50 text-sm max-w-sm">{t('footer.desc')}</p>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-medium mb-4 uppercase tracking-wider">{t('footer.contacts')}</h4>
            <ul className="space-y-3">
              <li><a href="tel:+77007006613" className="text-white/50 hover:text-white transition-colors text-sm">+7 700 700 6613</a></li>
              <li><a href="tel:+77019444441" className="text-white/50 hover:text-white transition-colors text-sm">+7 701 944 4441</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-medium mb-4 uppercase tracking-wider">{t('footer.connect')}</h4>
            <ul className="space-y-3">
              <li><a href="https://starlink.com.kz" className="text-white/50 hover:text-white transition-colors text-sm">Казахстан</a></li>
              <li><a href="https://kg.starlink.com.kz" className="text-white/50 hover:text-white transition-colors text-sm">Кыргызстан</a></li>
              <li><a href="https://uz.starlink.com.kz" className="text-white/50 hover:text-white transition-colors text-sm">Узбекистан</a></li>
              <li><a href="https://tj.starlink.com.kz" className="text-white/50 hover:text-white transition-colors text-sm">Таджикистан</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
