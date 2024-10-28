import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Add your Imgix hostname here
  },
};

export default nextConfig;
