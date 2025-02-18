import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c8.alamy.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
