<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-17 14:08:07
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-27 17:09:28
 * @FilePath: \obio-ui\src\components\OverLayText.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="overlay">
    <div class="overlay-content">
      <div class="slogan sofiaBold">
        <div class="slogan-title p1 wowx animated fontf8 fadeInDown">
          {{ itemData.title }}
        </div>
        <div class="slogan-subtitle p2 wowx animated fontf4 fadeInDown">
          {{ itemData.content }}
        </div>
      </div>
      <div class="slogan-txt font-size24">{{ itemData.text }}</div>
      <h1 class="btn-content">Mission:</h1>
      <div class="btn title-color">
        <div class="btn-i">Our Solutions</div>
        <div class="btn-i">Our Commitment</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="">
const props = defineProps({
  itemData: {
    type: Object,
    default: () => {},
  },
});
</script>
<style lang="scss" scoped>
.overlay {
  position: absolute;
  width: 80%;
  top: 10%;
  left: 5%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: default;
  padding-right: 20px;

  .slogan {
    font-size: 34px;
    color: #00ffea;
    margin-bottom: 67px;
    font-weight: 800;
    text-align: start;
    line-height: 1em;

    .slogan-subtitle {
      line-height: 1em;
      opacity: 0.8;
      margin-top: 14px;
      position: relative;
    }
  }
  .slogan-txt {
    color: #fff;
  }
}
.btn-content {
  color: #fff;
}
.btn {
  display: flex;
  position: relative;
  width: 260px;
  .btn-i {
    background: #fff;
    border-radius: 30px;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    z-index: 999999;
    &:nth-child(2) {
      margin-left: 30px;
      right: 0;
    }
  }
  .btn-i:hover {
    background: linear-gradient(50deg, #014c97 0, #00818b 66%);
    color: #fff;
  }
}

.slogan .slogan-subtitle:before {
  left: -50px;
}

.slogan .slogan-subtitle:after {
  right: -50px;
}
</style>
