import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Heading } from '.'
import { useOnScreen } from './IntersectionObserver'

type FragmentLink = {
  heading: Heading
  active: boolean
  setActiveFragment: React.Dispatch<
    React.SetStateAction<HTMLHeadingElement | undefined>
  >
}

export const FragmentLink: React.FC<FragmentLink> = ({
  children,
  heading,
  active,
  setActiveFragment,
}) => {
  const { item, href } = heading
  const isIntersecting = useOnScreen(item)

  useEffect(() => {
    if (isIntersecting) setActiveFragment(item)
  }, [isIntersecting, item, setActiveFragment])

  const isH2 = item.tagName === 'H2'

  return (
    <Box
      as="a"
      href={href}
      display="block"
      fontSize={isH2 ? '15px' : '13px'}
      color="textSubdued"
      lineHeight={1.4}
      my="1"
      marginTop={isH2 ? '2' : '1'}
      paddingLeft={isH2 ? '0' : '4'}
      aria-current={active}
      _hover={{
        color: 'textProminent',
      }}
      sx={{
        '&[aria-current=true]': {
          color: 'primary',
        },
      }}
    >
      {children}
    </Box>
  )
}
