import nextMdx from "@next/mdx";

const withMdx = nextMdx({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  // Optionally provide remark and rehype plugins
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
import configuration from "./configuration.mjs";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["md", "mdx", "tsx", "ts"],
  basePath: configuration.BasePath,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV == "development",
    },
  },
  async redirects() {
    return configuration.Redirects;
  },
  experimental: {
    //support app router tree shaking
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  // 单独部署打包成最小node执行文件
  output: "standalone",
};

const finalNextConfig = withMdx(nextConfig);

export default finalNextConfig;
