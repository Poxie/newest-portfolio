import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { PopupProvider } from '../contexts/PopupProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <PopupProvider>
      <Component {...pageProps} />
    </PopupProvider>
  )
}
export default MyApp
