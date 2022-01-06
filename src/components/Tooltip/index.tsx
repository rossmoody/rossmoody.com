import { Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react'

export const Tooltip = (props: TooltipProps) => (
  <ChakraTooltip
    bg="primary"
    color="surface"
    placement="top"
    maxW="350px"
    borderRadius="8px"
    fontWeight="400"
    padding="12px 16px"
    {...props}
  />
)
