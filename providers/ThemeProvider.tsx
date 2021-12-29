import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { createTheme, ThemeNumber } from 'utils/createTheme'

interface ThemeContextProps {
  theme: ThemeNumber
  setTheme: React.Dispatch<React.SetStateAction<ThemeNumber>>
}

const ThemeContext = React.createContext({} as ThemeContextProps)

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<ThemeNumber>(6)

  const themeMemo = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
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
