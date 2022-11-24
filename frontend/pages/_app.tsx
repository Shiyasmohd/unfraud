import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Topbar from '../components/Navbar/Navbar';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

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
        <Topbar/>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  ) 
}
