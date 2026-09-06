import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['picsum.photos'],
  },
  allowedDevOrigins: ['laris-in.vercel.app']
};

export default nextConfig;
