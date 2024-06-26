/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-25 22:14:32
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-06-20 15:04:46
 * @FilePath: \obio-ui\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from "node:url";

import legacy from "@vitejs/plugin-legacy";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import nightwatchPlugin from "vite-plugin-nightwatch";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_BASE_API, VITE_APP_SSO_HOST } = env;
  const reg = new RegExp("^" + VITE_APP_BASE_API);
  return {
    // base: "./",
    // publicPath: "./",
    // publicPath: "../../",
    plugins: [
      vue(),
      nightwatchPlugin(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets", //指定静态资源存放路径
      sourcemap: false, //是否构建source map 文件
      // terserOptions: {
      //   // 生产环境移除console
      //   compress: {
      //     drop_console: true,
      //     drop_debugger: true,
      //   },
      // },
    },
    test: {
      globals: true,
      environment: "jsdom",
      server: {
        deps: {
          inline: ["vuetify"],
        },
      },
    },
    // vite 相关配置
    server: {
      port: 80,
      host: true,
      open: true,
      proxy: {
        [VITE_APP_BASE_API]: {
          target: VITE_APP_SSO_HOST,
          changeOrigin: true,
          rewrite: (p) => p.replace(reg, ""),
        },
      },
      // disableHostCheck: true
    },
  };
});
