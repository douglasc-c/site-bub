import { useTranslation } from 'react-i18next'
import GirlABlock from '../assets/img/10.png'

export function SecondeSection() {
  const { t } = useTranslation()

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left pl-20">
          <h1 className="font-bold text-3xl text-white">
            {t('theEasiestWay')}
          </h1>
          <p className="text-l pt-5 text-white font-light">{t('ourAimIs')}</p>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0 bg-gradient-to-r from-black from-60% to-white to-40%">
          <img src={GirlABlock} alt="robot hand" className="" />
        </div>
      </div>
    </section>
  )
}
