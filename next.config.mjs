import remarkGfm from 'remark-gfm'
import { remarkMdxCodeMeta } from 'remark-mdx-code-meta'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  webpack: (config, options) => {
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
  },
}

export default nextConfig
