import { useTranslation } from 'react-i18next'
import GirlABlock from '../assets/img/10.png'

export function SecondSection() {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="md:w-1/2 max-sm:w-full text-center md:text-left md:pl-20 md:py-20 max-sm:p-10 max-md:px-20 max-md:py-20">
        <h1 className="font-bold text-3xl text-white">{t('theEasiestWay')}</h1>
        <p className="text-md pt-5 text-white font-light">{t('ourAimIs')}</p>
      </div>
      <div className="md:w-1/2 max-sm:w-full bg-gradient-to-r from-black from-60% to-white to-40%">
        <img src={GirlABlock} alt="robot hand" className="w-full" />
      </div>
    </section>
  )
}
