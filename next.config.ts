import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Allow WordPress images (example domain, user can update)
      {
        protocol: 'https',
        hostname: '*.wp.com',
      },
    ],
  },
};

export default nextConfig;
