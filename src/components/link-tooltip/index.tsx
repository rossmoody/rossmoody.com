import React from 'react'
import { Tooltip as T, Link } from '@chakra-ui/react'

import links from '../../data/links.json'

interface ObjectProperties {
  label: string
  link: string
  children: string
}

export const LinkTooltip = ({ name }: { name: string }) => {
  const object: ObjectProperties = links[name]

  return (
    <T
      label={object.label}
      bg="primary"
      color="surface"
      placement="top"
      maxW="350px"
      borderRadius="8px"
      fontWeight="400"
      padding="12px 16px"
    >
      <Link href={object.link} color="primary">
        {object.children}
      </Link>
    </T>
  )
}
