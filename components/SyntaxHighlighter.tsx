import { useCallback } from 'react'
import { Box } from '@chakra-ui/react'
import { TinyColor } from '@ctrl/tinycolor'
import { Prism, SyntaxHighlighterProps } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'

type HighlighterProps = SyntaxHighlighterProps & {
  highlightedLines?: string // String should resolve to number[]
  fileNamePath?: string
}

export const SyntaxHighlighter = (props: HighlighterProps) => {
  const { children, fileNamePath, highlightedLines, ...rest } = props

  const language = getLanguage(children.props.className)
  const linesToHighlight = getLinesToHighlight(highlightedLines)
  const bgColors = getBgColors(dracula)

  const highlightLines = useCallback(
    (lineNumber: number) => {
      if (!linesToHighlight) return {}
      const props = {} as any
      if (linesToHighlight.includes(lineNumber))
        props.style = { backgroundColor: bgColors.lineHighlights }

      return props
    },
    [linesToHighlight, bgColors.lineHighlights]
  )

  return (
    <Prism
      lineProps={highlightLines}
      language={language}
      style={dracula}
      showLineNumbers
      PreTag={(props: any) => (
        <Box as="pre">
          <Box position="relative">
            <FolderTab language={language} />
            <Box
              marginBottom="8"
              borderRadius="lg"
              maxH="70vh"
              p="6"
              overflow="auto"
              bgColor={bgColors.pre}
            >
              {props.children}
            </Box>
            <FileNamePath
              fileNamePath={fileNamePath}
              bgColor={bgColors.fileName}
            />
          </Box>
          {fileNamePath && <Box as="span" display="block" h="8" />}
        </Box>
      )}
      // wrapLongLines
      {...rest}
    >
      {children.props.children}
    </Prism>
  )
}

function getLanguage(className: HighlighterProps['language']) {
  if (!className) return 'jsx'
  return className.replace(/language-/, '')
}

function getBgColors(theme: typeof dracula) {
  const pre = theme['pre[class*="language-"]'].background
  const lineHighlights = new TinyColor(pre).lighten(5).toRgbString()
  const fileName = new TinyColor(pre).lighten(2).toRgbString()
  return { pre, lineHighlights, fileName }
}

function getLinesToHighlight(
  highlightedLines: HighlighterProps['highlightedLines']
) {
  if (!highlightedLines) return false
  return JSON.parse(highlightedLines) as number[]
}

function FileNamePath({
  fileNamePath,
  bgColor,
}: {
  fileNamePath: HighlighterProps['fileNamePath']
  bgColor: string
}) {
  if (!fileNamePath) return null

  return (
    <Box
      pt="4"
      pb="2"
      px="4"
      fontSize="sm"
      borderRadius="lg"
      position="absolute"
      transform="translateY(100%)"
      bottom="2"
      right="0"
      left="0"
      bgColor={bgColor}
      zIndex="-1"
    >
      {fileNamePath}
    </Box>
  )
}

function FolderTab({ language }: { language: string }) {
  return (
    <Box
      position="absolute"
      fontFamily="body"
      top="-20px"
      right="40px"
      backgroundColor="primary"
      borderRadius="lg"
      padding="4px 12px"
      color="surfaceDark"
      fontWeight="medium"
      fontSize="md"
    >
      {language.toUpperCase()}
    </Box>
  )
}
