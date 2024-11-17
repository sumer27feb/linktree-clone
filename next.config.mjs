/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "aws-linktree-sumer.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
