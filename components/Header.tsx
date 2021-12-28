import { IconButton, Flex, Heading, Divider } from '@chakra-ui/react'
import { NavLink } from './NavLink'
import { Logo } from './Logo'
import { ThemeIcon } from './ThemeIcon'
import { useTheme } from 'providers/ThemeProvider'
import { ThemeNumber } from 'utils/createTheme'
import NextLink from 'next/link'

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
      <NextLink href="/" passHref>
        <Flex mr="8px" alignItems="center" as="a">
          <Logo />
          <Heading
            as="span"
            ml={2}
            fontWeight="400"
            fontSize="2xl"
            lineHeight={1}
            mt="6px"
            sx={{
              '@media screen and (max-width: 500px)': {
                display: 'none',
              },
            }}
          >
            Ross Moody
          </Heading>
        </Flex>
      </NextLink>

      <Flex gap="5" align="center">
        {/* <Link path="/snippets" aria-label="Navigate to Snippets">
          Snippets
        </Link>
        <Divider orientation="vertical" h="5" borderColor="divider" /> */}
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
