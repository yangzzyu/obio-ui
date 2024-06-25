<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-01 16:11:44
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="intelli-m">
    
    <div class="Intelli-M-wrap">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <div class="text font-size18" style="margin-top: 30px" s="">
          <iframe
            width="100%"
            height="615"
            src="https://www.youtube.com/embed/R6UtDlJShKo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="IntelliM">
// import { ArrowRight } from "@element-plus/icons-vue";
import { IntelliMItemList } from "./data/IntelliM";
import Process from "@/views/cdmo/Process.vue";
</script>

<style></style>
