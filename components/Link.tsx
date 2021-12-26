import { default as NextLink } from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface LinkProps {
  children: React.ReactNode
  path: string
}

export const Link = ({ children, path }: LinkProps) => {
  const router = useRouter()

  return (
    <NextLink href={path} passHref>
      <ChakraLink color={router.pathname === path ? 'primary' : ''}>
        {children}
      </ChakraLink>
    </NextLink>
  )
}
