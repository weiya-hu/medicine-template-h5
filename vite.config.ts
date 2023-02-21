import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  //检查process.cwd()路径下.env.development.local、.env.development、.env.local、.env这四个环境文件
  loadEnv(mode, process.cwd())
  //返回vite配置
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      dedupe: ['vue'],
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        //全局样式文件
        scss: {
          additionalData: '@import "@/assets/styles/main.scss";',
        },
      },
    },
    server: {
      //启动服务配置
      host: '0.0.0.0',
      port: 9000,
      open: false,
      https: false,
      proxy: {
        '/api': {
          target: 'http://api.sp.shanhaiping.com',
          // target: 'http://192.168.1.37:8080/',
          // target: 'http://192.168.1.100:8080/',
          // target: 'https://test.api.shanhaiping.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      assetsDir: './static',
      chunkSizeWarningLimit: 500,
      reportCompressedSize: false,
      minify: 'terser',
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      terserOptions: {
        compress: {
          // warnings: false,
          drop_console: true, // 打包时删除console
          drop_debugger: true, // 打包时删除 debugger
          pure_funcs: ['console.log'],
        },
        output: {
          // 去掉注释内容
          comments: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            // 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。
            vue: ['vue', 'vue-router'],
            // vant: ['vant'],
            // echarts: ['echarts'],
          },
        },
      },
    },
  }
})
