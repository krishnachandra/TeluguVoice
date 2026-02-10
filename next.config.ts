import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      // Allow WordPress images (example domain, user can update)
      {
        protocol: 'https',
        hostname: '*.wp.com', // Just in case, common for WP
      },
    ],
  },
};

export default nextConfig;
