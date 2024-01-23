<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-23 13:55:14
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Insights-wrap">
    <div class="section-1">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <span class="fontf8 font-size50"> Press Releases</span>
          <div class="p font-size18"></div>
        </div>
        <div class="in-news-list1">
          <div class="item" v-for="(item, index) in tableData" :key="index">
            <a href="/cn/home/news/id/241" class="block">
              <div class="font-size16">{{ item.time }}</div>
              <div class="title fontf4 font-size24">
                {{ item.title }}
              </div>
              <div class="font-size18 ut-s2">
                {{ item.content }}
              </div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
        </div>
        <!-- <div class="in-news-all-btn font-size20 fontf3"><a href="">ALL PRESS RELEASES</a></div> -->
        <el-pagination
          class="page ub-ac"
          v-model:current-page="pageinfo.currPage"
          v-model:page-size="pageinfo.pageSize"
          background
          layout="prev, pager, next"
          :total="pageinfo.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="Cdmo">
import { ref } from "vue";
import { useTransition } from "@vueuse/core";
import { ArrowRight } from "@element-plus/icons-vue";
const tableData = ref<any>();

const tableDatas = ref([
  {
    id: "1",
    time: "January 13th 2024",
    title: `Focusing on efficient gene delivery of NK cells, The First
                Condor Life and OBiO Technology reach a strategic cooperation!`,
    content: `The First Condor Life and OBiO Technology have reached a
                strategic cooperation. In this collaboration, The First Condor
                Life and OBiO Technology will share resources, complement each
                other's advantages, jointly address market changes and
                competitive pressures, and achieve win-win cooperation and
                sustainable development. On December 27th, Shenzhen First Condor
                Life Science Co. Ltd. (hereinafter referred to as " First Condor
                Life") in Shenzhen and OBiO Biotechnology (Shanghai) Co., Ltd.
                (stock code: 688238) (hereinafter referred to as " OBiO
                Biotech") signed a strategic cooperation agreement in Lingang,
                Shanghai. First Condor Life's co-founder and CTO, Maria Ma,
                Quality Director Liu Dong, Early R&amp;D Director Wang
                Zhongsheng, CAR-NK Platform Head Huang Jing, OBiO Biotech CEO
                Jia Guodong, Deputy General Manager Yin Shan, and Marketing
                Director Wang Yao attended the signing ceremony."`,
  },
  {
    id: "2",
    time: "24th Oct. 2023",
    title: `OBiO Announces Strategic Partnership with Refreshgene to Realize
                Commercialization of Gene Therapy Product`,
    content: `OBiO Technology (Shanghai) Corp., Ltd. (Stock code: SH688238), a
                world leading contract development and manufacturing
                organization for cell and gene therapy, officially announced an
                agreement with Refreshgene Therapeutics (Refreshgene).`,
  },
  {
    id: "3",
    time: "31st Aug. ,2023",
    title: `OBiO Announces Strategic Partnership with Tofflon to Advance
                Cell and Gene Therapy Development`,
    content: `OBiO Technology (Shanghai) Corp., Ltd. (Stock code: SH688238)
                today announced that it entered into a strategic cooperation
                agreement with today announced that it entered into a strategic
                cooperation agreement with Shanghai Tofflon Science and
                Technology Co.Ltd.(Stock code:SZ300171).`,
  },
  {
    id: "4",
    time: "29th Jun. ,2023",
    title: `FDA Acceptance of Drug Master File Marks New Milestone Achieved
                for OBiO TECH of GMP Plasmid Products`,
    content: `OBiO Technology (Shanghai) Corp., Ltd (Stock code: SH688238) is
                a biotechnology company focusing on the cell and gene therapy
                field. Recently announced that the U.S. Food and Drug
                Administration (FDA) has successfully obtained the GMP plasmid
                DNA Drug Master File (DMF) filing.`,
  },
  {
    id: "5",
    time: "29th Apr. ,2023",
    title: `OBiO and CHINAGENE reached a strategic agreement of commercial
                manufacturing services for gene therapy products`,
    content: `On April 21, 2023, OBiO Technology (Shanghai) Corp., Ltd.
                announced a strategic agreement of commercial manufacturing
                collaboration with CHINAGENE.`,
  },
]);
const pageinfo = ref({
  total: 0,
  currPage: 1,
  pageSize: 5,
});

const getProp = () => {
  tableData.value = tableDatas.value.slice(
    (pageinfo.value.currPage - 1) * pageinfo.value.pageSize,
    pageinfo.value.currPage * pageinfo.value.pageSize
  );
  pageinfo.value.total = tableDatas.value.length;
};

const handleSizeChange = (val: number) => {
  pageinfo.value.pageSize = val;
  getProp();
};
const handleCurrentChange = (val: number) => {
  pageinfo.value.currPage = val;
  getProp();
};
getProp()
</script>
