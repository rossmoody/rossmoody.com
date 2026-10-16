import nextVitals from 'eslint-config-next/core-web-vitals'

const config = [
  ...nextVitals,
  {
    rules: {
      'react/display-name': 'off',
    },
  },
  {
    ignores: ['.next/**', '.netlify/**', 'node_modules/**', 'next-env.d.ts'],
  },
]

export default config
