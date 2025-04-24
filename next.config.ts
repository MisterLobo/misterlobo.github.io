import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'placehold.co',
        protocol: 'https',
        pathname: '**',
      },
      {
        hostname: 'github.com',
        protocol: 'https',
        pathname: '**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
