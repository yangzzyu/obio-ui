import { useRouter } from "vue-router";
// const imgPath = import.meta.env.VITE_APP_TITLE;
export const handleViteImages = (imgPath: string) => {
  console.log();
  
  try {
    const getSplit = imgPath.split("/");
    const getName = getSplit[getSplit.length - 1];
    return new URL(
      `${import.meta.env.VITE_APP_IMG_PATH}${getName}`,
      import.meta.url
    ).href;
  } catch (error) {
    console.warn(error);
  }
};

export const goRouter = (path: string) => {
  const router = useRouter();
  // console.log(path, router, "uuuuu");

  router.push(path);
};
