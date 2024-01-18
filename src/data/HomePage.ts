type ImgItem = {
  id: number;
  imgUrl: string;
  title: string;
  content: string;
};

import { ref } from "vue";
import { handleViteImages } from "@/utils";

export const imgList = ref<ImgItem[]>([
  {
    id: 0,
    imgUrl: handleViteImages("@/assets/icons/offering_bg.jpg"),
    title: "Enable Gene Therapy For Better Lives",
    content:
      "Your Trustful Partner in Research and Manufacturing for Gene and Cell Therapy",
  },
  {
    id: 1,
    imgUrl: handleViteImages("@/assets/icons/img1.jpg"),
    title: "Make Gene Delivery Accessible",
    content: "Side-by-Side Navigation for Your Innovations",
  },
  {
    id: 2,
    imgUrl: handleViteImages("@/assets/icons/carousel_bg1.jpg"),
    title: "Industrialize Your Product At OBiO",
    content: "End-to-End Offerings with Versatile Technical Platform",
  },
  {
    id: 3,
    imgUrl: handleViteImages("@/assets/icons/carousel_bg2.jpg"),
    title: "For Global Customers",
    content:
      "OBiO has launched its state-of-the-art GMp facility Intelli-M in 2023",
  },
]);
