/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "mks-sistemas.nyc3.digitaloceanspaces.com" }],
  },
};

export default nextConfig;
