<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-27 14:04:43
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="events">
    <div class="pub-events-wrap">
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
        <el-row class="list row" :gutter="20">
          <el-col
            :xs="24"
            :sm="8"
            :md="8"
            :lg="8"
            :xl="8"
            v-for="(item, index) in eventsList"
            :key="index"
          >
            <router-link
              :to="'/news-details/events/' + item.id"
              class="block tans font-size16"
            >
              <div class="time">{{ item.time }}</div>
              <div class="title ut-s2 font-size24 fontf3">
                {{ item.title }}
              </div>
              <div class="add">{{ item.content }}</div>
            </router-link>
          </el-col>
        </el-row>
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="Events">
import { ref } from "vue";
import { events } from "@/views/insights/data/Index";

const eventsList = ref([]);
eventsList.value = events.value.slice(0, 3);
</script>
