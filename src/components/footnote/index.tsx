import React from 'react'
import { Text, Tooltip } from '@chakra-ui/react'

import footnotes from '../../data/footnotes.json'

export const Footnote = ({ name }: { name: string }) => {
  const item = footnotes.find((object) => object[name])

  if (!item) throw new Error('Problems...')

  const index = (footnotes.indexOf(item) + 1).toString()
  const label = item[name]

  return (
    <Text
      as="span"
      fontSize="60%"
      color="primary"
      display="inline-block"
      verticalAlign="top"
      mx="2px"
      _hover={{ textDecoration: 'underline', cursor: 'help' }}
    >
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
        {index}
      </Tooltip>
    </Text>
  )
}
