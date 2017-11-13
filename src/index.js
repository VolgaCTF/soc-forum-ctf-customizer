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
      head: {
        path: path.join(__dirname, '..', 'partials', 'head.html')
      }
    }
  }

  getImages () {
    return [
      'apple-touch-icon-114x114.png',
      'apple-touch-icon-120x120.png',
      'apple-touch-icon-144x144.png',
      'apple-touch-icon-152x152.png',
      'apple-touch-icon-57x57.png',
      'apple-touch-icon-60x60.png',
      'apple-touch-icon-72x72.png',
      'apple-touch-icon-76x76.png',
      'favicon-128.png',
      'favicon-16x16.png',
      'favicon-196x196.png',
      'favicon-32x32.png',
      'favicon-96x96.png',
      'favicon.ico',
      'mstile-144x144.png',
      'mstile-150x150.png',
      'mstile-310x150.png',
      'mstile-310x310.png',
      'mstile-70x70.png'
    ].map((imagePath) => {
      return path.join(__dirname, '..', 'images', imagePath)
    })
  }

  getFonts () {
    return []
  }

  getStylesheets () {
    return []
  }
}
