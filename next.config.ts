import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["demo-source.imgix.net"], // Add your Imgix hostname here
  },
};

export default nextConfig;
