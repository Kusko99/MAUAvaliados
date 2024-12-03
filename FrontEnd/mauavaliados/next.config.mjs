/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "", // Permite imagens do domínio img.clerk.com
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.igdb.com", // Adicionado para permitir imagens do IGDB
        port: "",
        pathname: "/v4/covers/**", // Permite apenas as imagens em /v4/covers/
      },
    ],
  },
};

export default nextConfig;
