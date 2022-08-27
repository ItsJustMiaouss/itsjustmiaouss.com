import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="I'm ItsJustMiaouss, a passionate developer from France! Visit my website and send me a message!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="I'm ItsJustMiaouss, a passionate developer from France! Visit my website and send me a message!"
        />
        <meta property="og:site_name" content="ItsJustMiaouss" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <Head />
        <body className="h-screen text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
