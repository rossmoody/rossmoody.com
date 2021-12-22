import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

const meta = {
  title: 'Ross Moody • 👋',
  description: 'The portfolio site of Ross Moody.',
  url: 'https://rossmoody.com',
  author: '@_rossmoody',
}

const Helmet = () => (
  <ReactHelmet title={meta.title}>
    <html lang="en" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <meta charSet="utf-8" />
    <link rel="canonical" href={meta.url} />
    <meta name="description" content={meta.description} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:image" content={`${meta.url}/twitter.png`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={meta.author} />
    <meta name="twitter:title" content={meta.title} />
    <meta property="twitter:description" content={meta.description} />
    <meta property="twitter:image" content={`${meta.url}/twitter.png`} />
    <link rel="stylesheet" href="style.css" />
    <link
      rel="preload"
      href="fonts/apercu/apercu-regular-pro.otf"
      as="font"
      type="font/otf"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="fonts/apercu/apercu-bold-pro.otf"
      as="font"
      type="font/otf"
      crossOrigin="true"
    />

    <link
      rel="preload"
      href="fonts/plantin/plantin-pro-regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="fonts/plantin/plantin-pro-semibold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="fonts/plantin/plantin-pro-bold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="true"
    />
  </ReactHelmet>
)

export { Helmet }
