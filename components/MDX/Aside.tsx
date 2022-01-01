import { Box, BoxProps } from '@chakra-ui/react'

export interface AsideProps {
  label?: string
}

export const Aside: React.FC<AsideProps> = (props) => {
  const label = props.label ?? 'Note'

  return (
    <Box
      as="aside"
      position="relative"
      bgColor="surfaceDark"
      borderRadius="lg"
      borderLeft="8px solid"
      borderLeftColor="primary"
      py="8"
      pl="10"
      pr="8"
      my="14"
      _before={{
        content: `'${label}'`,
        position: 'absolute',
        top: '-20px',
        right: '40px',
        backgroundColor: 'primary',
        borderRadius: 'inherit',
        padding: '4px 12px',
        color: 'surfaceDark',
        fontWeight: 'medium',
        fontSize: 'md',
      }}
      sx={{
        'p:last-child': {
          marginBottom: '0',
        },
      }}
    >
      {props.children}
    </Box>
  )
}
