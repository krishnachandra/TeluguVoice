import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Force: Disable Next.js Image Optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Force: Allow ALL external images
      },
    ],
  },
};

export default nextConfig;
