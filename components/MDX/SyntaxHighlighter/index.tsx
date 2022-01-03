import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'
import { useCallback } from 'react'
import { Prism } from 'react-syntax-highlighter'
import { CustomPreElement } from './CustomPreElement'
import { CustomCodeElement } from './CustomCodeElement'
import * as utils from './utils'

type SyntaxHighlighter = {
  children: string
  className: string
  filename?: string
  metastring?: string
  highlightedLines?: string
}

export const SyntaxHighlighter = (props: SyntaxHighlighter) => {
  const { children, className, filename, highlightedLines } = props

  const language = utils.getLanguage(className)
  const linesToHighlight = utils.getLinesToHighlight(highlightedLines)
  const bgColors = utils.getBgColors(dracula)

  const highlightLines = useCallback(
    (lineNumber: number) => {
      const props = {
        style: {
          display: 'block',
          backgroundColor: '',
        },
      }
      if (!linesToHighlight) return props
      if (linesToHighlight.includes(lineNumber))
        props.style.backgroundColor = bgColors.lineHighlights

      return props
    },
    [linesToHighlight, bgColors.lineHighlights]
  )

  return (
    <Prism
      language={language}
      style={dracula}
      lineProps={highlightLines}
      showLineNumbers
      showInlineLineNumbers
      wrapLines
      CodeTag={CustomCodeElement}
      PreTag={(props: any) => (
        <CustomPreElement
          language={language}
          bgColors={bgColors}
          filename={filename}
        >
          {props.children}
        </CustomPreElement>
      )}
    >
      {props.children}
    </Prism>
  )
}
