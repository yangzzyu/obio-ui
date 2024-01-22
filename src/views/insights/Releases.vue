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
          <span class="fontf8 font-size50"> Press Releases</span>
          <div class="p font-size18"></div>
        </div>
        <div class="in-news-list1">
          <div class="item">
            <a href="/cn/home/news/id/241" class="block">
              <div class="font-size16">January 13th 2024</div>
              <div class="title fontf4 font-size24">
                Focusing on efficient gene delivery of NK cells, The First
                Condor Life and OBiO Technology reach a strategic cooperation!
              </div>
              <div class="font-size18 ut-s2">
                The First Condor Life and OBiO Technology have reached a
                strategic cooperation. In this collaboration, The First Condor
                Life and OBiO Technology will share resources, complement each
                other's advantages, jointly address market changes and
                competitive pressures, and achieve win-win cooperation and
                sustainable development. On December 27th, Shenzhen First Condor
                Life Science Co. Ltd. (hereinafter referred to as " First Condor
                Life") in Shenzhen and OBiO Biotechnology (Shanghai) Co., Ltd.
                (stock code: 688238) (hereinafter referred to as " OBiO
                Biotech") signed a strategic cooperation agreement in Lingang,
                Shanghai. First Condor Life's co-founder and CTO, Maria Ma,
                Quality Director Liu Dong, Early R&amp;D Director Wang
                Zhongsheng, CAR-NK Platform Head Huang Jing, OBiO Biotech CEO
                Jia Guodong, Deputy General Manager Yin Shan, and Marketing
                Director Wang Yao attended the signing ceremony."
              </div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
          <div class="item">
            <a href="/cn/home/news/id/240" class="block">
              <div class="font-size16">24th Oct. 2023</div>
              <div class="title fontf4 font-size24">
                OBiO Announces Strategic Partnership with Refreshgene to Realize
                Commercialization of Gene Therapy Product
              </div>
              <div class="font-size18 ut-s2">
                OBiO Technology (Shanghai) Corp., Ltd. (Stock code: SH688238), a
                world leading contract development and manufacturing
                organization for cell and gene therapy, officially announced an
                agreement with Refreshgene Therapeutics (Refreshgene).
              </div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
          <div class="item">
            <a href="/cn/home/news/id/222" class="block">
              <div class="font-size16">31st Aug. ,2023</div>
              <div class="title fontf4 font-size24">
                OBiO Announces Strategic Partnership with Tofflon to Advance
                Cell and Gene Therapy Development
              </div>
              <div class="font-size18 ut-s2">
                OBiO Technology (Shanghai) Corp., Ltd. (Stock code: SH688238)
                today announced that it entered into a strategic cooperation
                agreement with today announced that it entered into a strategic
                cooperation agreement with Shanghai Tofflon Science and
                Technology Co.Ltd.(Stock code:SZ300171).
              </div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
          <div class="item">
            <a href="/cn/home/news/id/219" class="block">
              <div class="font-size16">29th Jun. ,2023</div>
              <div class="title fontf4 font-size24">
                FDA Acceptance of Drug Master File Marks New Milestone Achieved
                for OBiO TECH of GMP Plasmid Products
              </div>
              <div class="font-size18 ut-s2">
                OBiO Technology (Shanghai) Corp., Ltd (Stock code: SH688238) is
                a biotechnology company focusing on the cell and gene therapy
                field. Recently announced that the U.S. Food and Drug
                Administration (FDA) has successfully obtained the GMP plasmid
                DNA Drug Master File (DMF) filing.
              </div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
          <div class="item">
            <a href="/cn/home/news/id/217" class="block">
              <div class="font-size16">29th Apr. ,2023</div>
              <div class="title fontf4 font-size24">
                OBiO and CHINAGENE reached a strategic agreement of commercial
                manufacturing services for gene therapy products
              </div>
              <div class="font-size18 ut-s2">
                On April 21, 2023, OBiO Technology (Shanghai) Corp., Ltd.
                announced a strategic agreement of commercial manufacturing
                collaboration with CHINAGENE.
              </div>
              <div class="more"><span class="sa"></span></div>
            </a>
          </div>
        </div>
        <!-- <div class="in-news-all-btn font-size20 fontf3"><a href="">ALL PRESS RELEASES</a></div> -->
        <el-pagination
          class="page ub-ac"
          background
          layout="prev, pager, next"
          :total="1000"
        />
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
