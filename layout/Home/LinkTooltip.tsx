import { Tooltip, Text, Link } from '@chakra-ui/react'
import links from './data/links.json'

interface TooltipLabelProps {
  label: string
  link: string
}

const TooltipLabel = (props: TooltipLabelProps) => (
  <>
    <Text fontWeight="medium" fontSize="md" lineHeight={1.25}>
      {props.label}
    </Text>
    <Text fontSize="sm" lineHeight={1}>
      {props.link}
    </Text>
  </>
)

interface LinkTooltipProps {
  name: keyof typeof links
  children: string
}

export const LinkTooltip = (props: LinkTooltipProps) => {
  const { label, link } = links[props.name]

  return (
    <Tooltip
      label={<TooltipLabel link={link} label={label} />}
      bg="primary"
      color="surface"
      placement="top"
      maxW="350px"
      borderRadius="8px"
      fontWeight="400"
      padding="12px 16px"
    >
      <Link href={link} color="primary">
        {props.children}
      </Link>
    </Tooltip>
  )
}
