/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: 'export',
    basePath: isProd ? "/Personal-Website" : "",
    assetPrefix: isProd ? "/Personal-Website/" : "",
    images: { unoptimized: true },
}

export default nextConfig
