const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Tell Next.js not to bundle these native/server-only packages
    // Required for Vercel serverless to work with mongoose and bcryptjs
    experimental: {
        serverComponentsExternalPackages: ['mongoose', 'bcryptjs'],
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

module.exports = withNextIntl(nextConfig);
