import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <meta charset="UTF-8" />
        <meta name="description" content="I'm ItsJustMiaouss, a passionate Web Developer from France! I also love to code in all programming languages. Visit my website and send me a message!" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ellekasai/twemoji-awesome@gh-pages/twemoji-awesome.css" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <Head />
        <body className="h-screen text-white font-firacode">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument