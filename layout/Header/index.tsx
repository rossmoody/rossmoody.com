import { IconButton, Flex, Divider } from '@chakra-ui/react'
import { ThemeNumber } from 'utils/createTheme'
import { useTheme } from 'providers/ThemeProvider'
import { NavLink } from 'components'
import { ThemeIcon } from './ThemeIcon'
import { Logo } from './Logo'

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
      <Flex gap="8" align="center">
        <NavLink path="/writing" aria-label="Navigate to Writing">
          Writing
        </NavLink>
        {/* <NavLink path="/snippets" aria-label="Navigate to Snippets">
          Snippets
        </NavLink> */}
        <Divider orientation="vertical" h="5" borderColor="divider" />
        <IconButton
          aria-label="Change theme"
          onClick={handleClick}
          icon={<ThemeIcon />}
          size="sm"
          variant="ghost"
        />
      </Flex>
    </Flex>
  )
}
