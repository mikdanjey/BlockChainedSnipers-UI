/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "mikdantech.local",
  //     },
  //   ],
  // },
  images: {
    unoptimized: true,
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "via.placeholder.com",
      "developers.google.com",
      "mikdantech.local",
    ],
  },
  env: {
    NEXTAUTH_SECRET: "c73a066a-a725-4918-bb07-fd71c27e0a24",
  },
  // experimental: {
  //   forceSwcTransforms: true,
  // },
};

module.exports = nextConfig;
