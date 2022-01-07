import { Box, SlideFade, Tooltip } from '@chakra-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'

type Permalink = { href: string }

export const Permalink: React.FC<Permalink> = ({ href }) => {
  const permalinkRef = useRef<any>(null)
  const [showPermalink, setShowPermalink] = useState(false)
  const [copyText, setCopyText] = useState('Copy to clipboard')

  useEffect(() => {
    if (!permalinkRef.current) return
    const permalink: HTMLAnchorElement = permalinkRef.current
    const heading = permalink.parentElement as HTMLHeadingElement
    heading.onmouseover = () => setShowPermalink(true)
    heading.onmouseleave = () => setShowPermalink(false)
  })

  const handleClick = useCallback(() => {
    const { origin, pathname } = window.location
    const url = `${origin}/${pathname}${href}`
    navigator.clipboard.writeText(url)

    setCopyText('Copied')
    setTimeout(setCopyText, 2500, 'Copy to clipboard')
  }, [href])

  return (
    <Box
      as="a"
      ref={permalinkRef}
      onClick={handleClick}
      data-href={href} // Passed to TOC
      display="inline-block"
      aria-hidden={true}
      tabIndex={-1}
      ml="2"
      color="textSubdued"
      h="4"
      w="4"
      _hover={{ cursor: 'pointer' }}
    >
      <SlideFade in={showPermalink}>
        <Tooltip label={copyText} closeOnClick={false}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        </Tooltip>
      </SlideFade>
    </Box>
  )
}
