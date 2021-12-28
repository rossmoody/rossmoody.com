import { Tooltip, Text, Link } from '@chakra-ui/react'
import links from '../data/links.json'

interface TooltipLabelProps {
  label: string
  url: string
}

const TooltipLabel = (props: TooltipLabelProps) => (
  <>
    <Text fontWeight="medium">{props.label}</Text>
    <Text fontSize="12px">{props.url}</Text>
  </>
)

interface LinkTooltipProps {
  name: keyof typeof links
  children: string
}

export const LinkTooltip = (props: LinkTooltipProps) => {
  const object = links[props.name]

  return (
    <Tooltip
      label={<TooltipLabel url={object.link} label={props.children} />}
      bg="primary"
      color="surface"
      placement="top"
      maxW="350px"
      borderRadius="8px"
      fontWeight="400"
      padding="12px 16px"
    >
      <Link href={object.link} color="primary">
        {props.children}
      </Link>
    </Tooltip>
  )
}
