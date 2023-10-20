/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
      
        return config;
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets',
            port: '',
            pathname: '/http://localhost:3000/**',
          },
        ],
      },
}

module.exports = nextConfig 
 