<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-06-25 14:46:38
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Insights-wrap">
    <div class="section-1">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <span class="fontf8 font-size50">Press Releases</span>
          <div class="p font-size18"></div>
        </div>
        <div class="in-news-list1">
          <div class="item" v-for="(item, index) in tableData" :key="index">
            <router-link :to="'/news-details/releases/' + item.id" class="block">
              <div v-if="item.subPic">
                <el-row :gutter="100">
                  <el-col :xs="24" :span="6" style="padding: 0px;">
                    <div class="animate-imgxx uof img" style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                      ">
                      <img :src="item.subPic" alt="SPIRO Site" style="width:100%;" />
                    </div>
                  </el-col>
                  <el-col :xs="24" :span="18">
                    <div class="font-size18">{{ formatDate(item.pubDate) }}</div>
                    <div class="title fontf4 font-size18 title-color">
                      {{ item.title }}
                    </div>
                    <div class="font-size18 ut-s4">
                      {{ item.summary }}
                      <!-- <div v-html="item.content"></div> -->
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div v-else>
                <div class="font-size18">{{ formatDate(item.pubDate) }}</div>
                <div class="title fontf4 font-size18 title-color">
                  {{ item.title }}
                </div>
                <div class="font-size18 ut-s2">
                  {{ item.summary }}
                  <!-- <div v-html="item.content"></div> -->
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <!-- <div class="in-news-all-btn font-size20 fontf3"><a href="">ALL PRESS RELEASES</a></div> -->
        <el-pagination class="page ub-ac" v-model:current-page="pageinfo.page" v-model:page-size="pageinfo.limit"
          background layout="prev, pager, next" :total="pageinfo.total" @size-change="handleSizeChange"
          @current-change="handleCurrentChange" />
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="Releases">
import { ref } from "vue";
import { releases } from "./data/Index";
import { articlesPages } from './api.ts'
import { formatDate } from '@/utils/index'
const tableData = ref<any>();

const pageinfo = ref({
  total: 0,
  page: 1,
  limit: 10,
});


const getProp = () => {
  // tableData.value = releases.value.slice(
  //   (pageinfo.value.currPage - 1) * pageinfo.value.pageSize,
  //   pageinfo.value.currPage * pageinfo.value.pageSize
  // );
  // pageinfo.value.total = releases.value.length;
  articlesPages('news', pageinfo.value).then(res => {
    // console.log(res, 'pppppppppp');
    tableData.value = res.data.list || []
    pageinfo.value.total = res.data.total || 0
  })
};

const handleSizeChange = (val: number) => {
  pageinfo.value.limit = val;
  getProp();
};
const handleCurrentChange = (val: number) => {
  pageinfo.value.page = val;
  getProp();
};
getProp();
</script>
