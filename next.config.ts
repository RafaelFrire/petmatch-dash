import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", // O domínio que você quer permitir
        port: "3333", // O porto do servidor
        pathname: "/api/search/**", // O caminho específico para as imagens
      },
    ],
  },
};

export default nextConfig;
