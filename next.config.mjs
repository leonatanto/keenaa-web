/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optimize production builds
  swcMinify: true,
  // Improve performance by reducing JavaScript
  reactStrictMode: true,
  // Improve performance by reducing bundle size
  compress: true,
  // Improve performance by enabling HTTP keep-alive
  poweredByHeader: false,
  // Generate static HTML files when possible
  output: 'standalone',
};

export default nextConfig;
