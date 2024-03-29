import './styles/styles.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: "GTM-TVK7PSL",
}

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return <Component {...pageProps} />
}

export default App
