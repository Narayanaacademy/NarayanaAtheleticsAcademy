import { dirname } from "path";
import { fileURLToPath } from "url";

/** Get __dirname in ESM */
const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  outputFileTracingRoot: __dirname, // fixes workspace root warning
  images: {
    unoptimized: false
  }
};

export default nextConfig;
