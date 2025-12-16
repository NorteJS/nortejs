import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: '/',
  // assetPrefix: '/',
  images: {
    unoptimized: true,
  },
  // Outras opções de configuração aqui
};

export default nextConfig;