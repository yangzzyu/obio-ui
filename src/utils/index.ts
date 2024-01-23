import { useRouter } from "vue-router";
export const handleViteImages = (imgPath: string) => {
  try {
    const getSplit = imgPath.split("/");
    const getName = getSplit[getSplit.length - 1];
    return new URL(`../assets/icons/${getName}`, import.meta.url).href;
  } catch (error) {
    console.warn(error);
  }
};

export const goRouter = (path: string) => {
  const router = useRouter();
  console.log(path, router, "uuuuu");

  router.push(path);
};
