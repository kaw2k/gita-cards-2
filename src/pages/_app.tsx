import '../styles/reset.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import { DATABASE } from 'src/state'
import Head from 'next/head'
import { Cover, CoverPrimary } from 'src/components/every-layout/cover'
import { Center } from 'src/components/every-layout/center'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(true)
  const router = useRouter()

  React.useEffect(() => {
    DATABASE.init().then(() => {
      if (!DATABASE.user.email) {
        router.push('/login')
      }

      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" href="/logo-192.png"></link>
        <link rel="icon" sizes="192x192" href="/logo-192.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <title>Gita Cards</title>

        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ccc" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {loading ? (
        <Cover>
          <CoverPrimary>
            <Center andText component="h2">
              loading...
            </Center>
          </CoverPrimary>
        </Cover>
      ) : (
        <Component {...pageProps} />
      )}

      <style jsx global>{`
        :root {
          --ratio: 1.25;
          --s-5: calc(var(--s-4) / var(--ratio));
          --s-4: calc(var(--s-3) / var(--ratio));
          --s-3: calc(var(--s-2) / var(--ratio));
          --s-2: calc(var(--s-1) / var(--ratio));
          --s-1: calc(var(--s0) / var(--ratio));
          --s0: 1rem;
          --s1: calc(var(--s0) * var(--ratio));
          --s2: calc(var(--s1) * var(--ratio));
          --s3: calc(var(--s2) * var(--ratio));
          --s4: calc(var(--s3) * var(--ratio));
          --s5: calc(var(--s4) * var(--ratio));

          --black: #333;
          --blackLight: #444;
          --blackTransparent: #3332;
          --grayLight: #aaab;
          --white: #fafafa;
        }

        * {
          font-family: 'Noto Sans', Avenir, sans-serif;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          font-size: 16px;
          line-height: 1.5;
          color: var(--black);
          background-color: #eee;
        }

        @media (min-width: 600px) {
          html {
            font-size: 20px;
          }
        }

        @media (min-width: 1024px) {
          html {
            font-size: 26px;
          }
        }

        h1,
        .h1 {
          font-size: var(--s4);
          font-weight: normal;
        }
        h2,
        .h2 {
          font-size: var(--s3);
          font-weight: normal;
        }
        h3,
        .h3 {
          font-size: var(--s2);
          font-weight: normal;
        }
        h4,
        .h4 {
          font-size: var(--s1);
          font-weight: normal;
        }

        a {
          text-decoration: none;
          font-weight: bold;
          color: var(--black);
        }

        a:hover,
        a:active,
        a.active {
          text-decoration: underline;
        }

        button,
        label,
        input[type='radio'] {
          cursor: pointer;
        }

        button,
        input {
          border: 1px solid var(--black);
          border-radius: 5px;
          padding: 5px 10px;
          background-color: transparent;
          color: var(--black);
        }

        button:hover,
        button:active {
          background-color: var(--blackTransparent);
        }

        button.wrapper {
          border: none;
          background: transparent;
        }

        input {
          display: block;
          width: 100%;
          background-color: var(--white);
        }

        ul {
          list-style-position: inside;
        }
      `}</style>
    </div>
  )
}

export default MyApp
