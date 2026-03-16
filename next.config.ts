import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: "/Gymboo",
  assetPrefix: "/Gymboo/",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
