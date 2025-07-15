import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable hot reload for local packages in development
  experimental: {
    externalDir: true,
  },
  
  // Configure webpack to watch for changes in node_modules
  webpack: (config, { dev }) => {
    if (dev) {
      // Watch for changes in the @plate-editor/react package
      config.watchOptions = {
        ...config.watchOptions,
        ignored: /node_modules\/(?!@plate-editor)/,
      }
    }
    return config
  },
}

export default nextConfig
