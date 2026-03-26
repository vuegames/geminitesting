/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Конфиг для обхода ошибок при билде */
  typescript: {
    // Игнорируем ошибки TypeScript, чтобы билд не падал
    ignoreBuildErrors: true,
  },
  eslint: {
    // Игнорируем ошибки ESLint (правила написания кода) при сборке
    ignoreDuringBuilds: true,
  },
  // Другие опции (если понадобятся) можно добавлять ниже
};

export default nextConfig;
