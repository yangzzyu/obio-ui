<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-06-24 15:29:15
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <Focus :focusObj="FocusData" /> -->
  <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container  mb-3">
    <div class="public-box">
      <div class="nav-box">
        <nav v-for="(item, index) in publicListData" :key="index">
          <h1 class="font-size30 fontf8 iti item-tit">
            {{ item.title }}
          </h1>
          <ul class="mcd-menu">
            <li v-for="(o, k) in item.children">
              <a href="#" :class="activeId == o.id ? 'active' : ''" @click="getpublicInfo(o.id)">
                <!-- <i class="fa fa-comments-o"></i>  -->
                <span>{{ o.title }}</span>
                <!-- <small>what they say</small> -->
              </a>
              <ul v-if="o.children">
                <li v-for="(i, s) in o.children">
                  <a href="#">{{ i.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div class="conent-box">
        <h1 class="p-title font-size30 txt-bold fontf8 mb-3"> {{ publicInfoItem?.title }} </h1>
        <div v-html="publicInfoItem.content" class="content-b"></div>
      </div>
    </div>
  </el-col>
</template>

<script lang="ts" setup name="ServiceDetail">
import { ref, onMounted, computed, nextTick, watch } from "vue";
import { handleViteImages, goRouter } from "@/utils";
import { publicInfo } from './api.ts'
import { servicesStore } from '@/stores/Services'
import bus from "@/utils/mitt";
import { useRoute } from 'vue-router';

const route = useRoute();

watch(() => route.params.id, (newId, oldId) => {
  getpublicInfo(newId)
});

const setServicesStore = servicesStore()
const publicListData = computed(() => setServicesStore?.publicListData)

const activeId = ref('')
const FocusData = ref({
  title: "News",
  hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
  visibleXsImgUrl: handleViteImages("head_bg.jpg"),
});

const publicInfoItem = ref({})

function getpublicInfo(id) {
  activeId.value = id
  publicInfo({ id: id }).then(res => {
    publicInfoItem.value = res?.data || {}
  })
}
onMounted(() => {
  getpublicInfo(route.params.id)
  bus.on("changePublicList", () => {
    // const firstObj = publicListData.value?.[0].children?.[0]
    // const firstId = firstObj.id
    // getpublicInfo(firstId)
  })
});
</script>

<style lang="scss" scoped>
.public-box {
  width: 100%;
  display: grid;
  grid-template-columns: 275px auto;
  overflow: hidden;


  .nav-box {
    min-width: 0;
    padding: 0 10px;
    border: 1px solid #eee;
  }

  .conent-box {
    min-width: 0;

    .p-title {
      text-align: center;
    }

    .content-b {
      padding: 20px;
    }
  }
}

.item-tit {
  color: #1f757b;
  padding-top: 20px;
}

.mcd-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fff;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;

  /* == */
  width: 250px;
  /* min-height: 800px; */
  /* == */

}

.mcd-menu li {
  position: relative;
  /*float:left;*/
}

.mcd-menu li a {
  display: block;
  text-decoration: none;
  padding: 12px 20px;
  color: #777;
  /*text-align: center;
  border-right: 1px solid #E7E7E7;*/

  /* == */
  text-align: left;
  height: 50px;
  position: relative;
  border-bottom: 1px solid #eee;
  /* == */
}

.mcd-menu li a i {
  /*display: block;
  font-size: 30px;
  margin-bottom: 10px;*/

  /* == */
  float: left;
  font-size: 20px;
  margin: 0 10px 0 0;
  /* == */
}

/* == */
.mcd-menu li a p {
  float: left;
  margin: 0;
}

/* == */

.mcd-menu li a strong {
  display: block;
  text-transform: uppercase;
}

.mcd-menu li a small {
  display: block;
  font-size: 10px;
}

.mcd-menu li a i,
.mcd-menu li a strong,
.mcd-menu li a small {
  position: relative;

  transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -webkit-transition: all 300ms linear;
}

.mcd-menu li:hover>a i {
  opacity: 1;
  -webkit-animation: moveFromTop 300ms ease-in-out;
  -moz-animation: moveFromTop 300ms ease-in-out;
  -ms-animation: moveFromTop 300ms ease-in-out;
  -o-animation: moveFromTop 300ms ease-in-out;
  animation: moveFromTop 300ms ease-in-out;
}

.mcd-menu li:hover>a {
  color: #1f757b;
}

.mcd-menu li a.active {
  position: relative;
  color: #1f757b;
  border: 0;
  /*border-top: 4px solid #1f757b;
  border-bottom: 4px solid #1f757b;
  margin-top: -4px;*/
  box-shadow: 0 0 5px #ddd;
  -moz-box-shadow: 0 0 5px #ddd;
  -webkit-box-shadow: 0 0 5px #ddd;

  /* == */
  border-left: 4px solid #1f757b;
  border-right: 4px solid #1f757b;
  margin: 0 -4px;
  /* == */
}

.mcd-menu li a.active:before {
  content: "";
  position: absolute;
  /*top: 0;
  left: 45%;
  border-top: 5px solid #1f757b;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;*/

  /* == */
  top: 42%;
  left: 0;
  border-left: 5px solid #1f757b;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  /* == */
}

/* == */
.mcd-menu li a.active:after {
  content: "";
  position: absolute;
  top: 42%;
  right: 0;
  border-right: 5px solid #1f757b;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}

/* == */

@-webkit-keyframes moveFromTop {
  from {
    opacity: 0;
    -webkit-transform: translateY(200%);
    -moz-transform: translateY(200%);
    -ms-transform: translateY(200%);
    -o-transform: translateY(200%);
    transform: translateY(200%);
  }

  to {
    opacity: 1;
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    -ms-transform: translateY(0%);
    -o-transform: translateY(0%);
    transform: translateY(0%);
  }
}

.mcd-menu li ul,
.mcd-menu li ul li ul {
  position: absolute;
  height: auto;
  min-width: 200px;
  padding: 0;
  margin: 0;
  background: #fff;
  /*border-top: 4px solid #1f757b;*/
  opacity: 0;
  visibility: hidden;
  transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -webkit-transition: all 300ms linear;
  /*top: 130px;*/
  z-index: 1000;

  /* == */
  left: 280px;
  top: 0px;
  border: 1px solid #eee;
  border-left: 4px solid #1f757b;
  /* == */
}

.mcd-menu li ul:before {
  content: "";
  position: absolute;
  /*top: -8px;
  left: 23%;
  border-bottom: 5px solid #1f757b;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;*/

  /* == */
  top: 25px;
  left: -9px;
  border-right: 5px solid #1f757b;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  /* == */
}

.mcd-menu li:hover>ul,
.mcd-menu li ul li:hover>ul {
  display: block;
  opacity: 1;
  visibility: visible;
  /*top: 100px;*/

  /* == */
  left: 250px;
  /* == */
}

/*.mcd-menu li ul li {
  float: none;
}*/
.mcd-menu li ul li a {
  padding: 10px;
  text-align: left;
  border: 0;
  border-bottom: 1px solid #eee;

  /* == */
  height: auto;
  /* == */
}

.mcd-menu li ul li a i {
  font-size: 16px;
  display: inline-block;
  margin: 0 10px 0 0;
}

.mcd-menu li ul li ul {
  left: 230px;
  top: 0;
  border: 0;
  border: 1px solid #eee;
  border-left: 4px solid #1f757b;
}

.mcd-menu li ul li ul:before {
  content: "";
  position: absolute;
  top: 15px;
  /*left: -14px;*/
  /* == */
  left: -9px;
  /* == */
  border-right: 5px solid #1f757b;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
}

.mcd-menu li ul li:hover>ul {
  top: 0px;
  left: 200px;
}

/*.mcd-menu li.float {
  float: right;
}*/
.mcd-menu li a.search {
  /*padding: 29px 20px 30px 10px;*/
  padding: 10px 10px 15px 10px;
  clear: both;
}

.mcd-menu li a.search i {
  margin: 0;
  display: inline-block;
  font-size: 18px;
}

.mcd-menu li a.search input {
  border: 1px solid #eee;
  padding: 10px;
  background: #fff;
  outline: none;
  color: #777;

  /* == */
  width: 170px;
  float: left;
  /* == */
}

.mcd-menu li a.search button {
  border: 1px solid #1f757b;
  /*padding: 10px;*/
  background: #1f757b;
  outline: none;
  color: #fff;
  margin-left: -4px;

  /* == */
  float: left;
  padding: 10px 10px 11px 10px;
  /* == */
}

.mcd-menu li a.search input:focus {
  border: 1px solid #1f757b;
}

.search-mobile {
  display: none !important;
  background: #1f757b;
  border-left: 1px solid #1f757b;
  border-radius: 0 3px 3px 0;
}

.search-mobile i {
  color: #fff;
  margin: 0 !important;
}

@media only screen and (min-width: 960px) and (max-width: 1199px) {
  .mcd-menu {
    margin-left: 10px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 959px) {
  .mcd-menu {
    width: 200px;
  }

  .mcd-menu li a {
    height: 30px;
  }

  .mcd-menu li a i {
    font-size: 22px;
  }

  .mcd-menu li a strong {
    font-size: 12px;
  }

  .mcd-menu li a small {
    font-size: 10px;
  }

  .mcd-menu li a.search input {
    width: 120px;
    font-size: 12px;
  }

  .mcd-menu li a.search buton {
    padding: 8px 10px 9px 10px;
  }

  .mcd-menu li>ul {
    min-width: 180px;
  }

  .mcd-menu li:hover>ul {
    min-width: 180px;
    left: 200px;
  }

  .mcd-menu li ul li>ul,
  .mcd-menu li ul li ul li>ul {
    min-width: 150px;
  }

  .mcd-menu li ul li:hover>ul {
    left: 180px;
    min-width: 150px;
  }

  .mcd-menu li ul li ul li:hover>ul {
    left: 150px;
    min-width: 150px;
  }

  .mcd-menu li ul a {
    font-size: 12px;
  }

  .mcd-menu li ul a i {
    font-size: 14px;
  }
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  .mcd-menu {
    width: 50px;
  }

  .mcd-menu li a {
    position: relative;
    padding: 12px 16px;
    height: 20px;
  }

  .mcd-menu li a small {
    display: none;
  }

  .mcd-menu li a strong {
    display: none;
  }

  .mcd-menu li a:hover strong,
  .mcd-menu li a.active strong {
    display: block;
    font-size: 10px;
    padding: 3px 0;
    position: absolute;
    bottom: 0px;
    left: 0;
    /* background: #1f757b; */
    color: #fff;
    min-width: 100%;
    text-transform: lowercase;
    font-weight: normal;
    text-align: center;
  }

  .mcd-menu li .search {
    display: none;
  }

  .mcd-menu li>ul {
    min-width: 180px;
    left: 70px;
  }

  .mcd-menu li:hover>ul {
    min-width: 180px;
    left: 50px;
  }

  .mcd-menu li ul li>ul,
  .mcd-menu li ul li ul li>ul {
    min-width: 150px;
  }

  .mcd-menu li ul li:hover>ul {
    left: 180px;
    min-width: 150px;
  }

  .mcd-menu li ul li ul li>ul {
    left: 35px;
    top: 45px;
    border: 0;
    border: 1px solid #eee;
    border-top: 4px solid #1f757b;
  }

  .mcd-menu li ul li ul li>ul:before {
    left: 30px;
    top: -9px;
    border: 0;
    border-bottom: 5px solid #1f757b;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  .mcd-menu li ul li ul li:hover>ul {
    left: 30px;
    min-width: 150px;
    top: 35px;
  }

  .mcd-menu li ul a {
    font-size: 12px;
  }

  .mcd-menu li ul a i {
    font-size: 14px;
  }
}

@media only screen and (max-width: 479px) {
  .mcd-menu {
    width: 50px;
  }

  .mcd-menu li a {
    position: relative;
    padding: 12px 16px;
    height: 20px;
  }

  .mcd-menu li a small {
    display: none;
  }

  .mcd-menu li a strong {
    display: none;
  }

  .mcd-menu li a:hover strong,
  .mcd-menu li a.active strong {
    display: block;
    font-size: 10px;
    padding: 3px 0;
    position: absolute;
    bottom: 0px;
    left: 0;
    background: #1f757b;
    color: #fff;
    min-width: 100%;
    text-transform: lowercase;
    font-weight: normal;
    text-align: center;
  }

  .mcd-menu li .search {
    display: none;
  }

  .mcd-menu li>ul {
    min-width: 180px;
    left: 70px;
  }

  .mcd-menu li:hover>ul {
    min-width: 180px;
    left: 50px;
  }

  .mcd-menu li ul li>ul,
  .mcd-menu li ul li ul li>ul {
    min-width: 150px;
  }

  .mcd-menu li ul li:hover>ul {
    left: 180px;
    min-width: 150px;
  }

  .mcd-menu li ul li ul li>ul {
    left: 35px;
    top: 45px;
    border: 0;
    border: 1px solid #eee;
    border-top: 4px solid #1f757b;
  }

  .mcd-menu li ul li ul li>ul:before {
    left: 30px;
    top: -9px;
    border: 0;
    border-bottom: 5px solid #1f757b;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  .mcd-menu li ul li ul li:hover>ul {
    left: 30px;
    min-width: 150px;
    top: 35px;
  }

  .mcd-menu li ul a {
    font-size: 12px;
  }

  .mcd-menu li ul a i {
    font-size: 14px;
  }
}
</style>
