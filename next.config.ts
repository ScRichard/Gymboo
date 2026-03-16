import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repoName = "Gymboo";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: isProduction ? `/${repoName}` : "",
  assetPrefix: isProduction ? `/${repoName}/` : "",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
