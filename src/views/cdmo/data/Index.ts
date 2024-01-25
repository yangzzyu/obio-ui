/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 09:26:06
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 16:09:02
 * @FilePath: \obio-ui\src\data\HomePage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type ViralItem = {
  id: number;
  imgUrl: string;
  title: string;
  content: string;
  path: string;
};

import { ref } from "vue";
import { handleViteImages } from "@/utils";

export const ViralList = ref<ViralItem[]>([
  {
    id: 0,
    imgUrl: handleViteImages("@/assets/icons/cdmo_icon1.png"),
    title: "Viral Vectors",
    content: `With process development and cGMP manufacturing services for
    virus vectors including adeno-associated virus and lentivirus,
    we can flexibly adjust to adherent or suspension-based platform
    to meet your manufacturing demands.`,
    path: "/process",
  },
  {
    id: 1,
    imgUrl: handleViteImages("@/assets/icons/cdmo_icon2.png"),
    title: "Oncolytic Virus",
    content: `We provide process development and cGMP manufacturing services
    for various oncolytic virus products including oncolytic
    adenovirus, herpes simplex virus, vaccinia virus, vesicular
    stomatitis virus and new castle disease virus. Our cell culture
    processes and flexible cGMP manufacturing can flexibly
    accommodate your manufacturing demands at different scales.`,
    path: "/cgmp",
  },
  {
    id: 2,
    imgUrl: handleViteImages("@/assets/icons/cdmo_icon3.png"),
    title: "Cell Therapy Products",
    content: `We provide autologous, such as CAR-T therapy, and allogeneic
    cell therapy products, such as universal T-cell therapy, natural
    killer cell therapy, and hematopoietic stem cell therapy.`,
    path: "/quality",
  },
  {
    id: 3,
    imgUrl: handleViteImages("@/assets/icons/cdmo_icon4.png"),
    title: "Plasmid Nucleotides",
    content: `With extensive expertise in the development of customized
    plasmid DNA manufacturing solutions, we provide plasmid services
    from process development to large-scale cGMP manufacturing. In
    addition, we provide process development and cGMP manufacturing
    services for nucleotides including mini-circle plasmid and mRNA
    therapy.`,
    path: "/logistics",
  },
]);
