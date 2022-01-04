import { Text, Tooltip } from '@chakra-ui/react'
import footnotes from './data/footnotes.json'

export const Footnote = ({
  name,
  words,
}: {
  name: keyof typeof footnotes
  words: string
}) => {
  return (
    <Tooltip
      label={footnotes[name]}
      bg="primary"
      color="surface"
      placement="top"
      maxW="350px"
      borderRadius="8px"
      fontWeight="400"
      padding="12px 16px"
    >
      <Text
        as="span"
        display="inline-block"
        textDecoration="underline dotted"
        textDecorationThickness="1px"
        textUnderlineOffset="3px"
        textDecorationColor="primary"
        _hover={{ cursor: 'help' }}
        tabIndex={0}
      >
        {words}
      </Text>
    </Tooltip>
  )
}
