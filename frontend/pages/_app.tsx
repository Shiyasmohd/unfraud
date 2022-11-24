import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Topbar from '../components/Navbar/Navbar';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {

  const lightTheme = createTheme({
    type: 'light',
    theme: {
    }
  })
  
  const darkTheme = createTheme({
    type: 'dark',
    theme: {
    }
  })

  
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <NextNProgress color="#fff" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} options={{ easing: 'ease', speed: 500 }} />
        <Topbar/>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  ) 
}
