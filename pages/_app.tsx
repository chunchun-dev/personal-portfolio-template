import { createContext } from 'react'
import { Navbar } from '../components/Navbar'
import '../styles/globals.css'
import UserContext, {UserConfig} from '../userConfig'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={UserConfig}>
      <Head>
        <title>{UserConfig.name}</title>
      </Head>
      <Navbar navItems={[ 'navbar item', 'item 2' ]}/>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp