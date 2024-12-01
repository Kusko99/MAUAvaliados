/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com", // Host remoto permitido
        port: "", // Deixe em branco se não houver uma porta específica
        pathname: "/**", // Permite todos os caminhos a partir do host
      },
    ],
  },
};

export default nextConfig;
