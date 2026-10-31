import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [{ source: "/en_GB", destination: "/", permanent: true }];
  },
};

export default nextConfig;
