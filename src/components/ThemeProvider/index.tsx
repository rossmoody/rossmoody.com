import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createTheme,
  DEFAULT_DARK_THEME,
  THEME_NUMBERS,
  THEME_STORAGE_KEY,
  ThemeNumber,
} from 'utils/createTheme'

interface ThemeContextProps {
  theme: ThemeNumber
  setTheme: (theme: ThemeNumber) => void
}

const ThemeContext = React.createContext({} as ThemeContextProps)

/** Set by the inline script in _document before first paint */
const getInitialTheme = () => {
  const value = Number(document.documentElement.dataset.siteTheme)
  return THEME_NUMBERS.includes(value as ThemeNumber)
    ? (value as ThemeNumber)
    : DEFAULT_DARK_THEME
}

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [theme, setThemeState] = React.useState<ThemeNumber>(
    DEFAULT_DARK_THEME
  )

  React.useEffect(() => {
    // Server render can't know the visitor's theme, so sync after hydration
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(getInitialTheme())
  }, [])

  const setTheme = React.useCallback((nextTheme: ThemeNumber) => {
    setThemeState(nextTheme)
    document.documentElement.dataset.siteTheme = String(nextTheme)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, String(nextTheme))
    } catch {}
  }, [])

  const themeMemo = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  )

  return (
    <ThemeContext.Provider value={themeMemo}>
      <ChakraProvider theme={createTheme(themeMemo.theme)}>
        {children}
      </ChakraProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
