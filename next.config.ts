import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/bilgegencsk',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
