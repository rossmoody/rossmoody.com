import { useCallback, useRef, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Prism } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'

type LineNumbers = number[]

export const SyntaxHighlighter = (props: any) => {
  const [highlightedLines, setHighlightedLines] = useState<LineNumbers>([])
  const ref = useRef<HTMLPreElement>()

  const language = props.className.replace(/language-/, '')

  useEffect(() => {
    const lineHighlights = JSON.parse(
      ref.current?.parentElement?.getAttribute('data-highlight-lines') ?? '[]'
    )
    setHighlightedLines(lineHighlights)
  }, [])

  const highlightLines = useCallback(
    (lineNumber: number) => {
      const props = {} as any
      if (highlightedLines.includes(lineNumber))
        props.style = { backgroundColor: 'blue' }
      return props
    },
    [highlightedLines]
  )

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
