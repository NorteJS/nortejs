import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// GitHub Pages é estático. Para gerar a pasta `out/`, habilite export.
const isStaticExport =
  process.env.NEXT_PUBLIC_DEPLOY_TARGET === "github-pages" ||
  process.env.GITHUB_ACTIONS === "true";

// Para domínio custom (CNAME/js.org), o correto é basePath "" (root).
// Se algum dia você publicar por subpasta, defina `NEXT_PUBLIC_BASE_PATH=/sua-subpasta`.
const basePath = isDev ? "" : process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  basePath,
  trailingSlash: true,
  reactCompiler: true,
  ...(isStaticExport
    ? {
        output: "export",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
