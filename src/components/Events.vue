<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-06-25 14:46:54
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section id="newsout" class="news-container">
    <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
      <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-4">
        News and Events
      </h1>
      <el-row class="image--callout mb-6" :gutter="40">
        <el-col :span="24" :xs="24" class="font-size20 news-list">
          <div class="news-i" v-for="(item, index) in eventsList" :key="index">
            <router-link :to="item.categoryId == '1'
      ? '/news-details/releases/' + item.id
      : '/news-details/events/' + item.id
      ">
              <div class="font-size18 fontf4 textColor">
                {{ item.title }}
              </div>
              <p class="title-color font-size18 fontf3">{{ formatDate(item.pubDate) }}</p>
            </router-link>
          </div>
          <router-link v-if="isShow" to="/insight/news" class="btn-a font-size18 fontf7 bg-pinkbluelfr events-btn">All
            News</router-link>
        </el-col>
      </el-row>
    </el-col>
  </section>
</template>

<script lang="ts" setup name="Events">
import { ref } from "vue";
import { releases, events } from "@/views/insights/data/Index";
import { handleViteImages } from "@/utils";
import { articlesPages } from '@/views/insights/api.ts'
import { formatDate } from '@/utils/index'

const props = defineProps({
  isShow: {
    type: Boolean,
    default: true,
  },
});
const eventsList = ref([]);
// eventsList.value = [...releases.value.slice(0, 2), ...events.value.slice(0, 1)];
function getNews() {
  return new Promise((resolve, reject) => {
    articlesPages('news', {
      page: 1,
      limit: 2,
    }).then(res => {
      resolve(res?.data?.list || [])
    })
  });
}

function getEvents() {
  return new Promise((resolve, reject) => {
    articlesPages('event', {
      page: 1,
      limit: 1,
    }).then(res => {
      resolve(res?.data?.list || [])
    })
  });
}

function getReleasesList() {
  Promise.all([getNews(), getEvents()])
    .then(([news, events]: any) => {
      eventsList.value = [...news, ...events]
    })
    .catch(error => {
    });
}
getReleasesList()
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
