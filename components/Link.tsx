import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface LinkProps {
  href: string
}

export const Link: React.FC<LinkProps> = ({ children, href }) => {
  const { pathname } = useRouter()

  console.log(pathname, href)

  return (
    <NextLink href={href} passHref>
      <ChakraLink>{children}</ChakraLink>
    </NextLink>
  )
}
