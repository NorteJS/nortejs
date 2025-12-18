/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set basePath only in production
  basePath: process.env.NODE_ENV === 'development' ? '' : '/nortejs',
};

export default nextConfig;