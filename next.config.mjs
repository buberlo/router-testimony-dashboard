/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /*
   * Skeleton/dashboard builds should not fail on lint noise.
   * Keep linting available in dev, but let `next build` pass while
   * the courtroom dashboard is still being assembled.
   */
  eslint: {
    ignoreDuringBuilds: true,
  },

  /*
   * Keep TypeScript checking enabled so the shared lib/types and
   * component props stay coherent, but avoid a separate lint gate
   * during early build runs.
   */
  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  poweredByHeader: false,

  logging: {
    fetches: {
      fullStack: true,
    },
  },
};

export default nextConfig;