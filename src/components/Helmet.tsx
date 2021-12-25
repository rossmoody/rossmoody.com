import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

const Helmet = ({ location }) => {
  const meta = {
    title: 'Ross Moody • 👋',
    description:
      "Hi, I'm Ross. A product designer, full-stack engineer, and systems thinker that loves making things for the web.",
    url: location.origin,
    author: '@_rossmoody',
  }

  return (
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
      <link rel="stylesheet" href={`${meta.url}/style.css`} />
      <link
        rel="preload"
        href={`${meta.url}/fonts/apercu/apercu-regular-pro.otf`}
        as="font"
        type="font/otf"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href={`${meta.url}/fonts/apercu/apercu-bold-pro.otf`}
        as="font"
        type="font/otf"
        crossOrigin="true"
      />

      <link
        rel="preload"
        href={`${meta.url}/fonts/plantin/plantin-pro-regular.ttf`}
        as="font"
        type="font/ttf"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href={`${meta.url}/fonts/plantin/plantin-pro-semibold.ttf`}
        as="font"
        type="font/ttf"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href={`${meta.url}/fonts/plantin/plantin-pro-bold.ttf`}
        as="font"
        type="font/ttf"
        crossOrigin="true"
      />
    </ReactHelmet>
  )
}

export { Helmet }
