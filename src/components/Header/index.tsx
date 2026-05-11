import { Flex, IconButton } from '@chakra-ui/react'
import { useTheme } from 'components'
import { ThemeNumber } from 'utils/createTheme'
import { Logo } from './Logo'
import { ThemeIcon } from './ThemeIcon'

export const Header = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    if (theme === 6) return setTheme(1)
    setTheme((theme + 1) as ThemeNumber)
  }

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      maxW="5xl"
      h="12"
      alignItems="center"
      marginX="auto"
    >
      <Logo />
      <IconButton
        aria-label="Change theme"
        onClick={handleClick}
        icon={<ThemeIcon />}
        size="sm"
        variant="ghost"
      />
    </Flex>
  )
}
