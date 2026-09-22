import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // GitHub Actions supplies this when building for GitHub Pages.
  // Local development keeps an empty base path.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["172.20.10.7"],
};

export default nextConfig;