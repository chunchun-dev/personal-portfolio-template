import { createContext } from 'react'
import { Navbar } from '../components/Navbar'
import '../styles/globals.css'
import UserContext, {UserConfig} from '../userConfig'

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={UserConfig}>
      <Navbar navItems={[ 'navbar item', 'item 2' ]}/>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp