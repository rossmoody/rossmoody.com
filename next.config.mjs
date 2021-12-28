import remarkGfm from 'remark-gfm'
import { remarkMdxCodeMeta } from 'remark-mdx-code-meta'

export const reactStrictMode = true
export const experimental = { esmExternals: true }
export const pageExtensions = ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js']
export const webpack = (config, options) => {
  config.module.rules.push({
    test: /\.mdx?$/,
    use: [
      options.defaultLoaders.babel,
      {
        loader: '@mdx-js/loader',
        options: {
          providerImportSource: '@mdx-js/react',
          remarkPlugins: [remarkGfm, remarkMdxCodeMeta],
        },
      },
    ],
  })
  return config
}
