import React from 'react'
import { Layout, Helmet } from './src/components'

export function wrapRootElement({ element, props }) {
  return (
    <Layout {...props}>
      <Helmet />
      {element}
    </Layout>
  )
}
