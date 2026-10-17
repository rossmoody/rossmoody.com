import { Box, Flex, Link } from '@chakra-ui/react'
import { Fragment } from 'react'
import { DashDivider } from '../DashDivider'

interface ItemProperties {
  href: string
  label: React.ReactNode
}

const Item = ({ href, label }: ItemProperties) => (
  <Link href={href} _hover={{ color: 'primary' }}>
    {label}
  </Link>
)

const footerItems = [
  {
    href: 'mailto:ross@rossmoody.com',
    label: 'Email',
  },
  {
    href: 'https://dribbble.com/_rossmoody',
    label: 'Dribbble',
  },
  {
    href: 'https://www.github.com/rossmoody',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/moodyrooster/',
    label: 'LinkedIn',
  },
]

export const Footer = () => (
  <Box maxW="5xl" marginX="auto" as="footer">
    <DashDivider mt="80px" mb="24px" />
    <Flex gap="12px" wrap="wrap" fontSize="sm">
      {footerItems.map((item, index) => (
        <Fragment key={index}>
          <Item href={item.href} label={item.label} />
          {index < footerItems.length - 1 && '/'}
        </Fragment>
      ))}
    </Flex>
  </Box>
)
