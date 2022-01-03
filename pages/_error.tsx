import type { NextPage } from 'next'
import Error, { ErrorProps } from 'next/error'

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const errorCode = res.ok ? false : res.statusText
  const json = await res.json()

  return {
    props: { errorCode, stars: json.stargazers_count },
  }
}

const Page = ({ errorCode, stars }: any) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return <div>Next stars: {stars}</div>
}

export default Page
