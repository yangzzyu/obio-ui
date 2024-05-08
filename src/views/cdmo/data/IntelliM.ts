/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-19 10:45:39
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 13:55:28
 * @FilePath: \obio-ui\src\views\about\data\SpiroSite.ts
 */
type IntelliMItem = {
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
export const IntelliMItemList = ref<IntelliMItem[]>([
  {
    id: 0,
    txt: "Phase I & II Clinical Manufacturing",
  },
  {
    id: 1,
    txt: "Phase III Clinical Manufacturing",
  },
  {
    id: 2,
    txt: "Commercial Manufacturing",
  },
  {
    id: 3,
    txt: "Process and Analytical Method Development",
  },
  {
    id: 4,
    txt: "Technology Transfer and Process Characterization",
  },
  {
    id: 5,
    txt: "Aspetic Fill and Finish",
  },
]);
