import LogoWhite from '../assets/img/bub-white.webp'
import LogoBlack from '../assets/img/bub-black.webp'
import brPt from '../assets/img/brasil-96.png'
import eua from '../assets/img/eua-96.png'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import i18n from '../../i18n'
import { useSpring, animated } from 'react-spring'

export function Header() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLanguage, setIsLanguage] = useState('en')

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setIsLanguage(language)
  }

  const logoSpring = useSpring({
    transform: isScrolled ? 'scale(0.8)' : 'scale(1)',
    config: { tension: 300, friction: 20 },
  })

  const headerSpring = useSpring({
    backgroundColor: isScrolled ? 'black' : 'white',
    color: isScrolled ? 'white' : 'black',
    config: { tension: 300, friction: 20 },
  })

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <animated.header
      style={headerSpring}
      className={`p-4 flex justify-between items-center font-light text-white z-10 fixed w-full px-4 lg:px-24`}
    >
      <div className="flex items-center px-4">
        <animated.img
          style={logoSpring}
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
    </animated.header>
  )
}
