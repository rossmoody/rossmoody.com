/**
 *
 * @param link Href from anchor
 * @returns A presentation href without http or www
 */
export function prettifyLink(link: string | undefined) {
  if (!link) return '#'
  const snippetsToRemove = ['http://', 'https://', 'www.']
  return snippetsToRemove.reduce((accumulator, currentValue) => {
    return accumulator.replace(currentValue, '')
  }, link)
}
