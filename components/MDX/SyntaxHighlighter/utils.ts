import type { HighlighterProps } from '.'
import { TinyColor } from '@ctrl/tinycolor'

export function getLanguage(className: HighlighterProps['language']) {
  if (!className) return 'jsx'
  return className.replace(/language-/, '')
}

export function getBgColors(theme: any) {
  const pre = theme['pre[class*="language-"]'].background
  const lineHighlights = new TinyColor(pre).lighten(8).toRgbString()
  const fileName = new TinyColor(pre).darken(3).toRgbString()
  return { pre, lineHighlights, fileName }
}

export function getLinesToHighlight(
  highlightedLines: HighlighterProps['highlightedLines']
) {
  if (!highlightedLines) return false
  return JSON.parse(highlightedLines) as number[]
}
