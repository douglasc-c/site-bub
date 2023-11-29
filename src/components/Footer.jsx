import LogoWhite from '../assets/img/bub-white.webp'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-black">
      <div className="flex flex-col items-center pt-10 md:pt-28">
        <img src={LogoWhite} alt="Logo" className="w-20 md:w-32" />
        <p className="text-white font-light py-5">{t('betterUseBlockchain')}</p>
        <p className="text-white font-bold text-xl md:text-2xl">
          {t('socialMedia')}
        </p>
        <ul className="list-none flex justify-center space-x-4 pb-10 pt-2">
          <li>
            <a
              href="https://www.instagram.com/betteruseblockchain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center justify-center bg-slate-800 rounded-full w-10 h-10"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/better-use-blockchain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center justify-center bg-gray-800 rounded-full w-10 h-10"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Bubstorage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center justify-center bg-gray-800 rounded-full w-10 h-10"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:help@betteruseblockchain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center justify-center bg-gray-800 rounded-full w-10 h-10"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="py-5 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-900 font-light">
        <div className="flex flex-col md:flex-row items-center text-white space-y-2 md:space-x-4 md:space-y-0">
          <p>Copyright@BUB 2023. {t('allRights')}</p>
          <p>CNPJ: 50.064.453/0001-50</p>
        </div>
        <div className="flex items-center text-white space-x-4 md:pl-2.5 py-2">
          <a
            href="/assets/pdfs/politica_de_privacidade.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('privacyPolices')}
          </a>
          <a
            href="/assets/pdfs/termos_de_uso.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('termsOfUse')}
          </a>
        </div>
      </div>
    </footer>
  )
}
