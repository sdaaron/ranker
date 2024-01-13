/** @type {import('next').NextConfig} */
const nextConfig = {
  //   env: {
  //     AGENT_REQUEST_ENDPOINT: process.env.AGENT_REQUEST_ENDPOINT,
  //   },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
// });
// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "md", "mdx"],
// });
