/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 09:26:06
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-26 10:59:06
 * @FilePath: \obio-ui\src\data\HomePage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    pTxt: "International Medical Park Shanghai, China",
    imgUrl: handleViteImages("@/assets/icons/facilities_img1.jpg"),
    bgUrl: "./assets/icons/facilities_bg1.png",
    path: "/spiroSite",
  },
  {
    title: "OBiO Intelli-M",
    pmText: [
      "Process Development  Characterization",
      "Clinical and Commercial Manufacturing",
      "77,000-square-meter Facility for Global Supply",
    ],
    pTxt: "Lin-Gang Free-Trade Zone Shanghai, China",
    imgUrl: handleViteImages("@/assets/icons/facilities_img2.jpg"),
    bgUrl: "./assets/icons/facilities_bg2.png",
    path: "/intelliM",
  },
  {
    title: "PINE Site",
    pmText: [
      "Process and Analytical Method Development",
      "Pre-clinical and Clinical Manufacturing",
      "Three-building, 10,000-square-meter campus",
    ],
    pTxt: "International Medical Park Shanghai, China",
    imgUrl: handleViteImages("@/assets/icons/facilities_img3.jpg"),
    bgUrl: "./assets/icons/facilities_bg3.png",
    path: "/pineSite",
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
    time: "10th-12th Oct. ,2023",
    title: `Cell&amp;Gene meeting on the Mesa`,
    pText: `Carlsbad, CA, United States`,
    type: 2,
  },
  {
    time: "18th-21st Sep. ,2023",
    title: ` BioProcess International Conference &amp; Exhibition`,
    pText: `Boston, MA`,
    type: 2,
  },
  {
    time: "16th-20th May ,2023",
    title: `ASGCT 26th Annual Meeting`,
    pText: `Los Angeles, CA`,
    type: 2,
  },
]);
