import React from 'react'
import footnotes from '../../data/footnotes.json'
import { Text, Tooltip } from '@chakra-ui/react'

export const Footnote = ({ name }: { name: string }) => {
  const item = footnotes.find((obj) => obj[name])
  const index = (footnotes.indexOf(item) + 1).toString()
  const label = item[name]

  return (
    <Text
      as='span'
      fontSize='60%'
      color='primary'
      display='inline-block'
      verticalAlign='top'
      mx='2px'
      _hover={{ textDecoration: 'underline', cursor: 'help' }}
    >
      <Tooltip
        label={label}
        bg='text'
        color='surface'
        placement='top'
        maxW='350px'
        borderRadius='8px'
        padding='12px'
      >
        {index}
      </Tooltip>
    </Text>
  )
}
