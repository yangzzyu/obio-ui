<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-09 11:18:50
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cdmo">
    <Focus :focusObj="FocusData" />
    <div class="in-contact-wrap">
      <div style="padding-top: 0">
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
            <span class="fontf8 font-size50">Contact Us</span>
            <div class="p font-size18 fontf4">
              If you have any questions or comments, please fill out the brief
              form below, and one of our friendly representatives will be in
              touch.
            </div>
          </div>
          <ContactForm />
        </el-col>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="CdmoIndex">
import Focus from "@/components/Focus.vue";
import { useRouter } from "vue-router";
import { computed, onBeforeMount, ref, toRefs, watch } from "vue";
import ContactForm from "@/components/ContactForm.vue";
import { handleViteImages } from "@/utils";

const router = useRouter();
const FocusData = ref({
  title: "Contact Us",
  hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
  visibleXsImgUrl: handleViteImages("head_bg.jpg"),
});

</script>

<style></style>
