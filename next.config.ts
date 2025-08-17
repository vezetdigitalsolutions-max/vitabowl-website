import type { NextConfig } from "next"

interface Config extends NextConfig {
  images: {
    remotePatterns: {
      protocol: string
      hostname: string
      port: string
      pathname: string
    }[]
    unoptimized: boolean
  }
  eslint: {
    ignoreDuringBuilds: boolean
  }
  typescript: {
    ignoreBuildErrors: boolean
  }
}

const config: Config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Keep this for other placeholder images
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default config
