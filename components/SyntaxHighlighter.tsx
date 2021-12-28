import React, { HTMLAttributes, PropsWithoutRef, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Prism } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'

type LineNumbers = number[]

export const SyntaxHighlighter = (props: any) => {
  const [highlightedLines, setHighlightedLines] = useState<LineNumbers>([])

  const ref = React.useRef()

  React.useEffect(() => {
    setHighlightedLines([])
  }, [])

  function highlightLines(lineNumber: number) {
    const props = {} as any
    if (highlightedLines.includes(lineNumber)) props.class = 'highlight-line'
    return props
  }

  const language = props.className.replace(/language-/, '')

  return (
    <Prism
      customStyle={{ borderRadius: '8px', marginBottom: '32px' }}
      language={language}
      style={dracula}
      lineProps={highlightLines}
      PreTag={(props: any) => <Box as="pre" ref={ref} {...props} />}
      wrapLongLines
      showLineNumbers
      {...props}
    />
  )
}
