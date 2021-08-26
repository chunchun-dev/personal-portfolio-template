import { createContext } from 'react'
import { Navbar } from '../components/Navbar'
import '../styles/globals.css'
import UserContext from '../userConfig'
import userConfig from '../CONFIGURATION'
import Head from 'next/head'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={userConfig}>
      <Head>
        <title>{userConfig.name}</title>
      </Head>
      <Navbar navItems={[ 'navbar item', 'item 2' ]}/>
      <Component {...pageProps} />
      <Footer desc={userConfig.footerDesc} title={userConfig.footerTitle} email={userConfig.email}/>
    </UserContext.Provider>
  )
}

export default MyApp