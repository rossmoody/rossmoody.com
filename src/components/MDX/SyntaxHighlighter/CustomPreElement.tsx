import { Box } from '@chakra-ui/react'
import { ScrollArea } from 'components'
import { CodeTypeTab } from './CodeTypeTab'
import { getBgColors } from './utils'

type CustomPreTag = React.FC<{
  language: string
  bgColors: ReturnType<typeof getBgColors>
  filename?: string
}>

export const CustomPreElement: CustomPreTag = (props) => {
  return (
    <Box position="relative" fontSize={['14px', '16px']} mb="20" mt="12">
      <CodeTypeTab language={props.language} bg={props.bgColors.pre} />
      <ScrollArea>
        <Box maxH="70vh">
          <Box
            bgColor={props.bgColors.pre}
            height="100%"
            py="6"
            borderRadius="lg"
            sx={{
              '.linenumber': {
                minWidth: '3.25em !important', // Fix odd changing minwidth
                marginRight: '.5em !important',
              },
            }}
          >
            {props.children}
          </Box>
        </Box>
      </ScrollArea>
      {props.filename && (
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
      )}
    </Box>
  )
}
