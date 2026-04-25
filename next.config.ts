import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },


  output: "export",

 
  basePath: "/fashionboutique",


  trailingSlash: true,

 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;