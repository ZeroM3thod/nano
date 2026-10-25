import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() { return [
    { source: "/sw.js", headers: [{ key: "Cache-Control", value: "no-cache" }] },
    { source: "/.well-known/assetlinks.json", headers: [{ key: "Content-Type", value: "application/json" }] },
  ]; },
};

export default nextConfig;
