import { Heading, Link, Text } from '@chakra-ui/react'
import { Layout } from 'layout'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'

interface ErrorMessageProps {
  title: string
  description: string
}

export const ErrorMessage = ({ title, description }: ErrorMessageProps) => (
  <Layout>
    <NextSeo title={`${title} - Ross Moody`} noindex />
    <Heading
      as="h1"
      pt="8"
      fontSize={['32px', '48px', '64px']}
      lineHeight={1.2}
    >
      {title}
    </Heading>
    <Text mt="4" fontSize="xl">
      {description}{' '}
      <Link as={NextLink} href="/" color="primary" borderRadius="base">
        Head back home
      </Link>
      .
    </Text>
  </Layout>
)
