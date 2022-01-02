import { Box } from '@chakra-ui/react'

export const CustomCodeElement: React.FC = (props) => {
  return (
    <Box
      as="code"
      fontFamily="mono"
      overflowWrap="normal"
      color="text"
      {...props}
    />
  )
}
