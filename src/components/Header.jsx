import LogoWhite from '../assets/img/bub-white.webp'
import LogoBlack from '../assets/img/bub-black.webp'
import brPt from '../assets/img/brasil-96.png'
import eua from '../assets/img/eua-96.png'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import i18n from '../../i18n'

// Importe outras bibliotecas e módulos necessários

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
      className={`
      p-4 flex justify-between items-center font-light text-white z-10 fixed w-full px-4 lg:px-24  
      ${
        isScrolled
          ? 'bg-black max-sm:bg-black max-sm:text-white '
          : 'max-sm:bg-white max-md:text-black'
      }`}
    >
      <div className="flex items-center px-4">
        <img
          src={isScrolled ? LogoWhite : LogoBlack}
          alt="Logo"
          className="w-20 lg:w-28"
        />
      </div>
      <div className="flex items-center ">
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
        <div className="px-4 py-2">
          <img
            src={isLanguage === 'en' ? brPt : eua}
            alt="Language"
            className="w-7"
            onClick={() => changeLanguage(isLanguage === 'en' ? 'pt-BR' : 'en')}
          />
        </div>
      </div>
    </header>
  )
}
