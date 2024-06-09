<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-27 17:03:50
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Insights-wrap">
    <div class="section-1">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <span class="fontf8 font-size50">Events</span>
          <div class="p font-size18"></div>
        </div>
        <div class="in-news-list1">
          <div class="item" v-for="(item, index) in tableData" :key="index">
            <router-link :to="'/news-details/events/' + item.id" class="block">
              <div v-if="item.img">
                <el-row :gutter="100">
                  <el-col :xs="24" :span="12"
                    ><div
                      class="animate-imgxx uof img"
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                      "
                    >
                      <img :src="item.img" alt="Event" style="width:100%;"/>
                    </div>
                  </el-col>
                  <el-col :xs="24" :span="12">
                    <div class="font-size18">{{ item.time }}</div>
                    <div class="title fontf4 font-size24 title-color">
                      {{ item.title }}
                    </div>
                    <div class="font-size18 ut-s2">
                      Time: {{ item.eventTime }}
                    </div>
                    <div class="font-size18 ut-s2">
                      Location: {{ item.location }}
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div v-else>
                <div class="font-size18">{{ item.time }}</div>
                <div class="title fontf4 font-size24 title-color">
                  {{ item.title }}
                </div>
                <div class="font-size18 ut-s2">{{ item.content }}</div>
                <!--
                <div class="font-size18 ut-s2">
                  Time: {{ item.eventTime }}
                </div>
                <div class="font-size18 ut-s2">
                  Location: {{ item.location }}
                </div>
                -->
              </div>
            </router-link>
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
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="Cdmo">
import { ref } from "vue";
import { events } from "./data/Index";
const tableData = ref<any>();

const pageinfo = ref({
  total: 0,
  currPage: 1,
  pageSize: 10,
});

const getProp = () => {
  tableData.value = events.value.slice(
    (pageinfo.value.currPage - 1) * pageinfo.value.pageSize,
    pageinfo.value.currPage * pageinfo.value.pageSize
  );
  pageinfo.value.total = events.value.length;
};

const handleSizeChange = (val: number) => {
  pageinfo.value.pageSize = val;
  getProp();
};
const handleCurrentChange = (val: number) => {
  pageinfo.value.currPage = val;
  getProp();
};
getProp();
</script>
