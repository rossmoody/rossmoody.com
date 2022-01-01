import { Box } from '@chakra-ui/react'
import { CodeTypeTab } from './CodeTypeTab'
import { getBgColors } from './utils'

type CustomPreTag = React.FC<{
  language: string
  bgColors: ReturnType<typeof getBgColors>
  filename?: string
}>

export const CustomPreElement: CustomPreTag = (props) => (
  <Box as="pre" mb="20" fontSize={['14px', '16px']}>
    <Box position="relative">
      <CodeTypeTab language={props.language} />
      <Box
        py="6"
        borderRadius="lg"
        maxH="70vh"
        overflow="auto"
        bgColor={props.bgColors.pre}
      >
        {props.children}
      </Box>
      <Box
        pt="4"
        pb="2"
        px="4"
        borderRadius="lg"
        position="absolute"
        transform="translateY(100%)"
        bottom="2"
        right="0"
        left="0"
        bgColor={props.bgColors.fileName}
        zIndex="-1"
      >
        {props.filename}
      </Box>
    </Box>
  </Box>
)
