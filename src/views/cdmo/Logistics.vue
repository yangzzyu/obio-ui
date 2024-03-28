<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-27 16:45:12
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Cold-Chain-Logistics-wrap" style="padding-top: 0">
    <el-col
      :xs="22"
      :sm="20"
      :md="20"
      :lg="20"
      :xl="22"
      style="margin: auto"
      class="container"
    >
      <div class="text font-size20">
        <p>
          <span style="line-height: 2"
            >The top priority of gene and cell therapy products during
            transportation is to maintain the integrity of the products, as well
            as ensuring them arrive their destination on time and within
            temperature specification.</span
          ><br />
          <br />
          <span style="line-height: 2"
            >As one of the Innovation Demonstration Units certified by the
            customs of Shanghai Technology Innovation Center, we have
            successfully supported our clients with their international
            cold-chain transportation of samples for clinical trials in the
            United States and Australia. We partner with multiple international
            cold-chain transportation vendors to help you with the whole journey
            of cold-chain transportation and temperature monitoring from GMP
            facility to the customs, ensuring compliance with requirements in
            terms of delivery schedule, expiration date and temperature. We also
            assist you to provide documentation required for declaration at
            China Customs, accelerate declaration process, ensuring our gene and
            cell therapy products delivered to the destination you designated as
            soon as possible.&nbsp;</span
          ><br />
          <br />
          <span style="line-height: 2"
            ><strong
              ><u>
                <router-link to="/contact">
                  Any questions about cold-chain transportation, please feel
                  free to contact one of our technical consultants.
                </router-link></u
              ></strong
            ></span
          ><br />
          <span style="line-height: 2"></span>
        </p>
        <p>
          <br />
        </p>
      </div>
    </el-col>
  </div>
</template>

<script lang="ts" setup name="Process">
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.ul-square {
  .ul-square-col {
    position: relative;
    padding-left: 20px;
  }
  .ul-square-col::before {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    background-color: #039d8f;
    position: absolute;
    left: 0;
    top: 10px;
  }
}
</style>
