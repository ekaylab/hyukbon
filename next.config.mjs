/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hyukbon-assets-381491848841.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
