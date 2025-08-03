/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <--- This enables static export
  trailingSlash: true, // Ensures URLs like /about-us/ work correctly on shared hosting

  images: {
    unoptimized: true, // Required for static export with remote images
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },

  // Optional: for development in custom environments
  allowedDevOrigins: ["*.preview.same-app.com"],
};

module.exports = nextConfig;
