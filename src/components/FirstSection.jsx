import MenACircul from '../assets/img/3.png'
import { useTranslation } from 'react-i18next'

export function FirstSection() {
  const { t } = useTranslation()

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className=" md:w-1/2 mb-8 md:mb-0 bg-gradient-to-r from-white from-80% via-white via-10% to-black to-10% pt-[81px]">
          <img src={MenACircul} alt="robot hand" className="" />
        </div>
        <div className="md:w-1/2 text-center md:text-left pt-[81px]">
          <div className="py-16 md:pl-6">
            <h1 className="font-bold text-5xl text-white">
              {t('blockchainStorage')}
            </h1>
            <p className="text-l text-white font-light mt-2">
              {t('theMostSecure')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
