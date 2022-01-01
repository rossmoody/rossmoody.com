import { Text, Tooltip } from '@chakra-ui/react'
import footnotes from './data/footnotes.json'

export const Footnote = ({
  name,
  words,
}: {
  name: keyof typeof footnotes
  words: string
}) => {
  const label = footnotes[name]

  return (
    <Tooltip
      label={label}
      bg="primary"
      color="surface"
      placement="top"
      maxW="350px"
      borderRadius="8px"
      fontWeight="400"
      padding="12px 16px"
    >
      <Text
        display="inline-block"
        textDecoration="underline dotted"
        textDecorationThickness="1px"
        textUnderlineOffset="8px"
        textDecorationColor="primary"
        _hover={{ cursor: 'help' }}
        tabIndex={0}
      >
        {words}
      </Text>
    </Tooltip>
  )
}
