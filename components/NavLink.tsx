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
    display: 'inline-block',
    borderRadius: '4px',
    padding: '2px',
    _hover: {
      textDecoration: 'none',
      fontWeight: '500',
      color: textProminent,
    },
    '&::after': {
      display: 'block',
      content: `"${children}"`,
      fontWeight: '500',
      height: '0',
      visibility: 'hidden',
      overflow: 'hidden',
      userSelect: 'none',
      pointerEvents: 'none',
    },
    '&::before': {
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
      fontWeight: 500,
    },
    '&[aria-current="location"]::before': {
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
