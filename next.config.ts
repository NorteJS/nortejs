import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nortejs',
  images: {
    unoptimized: true,
  },
  // Outras opções de configuração aqui
};

export default nextConfig;
