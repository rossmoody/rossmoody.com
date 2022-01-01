import { useCallback } from 'react'
import { Prism, SyntaxHighlighterProps } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'
import { CustomPreElement } from './CustomPreElement'
import { CustomCodeElement } from './CustomCodeElement'
import * as utils from './utils'

export type HighlighterProps = SyntaxHighlighterProps & {
  highlightedLines?: string // String should resolve to number[]
  filename?: string
}

export const SyntaxHighlighter = (props: HighlighterProps) => {
  const { children, filename, highlightedLines } = props

  const language = utils.getLanguage(children.props.className)
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
      {children.props.children}
    </Prism>
  )
}
