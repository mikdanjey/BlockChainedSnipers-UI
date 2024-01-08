/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mikdantech.local",
      },
    ],
  },
  // experimental: {
  //   forceSwcTransforms: true,
  // },
};

module.exports = nextConfig;
