/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 09:26:06
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-21 16:30:20
 * @FilePath: \obio-ui\src\data\HomePage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type ImgItem = {
  id: number;
  imgUrl: string;
  title: string;
  content: string;
  text: string;
};

import { ref } from "vue";
import { handleViteImages } from "@/utils";

export const imgList = ref<ImgItem[]>([
  {
    id: 0,
    imgUrl: handleViteImages("offering_bg.jpg"),
    title: "Enable Gene Therapy For Better Lives",
    content:
      "Your Trustful Partner in Research and Manufacturing for Gene and Cell Therapy",
    text: "Providing client-centered and high-quality service as our commitment, we strive to become a world leading gene and cell therapy CRO/CDMO group.",
  },
  // {
  //   id: 1,
  //   imgUrl: handleViteImages("img1.jpg"),
  //   title: "Make Gene Delivery Accessible",
  //   content: "Side-by-Side Navigation for Your Innovations",
  //   text: "Providing client-centered and high-quality service as our commitment, we strive to become a world leading gene and cell therapy CRO/CDMO group.",
  // },
  // {
  //   id: 2,
  //   imgUrl: handleViteImages("carousel_bg1.jpg"),
  //   title: "Industrialize Your Product At OBiO",
  //   content: "End-to-End Offerings with Versatile Technical Platform",
  //   text: "Providing client-centered and high-quality service as our commitment, we strive to become a world leading gene and cell therapy CRO/CDMO group.",
  // },
  // {
  //   id: 3,
  //   imgUrl: handleViteImages("carousel_bg2.jpg"),
  //   title: "For Global Customers",
  //   content:
  //     "OBiO has launched its state-of-the-art GMp facility Intelli-M in 2023",
  //   text: "Providing client-centered and high-quality service as our commitment, we strive to become a world leading gene and cell therapy CRO/CDMO group.",
  // },
]);

type FacilitiesDataItem = {
  id?: number;
  title: string;
  pmText: string[];
  pTxt: string;
  imgUrl: string;
  bgUrl: string;
  path: string;
};
export const homeFacilitiesData = ref<FacilitiesDataItem[]>([
  {
    title: "SPIRO Site",
    pmText: [
      "Integrated Laboratory Services",
      "Process and Analytical Method Development",
      "Research and Development Center",
    ],
    pTxt: "International Medical Park",
    imgUrl: handleViteImages("facilities_img1.jpg"),
    bgUrl: "./assets/icons/facilities_bg1.png",
    path: "/about/facilities/spiro",
  },
  {
    title: "OBiO Intelli-M",
    pmText: [
      "Process Development  Characterization",
      "Clinical and Commercial Manufacturing",
      "77,000-square-meter (828,821 ft²) Facility for Global Supply",
    ],
    pTxt: "Lin-Gang Free-Trade Zone",
    imgUrl: handleViteImages("facilities_img2.jpg"),
    bgUrl: "./assets/icons/facilities_bg2.png",
    path: "/about/facilities/intellim",
  },
  {
    title: "PINE Site",
    pmText: [
      "Process and Analytical Method Development",
      "Pre-clinical and Clinical Manufacturing",
      "Three-building, 10,000-square-meter (107,639 ft²) campus",
    ],
    pTxt: "International Medical Park",
    imgUrl: handleViteImages("facilities_img3.jpg"),
    bgUrl: "./assets/icons/facilities_bg3.png",
    path: "/about/facilities/pine",
  },
]);

type insightsDataItem = {
  id?: number;
  time: string;
  title: string;
  pText: string;
  type: number;
};
/**
 * type  1为Press Releases  2为Events
 */
export const insightsData = ref<insightsDataItem[]>([
  {
    time: "Jan 14,2024",
    title:
      "Focusing on efficient gene delivery of NK cells, The First Condor Life and OBiO Technology reach a strategic cooperation!",
    pText: `
    The First Condor Life and OBiO Technology have
    reached a strategic cooperation. In this
    collaboration, The First Condor Life and OBiO
    Technology will share resources, complement each
    other's advantages, jointly address market changes
    and competitive pressures, and achieve win-win
    cooperation and sustainable development. On December
    27th, Shenzhen First Condor Life Science Co. Ltd.
    (hereinafter referred to as " First Condor Life") in
    Shenzhen and OBiO Biotechnology (Shanghai) Co., Ltd.
    (stock code: 688238) (hereinafter referred to as "
    OBiO Biotech") signed a strategic cooperation
    agreement in Lingang, Shanghai. First Condor Life's
    co-founder and CTO, Maria Ma, Quality Director Liu
    Dong, Early R&amp;D Director Wang Zhongsheng, CAR-NK
    Platform Head Huang Jing, OBiO Biotech CEO Jia
    Guodong, Deputy General Manager Yin Shan, and
    Marketing Director Wang Yao attended the signing
    ceremony."`,
    type: 1,
  },
  {
    time: "Oct 24,2023",
    title:
      "OBiO Announces Strategic Partnership with Refreshgene to Realize Commercialization of Gene Therapy Product",
    pText: `
    OBiO Technology (Shanghai) Corp., Ltd. (Stock code:
      SH688238), a world leading contract development and
      manufacturing organization for cell and gene
      therapy, officially announced an agreement with
      Refreshgene Therapeutics (Refreshgene).`,
    type: 1,
  },
  {
    time: "Sep 05,2023",
    title: `OBiO Announces Strategic Partnership with Tofflon to
      Advance Cell and Gene Therapy Development`,
    pText: `
    OBiO Technology (Shanghai) Corp., Ltd. (Stock code:
      SH688238) today announced that it entered into a
      strategic cooperation agreement with today announced
      that it entered into a strategic cooperation
      agreement with Shanghai Tofflon Science and
      Technology Co.Ltd.(Stock code:SZ300171).`,
    type: 1,
  },

  {
    time: "Oct 10-12 2023",
    title: `Cell & Gene meeting on the Mesa`,
    pText: `Carlsbad, CA, United States`,
    type: 2,
  },
  {
    time: "Sep 18-21 2023",
    title: ` BioProcess International Conference &amp; Exhibition`,
    pText: `Boston, MA`,
    type: 2,
  },
  {
    time: "May 16-20 2023",
    title: `ASGCT 26th Annual Meeting`,
    pText: `Los Angeles, CA`,
    type: 2,
  },
]);
