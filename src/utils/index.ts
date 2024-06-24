/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-27 21:06:22
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-06-24 11:28:38
 * @FilePath: \obio-ui\src\utils\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRouter } from "vue-router";
// const imgPath = import.meta.env.VITE_APP_TITLE;
export const handleViteImages = (imgPath: string) => {
  try {
    // const getSplit = imgPath.split("/");
    // const getName = getSplit[getSplit.length - 1];
    return new URL(
      `${import.meta.env.VITE_APP_IMG_PATH}${imgPath}`,
      import.meta.url
    ).href;
  } catch (error) {
    console.warn(error);
  }
};

export const goRouter = (path: string) => {
  const router = useRouter();
  router.push(path);
};
