import { useCallback } from 'react'
import { TinyColor } from '@ctrl/tinycolor'
import { Prism } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'

export const SyntaxHighlighter = (props: any) => {
  const { children, highlightedLines, ...rest } = props

  const language = getLanguage(children.props.className)
  const highlightBgColor = getHighlightBgColor(dracula)
  const linesToHighlight = getLinesToHighlight(highlightedLines)

  const highlightLines = useCallback(
    (lineNumber: number) => {
      if (!linesToHighlight) return {}

      const props = {} as any
      if (linesToHighlight.includes(lineNumber))
        props.style = { backgroundColor: highlightBgColor }
      return props
    },
    [linesToHighlight, highlightBgColor]
  )

  return (
    <Prism
      customStyle={{ borderRadius: '8px', marginBottom: '32px' }}
      lineProps={highlightLines}
      language={language}
      style={dracula}
      wrapLongLines
      showLineNumbers
      {...rest}
    >
      {children.props.children}
    </Prism>
  )
}

function getLanguage(className?: string) {
  if (!className) return 'jsx'
  return className.replace(/language-/, '')
}

function getHighlightBgColor(theme: typeof dracula) {
  const backgroundColor = theme['pre[class*="language-"]'].background
  return new TinyColor(backgroundColor).lighten(5).toRgbString()
}

function getLinesToHighlight(highlightedLines?: string) {
  if (!highlightedLines) return false
  return JSON.parse(highlightedLines) as number[]
}
