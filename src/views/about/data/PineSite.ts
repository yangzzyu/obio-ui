/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-19 10:45:39
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 13:41:59
 * @FilePath: \obio-ui\src\views\about\data\SpiroSite.ts
 */
type PineItem = {
  id: number;
  txt: string;
};

import { ref } from "vue";
// Process Development
// ● Analytical Method Development
// ● Technology Transfer and Process Scale-up
// ● Non-clinical Investigation Service
// ● IND-Enabling CMC Service (IND-CMC)
// ● Phase I & II Clinical Manufacturing
// ● Bank Construction (Strain, Cell, Virus Seed Stock)
// ● Aseptic Fill and Finish
// ● Stability Study
export const PineList = ref<PineItem[]>([
  {
    id: 0,
    txt: "Process Development",
  },
  {
    id: 1,
    txt: "Analytical Method Development",
  },
  {
    id: 2,
    txt: "Technology Transfer and Process Scale-up",
  },
  {
    id: 3,
    txt: "Non-clinical Investigation Service",
  },
  {
    id: 4,
    txt: "IND-Enabling CMC Service (IND-CMC)",
  },
  {
    id: 5,
    txt: "Phase I & II Clinical Manufacturing",
  },
  {
    id: 6,
    txt: "Bank Construction (Strain, Cell, Virus Seed Stock)",
  },
  {
    id: 7,
    txt: "Aseptic Fill and Finish",
  },
  {
    id: 8,
    txt: "Stability Study",
  },
]);
