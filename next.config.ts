import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repoName = "Gymboo";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? `/${repoName}` : '',
  },
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
