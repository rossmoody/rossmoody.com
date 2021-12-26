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

export const LinkTooltip = ({ name }: { name: keyof typeof links }) => {
  const object = links[name]

  return (
    <Tooltip
      label={<TooltipLabel url={object.link} label={object.label} />}
      bg="primary"
      color="surface"
      placement="top"
      maxW="350px"
      borderRadius="8px"
      fontWeight="400"
      padding="12px 16px"
    >
      <Link href={object.link} color="primary">
        {object.text}
      </Link>
    </Tooltip>
  )
}
