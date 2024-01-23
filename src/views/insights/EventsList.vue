<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-23 13:55:04
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Insights-wrap">
    <div class="section-1">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <span class="fontf8 font-size50">Events</span>
          <div class="p font-size18"></div>
        </div>
        <div class="in-news-list1">
          <div class="item" v-for="(item, index) in tableData" :key="index">
            <a href="/cn/home/news/id/228" class="block">
              <div class="font-size16">{{ item.time }}</div>
              <div class="title fontf4 font-size24">
                {{ item.title }}
              </div>
              <div class="font-size18 ut-s2">{{ item.content }}</div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
        </div>
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
        <!-- <div class="in-news-all-btn font-size20 fontf3"><a href="">ALL PRESS RELEASES</a></div> -->
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
    time: "10th-12th Oct. ,2023",
    title: `Cell Gene meeting on the Mesa`,
    content: `Carlsbad, CA, United States`,
  },
  {
    id: "2",
    time: "18th-21st Sep. ,2023",
    title: `BioProcess International Conference Exhibition`,
    content: `Boston, MA`,
  },
  {
    id: "3",
    time: "16th-20th May ,2023",
    title: `ASGCT 26th Annual Meeting`,
    content: `Los Angeles, CA`,
  },
  {
    id: "4",
    time: "15th-16th Apr. ,2022",
    title: `SAPA-GP 2022 Annual Conference (Hybrid)`,
    content: `King of Prussia, PA`,
  },
  {
    id: "5",
    time: "16th-19th May ,2022",
    title: `ASGCT 25th Annual Meeting`,
    content: `Washington, D.C.`,
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
