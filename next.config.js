/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  transpilePackages: [
    'sanity',
    '@sanity/client',
    '@sanity/visual-editing',
    '@sanity/mutate'
  ],
  // styledComponents disabled - not using StyledComponentsRegistry
  // compiler: { styledComponents: true },
};

module.exports = nextConfig;
