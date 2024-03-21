type HistoryItem = {
  id: number;
  year: string;
  txt: string[];
};

import { ref } from "vue";
import { handleViteImages } from "@/utils";

export const historyList = ref<HistoryItem[]>([
  {
    id: 0,
    year: "2013",
    txt: ["OBiO founded"],
  },
  {
    id: 1,
    year: "2014",
    txt: [
      `The acquisition of Neuron Biotech Co., Ltd. (which has
        become a wholly owned subsidiary of OBiO after the
        acquisition)
        <span class="txt-color txt-bold">laid down a solid foundation</span>
        for OBiO as a leading AAV service provider`,
      `R&D of a number of gene therapy vectors and CRO service
      started`,
    ],
  },
  {
    id: 2,
    year: "2015",
    txt: [
      `Shareholding reform and
      <text class="txt-color txt-bold">Round A equity financing</text>
      completed`,
      `Engaged in the first industry-academy-research strategic
      cooperation with Chinese Academy of Medical Sciences`,
    ],
  },
  {
    id: 3,
    year: "2016",
    txt: [
      `Listed in the
      <text class=" txt-color txt-bold"
        >National Equities Exchange And Quotations(NEEQ) system
      </text>`,
      `OBiO Zhangjiang Integrated R&D Building (Floorage: 5000
        ㎡) commissioned`,
    ],
  },
  {
    id: 4,
    year: "2017",
    txt: [
      `Viral vector GLP pilot-scale platform constructed and
      commissioned`,
      `Entered into an agreement with GE Medical for a global
      strategic cooperation in
      <text class=" txt-color txt-bold"
        >gene therapy research as a step towards business
        expansion into gene therapy CDMO sector
      </text>`,
    ],
  },
  {
    id: 5,
    year: "2018",
    txt: [
      `The first
    <text class=" txt-color txt-bold"
      >OBiO CDMO project for IND submission of gene therapies
      (will be) launched
    </text>`,
    ],
  },
  {
    id: 6,
    year: "2019",
    txt: [
      `OBiO Intelli-M (Shanghai) Gene Technology Co., Ltd., a
      subsidiary of OBiO, was founded;`,
      `Successfully delisted from the National Equities
      Exchange And Quotations(NEEQ) system`,
      `<text class=" txt-color txt-bold"
      >OBiO GMP production platform (Floorage: 5000 m2)
      constructed and commissioned
    </text>`,
    ],
  },
  {
    id: 7,
    year: "2020",
    txt: [
      `<text class=" txt-color txt-bold"
      >Round 4 fund-raising completed
    </text>
    (Amount raised in RMB: XXX yuan)`,
      `GMP platform expanded to about 7000 ㎡`,
      `Construction of Lingang Precision Medicine Industry Base started`,
      `Accredited to be cGMP-compliant in an audit by a
      third-party Notified Body`,
      // `Received CTA approval letters from drug administrations
      // in China, the United States, and Australia for
      // <text class=" txt-color txt-bold"
      //   >the first oncolytic virus project of an OBiO client
      // </text>`,
    ],
  },
  {
    id: 8,
    year: "2021",
    txt: [
      `<text class=" txt-color txt-bold">
      Successfully reviewed for the IPO in STAR Market
    </text>`,
      `GMP platform expanded to more than 10000 ㎡`,
      `<text class=" txt-color txt-bold">
      Multiple phase II clinical studies contracted
    </text>`,
      `AAVneO® vector screening campaign launched, several
      innovative vectors preliminarily identified`,
    ],
  },
  {
    id: 9,
    year: "2022",
    txt: [
      `<text class=" txt-color txt-bold"
      >Listed as the first Chinese CGT CDMO in STAR Market on
      March 22
    </text>`,
      `The company’s US branch, OBiO Tech., founded for
    expanding business outside China`,
    ],
  },
  {
    id: 10,
    year: "2023",
    txt: [
      `<text class=" txt-color txt-bold">
      Lingang CGT GMP production base (Floorage: 80,000m2)
      commissioned on April 21
    </text>`,
      `By 23H1, OBiO had helped its clients to get a total of
    25 IND approval letters (8 of which were from FDA)`,
    ],
  },
  {
    id: 11,
    year: "Future",
    txt: [
      `For Global Customer Becoming a leading multi-service
                            provider in biopharmaceutical industry`,
    ],
  },
]);
