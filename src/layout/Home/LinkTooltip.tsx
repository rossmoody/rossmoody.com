import { Tooltip, Text, Link } from '@chakra-ui/react'
import links from './data/links.json'

interface TooltipLabelProps {
  label: string
  prettylink: string
}

const TooltipLabel = (props: TooltipLabelProps) => (
  <>
    <Text fontWeight="medium" fontSize="md" lineHeight={1.25} mb="2">
      {props.label}
    </Text>
    <Text fontSize="sm" lineHeight={1}>
      {props.prettylink}
    </Text>
  </>
)

interface LinkTooltipProps {
  name: keyof typeof links
  children: string
}

export const LinkTooltip = (props: LinkTooltipProps) => {
  const { label, link, prettylink } = links[props.name]

  return (
    <Tooltip
      label={<TooltipLabel prettylink={prettylink} label={label} />}
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
