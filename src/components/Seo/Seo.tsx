import React from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import config from './config'

interface Props {
  ogImage?: string
  description?: string
  path?: string
  title?: string
  date?: string
  lastUpdated?: string
}

const Seo = ({ title, description, ogImage, path, date, lastUpdated }: Props) => {
  const {
    title: configTitle,
    description: configDescription,
    image: configImage,
    url,
    author,
    twitter,
  } = config

  const seo = {
    description: description || configDescription,
    image: ogImage ? `${url}${ogImage}` : configImage,
    title: title ? `${title} - ${configTitle}` : configTitle,
    url: `${url}${path || ''}`,
    date: date,
    updated: lastUpdated || date,
  }

  const formattedDate = seo.date ? new Date(seo.date).toISOString() : ''
  const formattedUpdatedDate = seo.updated
    ? new Date(seo.updated).toISOString()
    : ''
  const featuredImage = {
    url: seo.image,
    alt: seo.title,
  }

  return (
    <React.Fragment>
      <NextSeo
        title={seo.title}
        description={seo.description}
        canonical={seo.url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: formattedDate,
            modifiedTime: formattedUpdatedDate,
          },
          url: seo.url,
          title: seo.title,
          description: seo.description,
          images: [featuredImage],
        }}
        twitter={{
          handle: twitter,
          site: twitter,
          cardType: 'summary_large_image',
        }}
      />
      <ArticleJsonLd
        authorName={author}
        dateModified={formattedUpdatedDate}
        datePublished={formattedDate}
        description={seo.description}
        images={[seo.image]}
        publisherLogo={`${url}/logo.png`}
        publisherName={author}
        title={seo.title}
        url={seo.url}
      />
    </React.Fragment>
  )
}

export { Seo }
