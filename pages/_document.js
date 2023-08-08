import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="apple-touch-icon" href="/img/favicon/android-chrome-192x192.png" />
        <meta rel="theme-color" content="#FFFFFF" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
