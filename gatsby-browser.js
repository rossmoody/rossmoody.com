import React from 'react'
import { Layout, Helmet } from './src/components'

export function wrapPageElement({ element, props }) {
  return (
    <>
      <Helmet {...props} />
      <Layout {...props}>{element}</Layout>
    </>
  )
}
