<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-19 14:03:06
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="intelli-m">
    <div class="focus">
      <div class="hidden-xs">
        <img
          src="https://www.obio-tech.com/public/uploads/20220330/1d7540463fb4aecf7bd741586c761067.jpg"
          alt="Leadership Team"
        />
      </div>
      <div class="visible-xs-block">
        <img
          src="https://www.obio-tech.com/public/uploads/20220401/0d6612cd60e36741f2ad2f3fe90eebf3.jpg"
          alt="Leadership Team"
        />
      </div>
      <div class="txt ub ub-ac">
        <div class="ub-f1">
          <div class="container">
            <div class="fontf7 font-size70 focus-title">Leadership Team</div>
          </div>
        </div>
      </div>
    </div>
    <div class="Intelli-M-wrap">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="location fontf3"
      >
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/about' }"
            >About</el-breadcrumb-item
          >
          <el-breadcrumb-item>Leadership Team</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto">
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
                    src="https://www.obio-tech.com/public/uploads/20230404/5889f4253527d7df510da4dfb7e08b0a.png"
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
                    src="https://www.obio-tech.com/public/uploads/20230404/621fbe58496bc199f9f2ee0b1fbf47f1.png"
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
                    src="https://www.obio-tech.com/public/uploads/20230404/11ce1a49decbe85b8c71f3fe1b53a2d5.png"
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
                    src="https://www.obio-tech.com/public/uploads/20230404/8961a1628f52a77c6fc3f1a47cee01b1.png"
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
                    src="https://www.obio-tech.com/public/uploads/20230404/240601c7e26d6046e525874d7ffcb11e.png"
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
                    src="https://www.obio-tech.com/public/uploads/20230404/a11cd09ced0335bcd3159cf618fd5ac8.png"
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
                    src="https://www.obio-tech.com/public/uploads/20230404/596e46a853741bac5d1162b9e69778b5.png"
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
                    src="https://www.obio-tech.com/public/uploads/20230404/61be0cb87a4e99aea37965b76c5bf834.png"
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
                    src="https://www.obio-tech.com/public/uploads/20230404/4844b36362a5f70b33ab574a343dd223.png"
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
                    src="https://www.obio-tech.com/public/uploads/20230404/c4cc159b0d4cc532dd2cf18dd11444b6.png"
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
import { ArrowRight } from "@element-plus/icons-vue";
import { IntelliMItemList } from "./data/IntelliM";
import ScrollHint from "@/components/ScrollHint.vue";
</script>

<style></style>
