import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from "@/components/Footer";
//import {wrapper} from '@/modules/store'
import Nav  from '@/components/Nav'

function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {
  return ( 
    <>
    <Nav/>
    <Component {...pageProps} />
    <Footer/>
    <style jsx>{`
        a{
            textDecoration: none;
        }
    `}</style>
    </>
  )
}

export default MyApp
