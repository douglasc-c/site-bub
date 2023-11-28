import LogoWhite from '../assets/img/bub-white.webp'
import LogoBlack from '../assets/img/bub-black.webp'
import brPt from '../assets/img/brasil-96.png'
import eua from '../assets/img/eua-96.png'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import i18n from '../../i18n'

export function Header() {
  const { t } = useTranslation()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isLanguage, setIsLanguade] = useState('en')

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setIsLanguade(language)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={
        isScrolled
          ? 'p-4 flex justify-between items-center text-white z-10 bg-black fixed w-full px-24'
          : 'p-4 flex justify-between items-center text-white z-10  fixed w-full px-24'
      }
    >
      <div className="flex items-center">
        {isScrolled ? (
          <img src={LogoWhite} alt="Logo" className="w-28" />
        ) : (
          <img src={LogoBlack} alt="Logo" className="w-28" />
        )}
      </div>
      <div className="flex items-center space-x-4">
        <a
          className="decoration-white px-4 py-2"
          href="https://dash.betteruseblockchain.com/register"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('register')}
        </a>
        <a
          className="decoration-white px-4 py-2"
          href="https://dash.betteruseblockchain.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('singIn')}
        </a>
        {isLanguage === 'en' ? (
          <img
            src={brPt}
            alt="Language"
            className="w-7 cursor-pointer"
            onClick={() => changeLanguage('pt-BR')}
          />
        ) : (
          <img
            src={eua}
            alt="Language"
            className="w-7 cursor-pointer"
            onClick={() => changeLanguage('en')}
          />
        )}
      </div>
    </header>
  )
}
