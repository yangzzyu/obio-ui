<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-01 16:20:59
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section id="newsout" class="news-container">
    <el-col
      :xs="22"
      :sm="20"
      :md="20"
      :lg="20"
      :xl="22"
      style="margin: auto"
      class="container"
    >
      <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-4">
        News and Events
      </h1>
      <el-row class="image--callout mb-6" :gutter="40">
        <el-col :span="10" :xs="24" class="left-content">
          <img class="img" :src="handleViteImages('news.png')" alt="" />
        </el-col>
        <el-col :span="14" :xs="24" class="font-size20 news-list">
          <div class="news-i" v-for="(item, index) in eventsList" :key="index">
            <h3 class="font-size24 fontf4 textColor">
              {{ item.title }}
            </h3>
            <p class="title-color font-size18 fontf3">{{ item.time }}</p>
            <router-link
              :to="
                item.type == 'news'
                  ? '/news-details/releases/' + item.id
                  : '/news-details/events/' + item.id
              "
              class="btn-a font-size18 fontf7 bg-pinkbluelfr events-btn"
              >Read More</router-link
            >
          </div>
          <router-link
            v-if="isShow"
            to="/insight/news"
            class="btn-a font-size18 fontf7 bg-pinkbluelfr events-btn"
            >All News</router-link
          >
        </el-col>
      </el-row>
    </el-col>
  </section>
</template>

<script lang="ts" setup name="Events">
import { ref } from "vue";
import { releases, events } from "@/views/insights/data/Index";
import { handleViteImages } from "@/utils";

const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
});
const eventsList = ref([]);
eventsList.value = [...releases.value.slice(0, 2), ...events.value.slice(0, 1)];
</script>

<style scoped>
.events-btn {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-a {
  margin-top: 20px;
}
</style>
