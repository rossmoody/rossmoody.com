import { Box, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FragmentLink } from './FragmentLink'

export const TableOfContents = () => {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeFragment, setActiveFragment] = useState<HTMLHeadingElement>()

  useEffect(() => {
    const main = document.getElementById('page-content')
    const headings = getHeadings(main!)
    setHeadings(headings)
    setActiveFragment(headings[0].item)
  }, [])

  return (
    <Box as="aside" pos="sticky" top="20">
      <Box as="nav">
        <Text
          as="h2"
          fontSize="sm"
          fontWeight="medium"
          letterSpacing=".8px"
          mb="4"
          textTransform="uppercase"
        >
          Table of Contents
        </Text>
        {headings.map((heading) => (
          <FragmentLink
            key={heading.href}
            heading={heading}
            active={activeFragment === heading.item}
            setActiveFragment={setActiveFragment}
          >
            {heading.textContent}
          </FragmentLink>
        ))}
      </Box>
    </Box>
  )
}

export type Heading = ReturnType<typeof makeHeadingObject>

const getHeadings = (root: HTMLElement) => {
  const headings = Array.from(
    root.querySelectorAll('h2, h3')
  ) as HTMLHeadingElement[]
  return headings.map(makeHeadingObject) as Heading[]
}

const makeHeadingObject = (item: HTMLHeadingElement) => {
  const textContent = item.textContent ?? ''
  const childAnchorElement = item.querySelector('a')
  const href = childAnchorElement?.href ?? '#'

  return {
    item,
    href,
    textContent,
  }
}
