import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "canny-lark-671.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "rapid-falcon-211.convex.cloud", // 👈 production
      },
    ],
  },
};

export default nextConfig;
