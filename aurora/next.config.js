/** @type {import('next').NextConfig} */
/* const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}; */

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        REVALIDATE_VALUE: 7 * 86400,
    },
};
