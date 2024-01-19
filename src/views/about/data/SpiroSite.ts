/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-19 10:45:39
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 10:48:21
 * @FilePath: \obio-ui\src\views\about\data\SpiroSite.ts
 */
type InnovationsItem = {
  id: number;
  txt: string;
};

import { ref } from "vue";
export const InnovationsList = ref<InnovationsItem[]>([
  {
    id: 0,
    txt: "Virology and Vectorology",
  },
  {
    id: 1,
    txt: "Cellular Biology",
  },
  {
    id: 2,
    txt: "Animal Studies",
  },
  {
    id: 3,
    txt: "Exocellular Vesicles",
  },
  {
    id: 4,
    txt: "Bioassay and Testing",
  },
  {
    id: 5,
    txt: "Process Development",
  },
  {
    id: 6,
    txt: "Analytical Method Development",
  },
  {
    id: 7,
    txt: "Novel AAV Capsid screening (AAVneO™ platform)",
  },
]);
