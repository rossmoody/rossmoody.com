import Link from 'next/link'
import { IconButton, Flex, Heading } from '@chakra-ui/react'
import { Logo } from './Logo'
import { ThemeIcon } from './ThemeIcon'
import { useTheme } from 'providers/ThemeProvider'
import { ThemeNumber } from 'utils/createTheme'

export const Header = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    if (theme === 6) return setTheme(1)
    setTheme((theme + 1) as ThemeNumber)
  }

  return (
    <Flex
      justifyContent="space-between"
      maxW="5xl"
      alignItems="center"
      marginX="auto"
      mb="100px"
      as="header"
    >
      <Link href="/" passHref>
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
      </Link>
      <IconButton
        aria-label="Change theme"
        onClick={handleClick}
        icon={<ThemeIcon />}
        variant="ghost"
      />
    </Flex>
  )
}
