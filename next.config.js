/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "images.unsplash.com",
            "via.placeholder.com",
            "picsum.photos",
            "ui-avatars.com",
            "i.pravatar.cc",
            "source.unsplash.com",
            "luxebeauty.store",
            "cdn.shopify.com",
        ],
        unoptimized: true,
    },
    experimental: {
        serverComponentsExternalPackages: ['mongoose']
    }
};

module.exports = nextConfig;
