import Header from '@components/Header'
import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState'
import Script from 'next/script'
import '@styles/globals.css'

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FB8ZBM989Q" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FB8ZBM989Q');
        `}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
