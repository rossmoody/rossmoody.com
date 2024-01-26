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
    ariaLabel: 'Send email',
    href: 'mailto:ross@rossmoody.com',
    label: 'Email',
  },
  {
    ariaLabel: 'Navigate to Dribbble Profile',
    href: 'https://dribbble.com/_rossmoody',
    label: 'Dribbble',
  },
  {
    ariaLabel: 'Navigate to GitHub Profile',
    href: 'https://www.github.com/rossmoody',
    label: 'GitHub',
  },
  {
    ariaLabel: 'Navigate to LinkedIn Profile',
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
          <Item
            aria-label={item.ariaLabel}
            href={item.href}
            label={item.label}
          />
          {index < footerItems.length - 1 && '/'}
        </Fragment>
      ))}
    </Flex>
  </Box>
)
