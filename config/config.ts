import { defineConfig } from 'umi';
import routes from './routes';

const outputPath = 'dist/';

const env = process.env.NODE_ENV;
const path = env === 'development' ? 'http://127.0.0.1:8000/' : outputPath;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  ssr: {
    mode: 'stream',
  },
  dva: {
    immer: true,
    // hmr: false,
  },
  antd: {},
  outputPath,
  publicPath: path,
  favicon: '/img/jx.jpg',
  theme: {
    '@primary-color': '#1e80ff',
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  cssModulesTypescriptLoader: {},
});
