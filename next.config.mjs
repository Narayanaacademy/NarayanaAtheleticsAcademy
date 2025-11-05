/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  outputFileTracingRoot: __dirname, // prevents workspace root warning
  images: {
    unoptimized: false
  }
};

export default nextConfig;
