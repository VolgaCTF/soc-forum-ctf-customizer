import EmailGenerator from './email-generator'
import path from 'path'

export default class DefaultCustomizer {
  static customizerName = 'soc-forum-ctf'

  constructor () {
    this.emailGenerator = new EmailGenerator()
  }

  getEmailGenerator () {
    return this.emailGenerator
  }

  getEventTitle () {
    return 'SOC-Forum CTF'
  }

  getPartials () {
    return {
      footer: {
        path: path.join(__dirname, '..', 'partials', 'footer.html')
      },
      about: {
        path: path.join(__dirname, '..', 'partials', 'about.html')
      },
      intro: {
        path: path.join(__dirname, '..', 'partials', 'intro.html')
      },
      favicons: {
        path: path.join(__dirname, '..', 'partials', 'favicons.html')
      }
    }
  }

  getImages () {
    return []
  }

  getFonts () {
    return []
  }

  getStylesheets () {
    return []
  }
}
