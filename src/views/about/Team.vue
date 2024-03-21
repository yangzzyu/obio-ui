<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-21 16:42:21
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
        <div class="text font-size20">
          <p>
            <span style="line-height: 2"
              >OBiO is led by an experienced team of executives. Our team
              currently consists of more than 500 employees across three
              different sites. The professional and efficient team commits to a
              high standard of execution that corresponds with customers’ needs.
              Their professional background and cumulative expertise provide
              robust support for strong leadership that keeps OBiO at the
              frontier of the gene therapy industry.</span
            >
          </p>
        </div>
        <div class="in-team-list">
          <div class="item">
            <div class="boxs block">
              <div class="img1">
                <div class="img animate-imgx">
                  <img
                    :src="handleViteImages('team/1.png')"
                    class="img-responsive"
                    alt="Oudong Pan"
                  />
                </div>
              </div>
              <div class="mes">
                <div class="name fontf8 font-size24 ut-s1x">Oudong Pan</div>
                <div class="p font-size20 ut-s4x">Founder, Chairman</div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="boxs block">
              <div class="img1">
                <div class="img animate-imgx">
                  <img
                    :src="handleViteImages('team/2.png')"
                    class="img-responsive"
                    alt="Guodong Jia, Ph.D."
                  />
                </div>
              </div>
              <div class="mes">
                <div class="name fontf8 font-size24 ut-s1x">
                  Guodong Jia, Ph.D.
                </div>
                <div class="p font-size20 ut-s4x">General Manager</div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="boxs block">
              <div class="img1">
                <div class="img animate-imgx">
                  <img
                    :src="handleViteImages('team/3.png')"
                    class="img-responsive"
                    alt="Qingmei Xia"
                  />
                </div>
              </div>
              <div class="mes">
                <div class="name fontf8 font-size24 ut-s1x">Qingmei Xia</div>
                <div class="p font-size20 ut-s4x">
                  Vice President, Human Resources and Commercial Management
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="boxs block">
              <div class="img1">
                <div class="img animate-imgx">
                  <img
                    :src="handleViteImages('team/4.png')"
                    class="img-responsive"
                    alt="Luyuan Xu"
                  />
                </div>
              </div>
              <div class="mes">
                <div class="name fontf8 font-size24 ut-s1x">Luyuan Xu</div>
                <div class="p font-size20 ut-s4x">
                  Chief Financial Officer, Board Secretary
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="boxs block">
              <div class="img1">
                <div class="img animate-imgx">
                  <img
                    :src="handleViteImages('team/5.png')"
                    class="img-responsive"
                    alt="Fujie Wang"
                  />
                </div>
              </div>
              <div class="mes">
                <div class="name fontf8 font-size24 ut-s1x">Fujie Wang</div>
                <div class="p font-size20 ut-s4x">
                  Vice President, Supply Chain and Information Technology
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="boxs block">
              <div class="img1">
                <div class="img animate-imgx">
                  <img
                    :src="handleViteImages('team/6.png')"
                    class="img-responsive"
                    alt="Weiran Shen, Ph.D"
                  />
                </div>
              </div>
              <div class="mes">
                <div class="name fontf8 font-size24 ut-s1x">
                  Weiran Shen, Ph.D
                </div>
                <div class="p font-size20 ut-s4x">
                  Vice President, R&amp;D management
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="boxs block">
              <div class="img1">
                <div class="img animate-imgx">
                  <img
                    :src="handleViteImages('team/7.png')"
                    class="img-responsive"
                    alt="Qingrui You, Ph.D."
                  />
                </div>
              </div>
              <div class="mes">
                <div class="name fontf8 font-size24 ut-s1x">
                  Qingrui You, Ph.D.
                </div>
                <div class="p font-size20 ut-s4x">
                  Vice President, Contract Development and Manufacture Business
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="boxs block">
              <div class="img1">
                <div class="img animate-imgx">
                  <img
                    :src="handleViteImages('team/8.png')"
                    class="img-responsive"
                    alt="Qinbin Wu"
                  />
                </div>
              </div>
              <div class="mes">
                <div class="name fontf8 font-size24 ut-s1x">Qinbin Wu</div>
                <div class="p font-size20 ut-s4x">Chief Quality Officer</div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="boxs block">
              <div class="img1">
                <div class="img animate-imgx">
                  <img
                    :src="handleViteImages('team/9.png')"
                    class="img-responsive"
                    alt="Bingqing Wang "
                  />
                </div>
              </div>
              <div class="mes">
                <div class="name fontf8 font-size24 ut-s1x">Bingqing Wang</div>
                <div class="p font-size20 ut-s4x">
                  Vice President, CDMO Operations and EHS management
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="boxs block">
              <div class="img1">
                <div class="img animate-imgx">
                  <img
                    :src="handleViteImages('team/10.png')"
                    class="img-responsive"
                    alt="Shan Yin"
                  />
                </div>
              </div>
              <div class="mes">
                <div class="name fontf8 font-size24 ut-s1x">Shan Yin</div>
                <div class="p font-size20 ut-s4x">
                  Vice President, Business development management of CDMO BU
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script lang="ts" setup name="IntelliM">
import { handleViteImages } from "@/utils";
// import { ArrowRight } from "@element-plus/icons-vue";
import { IntelliMItemList } from "./data/IntelliM";
import ScrollHint from "@/components/ScrollHint.vue";
</script>

<style></style>
