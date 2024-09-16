import { useTranslation } from 'react-i18next'
import Chain from '../assets/img/5.png'
import Icon1 from '../assets/img/6.png'
import Icon2 from '../assets/img/7.png'
import Icon3 from '../assets/img/8.png'

export function ThirdSection() {
  const { t } = useTranslation()

  const sectionStyle = {
    backgroundImage: `url(${Chain})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <section
      style={sectionStyle}
      className="flex flex-col lg:flex-row-reverse max-sm:items-center md:p-20 "
    >
      <div className="w-full xl:w-2/3 p-4 max-sm:p-10 max-xl:bg-black/[.75] rounded-lg">
        <h3 className="w-full text-l text-white  max-sm:text-center">
          {t('withBlockchainTechnology')}
        </h3>
        <h3 className="font-bold text-3xl text-white pb-5 pt-14">
          {t('ourGoal')}
        </h3>
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-4 flex flex-col">
            <div className="bg-white p-4 pb-10 border rounded-lg">
              <h5 className="font-bold text-l">{t('yourDataPermanently')}</h5>
              <p className="font-light mt-3 text-gray-500">{t('withBub')}</p>
            </div>
            <div className="flex justify-end items-end w-full -mt-14">
              <img src={Icon1} alt="VR" className="w-40" />
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-4 flex flex-col">
            <div className="bg-white p-4 pb-10 border rounded-lg">
              <h5 className="font-bold text-l">{t('yourDataSafe')}</h5>
              <p className="font-light mt-3 text-gray-500">
                {t('beyondTheBuzz')}
              </p>
            </div>
            <div className="flex justify-end items-end w-full -mt-14">
              <img src={Icon2} alt="VR" className="w-40" />
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-4 flex flex-col">
            <div className="bg-white p-4 pb-10 border rounded-lg">
              <h5 className="font-bold text-l">{t('yourDataIs')}</h5>
              <p className="font-light mt-3 text-gray-500">{t('onceUponA')}</p>
            </div>
            <div className="flex justify-end items-end w-full -mt-14">
              <img src={Icon3} alt="VR" className="w-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
