/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
      },
      { protocol: "https", hostname: "www.harpercollins.com", port: "" },
      { protocol: "https", hostname: "upload.wikimedia.org", port: "" },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        port: "",
      },
      { protocol: "https", hostname: "static.wikia.nocookie.net", port: "" },
    ],
  },
};

export default nextConfig;
