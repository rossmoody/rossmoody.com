import { DefaultSeo as NextDefaultSeo } from 'next-seo'
import config from './config'

interface Props {
  title?: string
}

export const DefaultSeo = (props: Props) => (
  <NextDefaultSeo
    title={props.title || config.title}
    description={config.description}
    canonical={config.url}
    openGraph={{
      type: 'website',
      locale: 'en_US',
      url: config.url,
      title: config.title,
      description: config.description,
      images: [
        {
          url: config.image,
          alt: config.title,
          width: 1280,
          height: 720,
        },
      ],
    }}
    twitter={{
      handle: config.twitter,
      site: config.twitter,
      cardType: 'summary_large_image',
    }}
  />
)
