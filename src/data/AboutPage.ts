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
      "Embarked on contract research services for gene therapy",
      `Acquisition of Neuron Biotech, establish a leading
        position in contract research services of
        adeno-associated virus in China`,
    ],
  },
  {
    id: 2,
    year: "2015",
    txt: [
      "Series A financing completed",
      `Industry-academia-research strategic collaboration
        with Chinese Academy of Medical Sciences (CAMS)`,
    ],
  },
  {
    id: 3,
    year: "2016",
    txt: [
      ` Started the operation of research and development
        platform at SPIRO Site`,
      `Listed on National Equities Exchange and Quotations
        (NEEQ)`,
    ],
  },
  {
    id: 4,
    year: "2017",
    txt: [
      ` Constructed and started operating the GLP pilot
        platform for viral vector at SPIRO Site`,
      `Global strategic collaboration with GE Healthcare on
       gene therapy`,
    ],
  },
  {
    id: 5,
    year: "2018",
    txt: [`First Pre-IND project of viral vector product`],
  },
  {
    id: 6,
    year: "2019",
    txt: [
      ` Operation started at PINE Site with +5,000 sqm GMP
        footprint`,
      `Delisted from National Equities Exchange and
       Quotations (NEEQ)`,
      `Official registration of OBiO Intelli-M
        manufacturing site`,
    ],
  },
  {
    id: 7,
    year: "2020",
    txt: [
      `Completion of four rounds of financing`,
      `Scaled up to +7,000 sqm GMP footprint`,
      `Third-party GMP audit clearance`,
      `Supported the first oncolytic virus IND clearance in
        China, the United States and Australia`,
      `Embarked on the construction of OBiO Intelli-M at
        Lin-Gang Free-Trade Zone`,
    ],
  },
  {
    id: 8,
    year: "2021",
    txt: [
      `Successful IPO submission on STAR Board`,
      `Scaled up to +10,000 sqm GMP footprint`,
      `Supported multiple Phase II clinical studies`,
      `Initiation of AAVneO™ capsid screening platform
                            with novel serotypes obtained`,
    ],
  },
  {
    id: 9,
    year: "2022",
    txt: [
      `Successful Listing on Shanghai Stock Exchange (SSE,
        code: 688238)`,
    ],
  },
  {
    id: 10,
    year: "2023",
    txt: [
      ` The OBiO Intelli-M cGMP GCT manufacturing facility
        is now officially operational and fully operational.`,
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
