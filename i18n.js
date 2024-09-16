import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "register": "Register",
          "singIn": "Sing In",
          "blockchainStorage": "Blockchain Storage",
          "theMostSecure": "The most secure way of storing data.",
          "theEasiestWay": "The easiest way for your company to jump into blockchain technology.",
          "ourAimIs": "Our aim is to make blockchain techonology easily accessible for companies, governments, and for everyone who is seeking for a second layer of data security for all sorts of files. We work so that everyone will be able to registrer information in the blockchain in such a way that it will always be there, safe and sound, even when your main storage goes through any sort of loss, even undesirable malicious activity.",
          "withBlockchainTechnology": " With BuB, blockchain technology is used to ensure data’s integrity and reliability. Our cryptographic algorithms and protocols are set to protect our customer’s confidential information. By the way, being integrated with Algorand ecosystem means that data is stored and verified by multiple network participants. Single point of failure becomes history, as much as data manipulation or modification.",
          "ourGoal": "Our goal",
          "yourDataPermanently": "Your data permanently stored.",
          "withBub": "With BUB, everyone can store sensitive data in the Blockchain. This way, stored data will remain safe and accessible anytime, even if you are overtaken by unexpected or undesired events.",
          "yourDataSafe": "Your data safe and sound.",
          "beyondTheBuzz": "Beyond the buzz, we offer Web3 decentralized data storage with blockchain technology. With our encryption, this means no data theft, no hijacking.",
          "yourDataIs": "Your data is well protected.",
          "onceUponA": "Once upon a time, cloud storage was cool. Today it is much Better use Blockchain.",
          "betterUseBlockchain": "BETTER USE BLOCKCHAIM",
          "socialMedia": "Social Media",
          "allRights": "All rights reserved.",
          "privacyPolices": "Privacy Policies",
          "termsOfUse": "Terms of Use"
        },
      },
      pt: {
        translation: {
          "register": "Criar Conta",
          "singIn": "Entrar",
          "blockchainStorage": "Blockchain Storage",
          "theMostSecure": "A maneira mais segura de armazenamento de dados.",
          "theEasiestWay": "A forma mais simples da sua empresa utilizar a tecnologia blockchain.",
          "ourAimIs": "A BUB busca facilitar o acesso à tecnologia blockchain para empresas, governos e pessoas físicas que desejam e precisam de uma segunda camada de segurança para as informações confiadas a eles. Empresas poderão registrar suas informações na blockchain, e elas estarão disponíveis para acesso em caso de atividades maliciosas.",
          "withBlockchainTechnology": "Com a tecnologia blockchain, podemos garantir a integridade e a confiabilidade dos dados de forma inabalável. Utilizamos protocolos de criptografía avançados e algoritmos robustos para proteger as informações confidenciais dos nossos clientes. Nossa plataforma é construída utilizando a tecnologia da ALGORAND, o que significa que os dados são armazenados e verificados por múltiplos participantes da rede. Isso elimina o ponto único de falha e impede a manipulação ou alteração indesejada dos dados.",
          "ourGoal": "Nosso Propósito",
          "yourDataPermanently": "Seus dados armazenados permanentemente",
          "withBub": "Com o BUB, todos podem armazenar dados confidenciais no Blockchain. Desta forma, os dados armazenados permanecerão seguros e acessíveis a qualquer momento, mesmo que você seja surpreendido por eventos inesperados ou indesejados.",
          "yourDataSafe": "Seus dados salvos",
          "beyondTheBuzz": "Oferecemos armazenamento de dados descentralizado Web3 com tecnologia blockchain. Com nossa criptografia, significa nenhum roubo de dados, nenhum sequestro.",
          "yourDataIs": "Seus Dados estão bem protegidos",
          "onceUponA": "Cloud já foi um local seguro, hoje o que se tem de mais protegido é o blockchain e isso cresce a cada dia.",
          "betterUseBlockchain": "BETTER USE BLOCKCHAIM",
          "socialMedia": "Medias Sociais",
          "allRights": "Todos os direitos reservados.",
          "privacyPolices": "Políticas de Privacidade",
          "termsOfUse": "Termos de Uso"
        },
      },
    },
    lng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n
