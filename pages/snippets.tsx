import Link from 'next/link'
import getFrontMatter, { type FrontMatter } from '@utils/getFrontMatter'

const Snippets = ({posts}: FrontMatter) => {
  console.log(posts)

  return (
    <>
      Snippets Overview
      <Link href="/snippets/test-snippet">Test Snippet</Link>
    </>
  )
}

export const getStaticProps = async () => {
  return getFrontMatter('/pages/snippets')
}

export default Snippets
