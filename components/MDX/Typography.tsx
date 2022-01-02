import {
  Code as CCode,
  CodeProps,
  Heading,
  HeadingProps,
  ListProps,
  OrderedList,
  Text,
  TextProps,
  UnorderedList,
} from '@chakra-ui/react'

export const H1 = (props: HeadingProps) => (
  <Heading as="h1" fontSize={['32px', '48px', '52px']} {...props} />
)

export const H2 = (props: HeadingProps) => (
  <Heading
    as="h2"
    fontFamily="body"
    fontSize={['2xl', '3xl', '4xl']}
    fontWeight={500}
    mt="64px"
    mb="16px"
    {...props}
  />
)

export const H3 = (props: HeadingProps) => (
  <Heading
    as="h3"
    fontFamily="body"
    fontSize={['lg', 'xl', '2xl']}
    fontWeight={600}
    mt="48px"
    mb="12px"
    {...props}
  />
)

export const P = (props: TextProps) => (
  <Text
    as="p"
    fontSize={['16px', '18px']}
    mb="8"
    letterSpacing=".4px"
    {...props}
  />
)

export const Li = (props: TextProps) => <P as="li" ml="4" mb="4" {...props} />

export const Ul = (props: ListProps) => (
  <UnorderedList mt="6" mb="10" {...props} />
)
export const Ol = (props: ListProps) => (
  <OrderedList mt="6" mb="10" {...props} />
)

export const Code = (props: CodeProps) => (
  <CCode px="1.5" variant="outline" color="primary" {...props} />
)
