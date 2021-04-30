import React from 'react'
import { Tooltip as T, Link } from '@chakra-ui/react'

import links from '../../data/links.json'

interface Object {
  label: string
  link: string
  children: string
}

export const LinkTooltip = ({ name }: { name: string }) => {
  const object: object = links[name]

  return (
    <T
      label={object.label}
      bg="text"
      color="surface"
      placement="top"
      maxW="350px"
      borderRadius="8px"
      padding="8px 12px"
    >
      <Link href={object.link} color="primary">
        {object.children}
      </Link>
    </T>
  )
}
