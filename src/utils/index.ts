export const handleViteImages = (imgPath: string) => {
  try {
    const getSplit = imgPath.split("/");
    const getName = getSplit[getSplit.length - 1];
    return new URL(`../assets/icons/${getName}`, import.meta.url).href;
  } catch (error) {
    console.warn(error);
  }
};
