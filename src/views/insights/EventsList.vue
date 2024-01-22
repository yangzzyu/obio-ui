<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 17:29:29
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Insights-wrap">
    <div class="section-1">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
        <div class="pub-title pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <span class="fontf8 font-size50">Events</span>
          <div class="p font-size18"></div>
        </div>
        <div class="in-news-list1">
          <div class="item">
            <a href="/cn/home/news/id/228" class="block">
              <div class="font-size16">10th-12th Oct. ,2023</div>
              <div class="title fontf4 font-size24">
                Cell&amp;Gene meeting on the Mesa
              </div>
              <div class="font-size18 ut-s2">Carlsbad, CA, United States</div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
          <div class="item">
            <a href="/cn/home/news/id/223" class="block">
              <div class="font-size16">18th-21st Sep. ,2023</div>
              <div class="title fontf4 font-size24">
                BioProcess International Conference &amp; Exhibition
              </div>
              <div class="font-size18 ut-s2">Boston, MA</div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
          <div class="item">
            <a href="/cn/home/news/id/218" class="block">
              <div class="font-size16">16th-20th May ,2023</div>
              <div class="title fontf4 font-size24">
                ASGCT 26th Annual Meeting
              </div>
              <div class="font-size18 ut-s2">Los Angeles, CA</div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
          <div class="item">
            <a href="/cn/home/news/id/19" class="block">
              <div class="font-size16">15th-16th Apr. ,2022</div>
              <div class="title fontf4 font-size24">
                SAPA-GP 2022 Annual Conference (Hybrid)
              </div>
              <div class="font-size18 ut-s2">King of Prussia, PA</div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
          <div class="item">
            <a href="/cn/home/news/id/80" class="block">
              <div class="font-size16">16th-19th May ,2022</div>
              <div class="title fontf4 font-size24">
                ASGCT 25th Annual Meeting
              </div>
              <div class="font-size18 ut-s2">Washington, D.C.</div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
        </div>
        <el-pagination
          class="page ub-ac"
          background
          layout="prev, pager, next"
          :total="1000"
        />
        <!-- <div class="in-news-all-btn font-size20 fontf3"><a href="">ALL PRESS RELEASES</a></div> -->
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="Cdmo">
import { ref } from "vue";
import { useTransition } from "@vueuse/core";
import { ArrowRight } from "@element-plus/icons-vue";
const vectorFooterList = ref([
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/3fe6acf22f4fcd938628771fdeabbef9.png",
    txt: "10+ years of dedication to gene and cell therapy",
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/b7b2b3abc455d13f3a93c100cc0ae008.png",
    txt: `Track record of 100 gene and cell therapy projects`,
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/28357454cd094b26b016a3fd15727a39.png",
    txt: `Compliant manufacturing for successful initiation of
                  multi-center clinical trials`,
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/e6bfcf1cb84b0254cea3aefadf2f1e5c.png",
    txt: `Comprehensive quality system with regulatory compliant
                  facilities`,
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220402/b31aa85b97d72ef8e77c7297b11d1867.png",
    txt: `Sufficient capacity and state-of-the-art facilities for global
                  manufacturing needs`,
  },
  {
    bgUrl:
      "https://www.obio-tech.com/public/uploads/20220327/71ad488b3a8b061d5bbbafebc1239290.png",
    txt: `End-to-end professional project management for in-time
                  supports and on-time delivery`,
  },
]);
</script>
