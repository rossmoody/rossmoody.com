import React from 'react'
import Link from 'next/link'
import { Link as ChakraLink, css, useToken } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface LinkProps {
  path: string
}

export const NavLink: React.FC<LinkProps> = ({ children, path }) => {
  const { pathname } = useRouter()
  const [primary, textProminent] = useToken('colors', [
    'primary',
    'textProminent',
  ])
  const isCurrent = pathname.includes(path) ? 'location' : undefined
  const ref = React.useRef<HTMLAnchorElement>(null)

  const style = css({
    position: 'relative',
    borderRadius: '4px',
    padding: '2px',
    _hover: {
      textDecoration: 'none',
      fontWeight: '500',
      color: textProminent,
    },
    '&::after': {
      content: '""',
      backgroundColor: primary,
      height: '4px',
      width: '10px',
      borderRadius: '10px',
      position: 'absolute',
      bottom: '8px',
      opacity: 0,
      left: 'calc(50% - 5px)',
      transitionDelay: '300ms',
      transition: 'all 400ms ease',
    },
    '&[aria-current="location"]': {
      color: textProminent,
      fontWeight: 'bold',
    },
    '&[aria-current="location"]::after': {
      content: '""',
      bottom: '-8px',
      opacity: 100,
    },
  })

  return (
    <Link href={path} passHref>
      <ChakraLink
        aria-current={isCurrent}
        onClick={() => ref.current?.blur()}
        css={style}
        ref={ref}
      >
        {children}
      </ChakraLink>
    </Link>
  )
}
