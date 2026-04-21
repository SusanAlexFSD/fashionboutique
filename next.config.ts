import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },

  // ✅ Enable static export (needed for IONOS / FileZilla)
  output: "export",

  // ✅ Required for static hosting
  images: {
    unoptimized: true,
  },

  // ✅ Optional but recommended (fixes trailing routes like /about → /about.html)
  trailingSlash: true,
};

export default nextConfig;