<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-17 09:07:47
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-20 14:14:25
 * @FilePath: \obio-ui\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- <script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->

<template>
  <div class="index">
    <div class="banner-wrap">
      <Banner :banner-height="BannerHeight"></Banner>
      <!-- <div class="home-about-wrap"> -->
      <div class="in-about-wrap">
        <div class="section-3">
          <el-col
            :xs="22"
            :sm="20"
            :md="20"
            :lg="20"
            :xl="22"
            style="margin: auto"
            class="container"
          >
            <h1 class="title-color font-size70 txt-bold section-title fontf8">
              Our Solutions
            </h1>
            <h2 class="title-color our-txt font-size50 section-title fontf7">
              Manufacturing
            </h2>
            <div class="fac-con">
              <el-row class="row" :gutter="10">
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="">
                  <div class="manufacturing-list bg-pinkbluelfr">
                    <div class="content">
                      <img
                        src="https://www.obio-tech.com/public/uploads/20231212/8d7b5d1b0b734f04527dde989e2483c3.jpg"
                        alt="OBIO Intelli-M"
                      />
                    </div>
                  </div>
                  <div class="font-size24 fontf7 iti">
                    Lin-Gang Free-Trade Zone<br />Shanghai, China
                  </div>
                  <div class="font-size38 fontf7 iti">OBIO Intelli-M</div>
                  <p class="font-size18 textColor txt-bold">
                    Process Development Characterization Clinical and Commercial
                    Manufacturing
                    <text class="title-color txt-bold">77,000</text
                    >-square-meter Facility for Global Supply
                  </p>
                  <router-link
                    to="/intelliM"
                    class="read-more font-size18 fontf7"
                    >Read More</router-link
                  >
                </el-col>
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                  <div class="manufacturing-list bg-pinkbluelfr">
                    <div class="content">
                      <img
                        src="https://www.obio-tech.com/public/uploads/20220330/0b0fe1e2c354c50f919655666ccfd951.jpg"
                        alt="SPIRO Site"
                      />
                    </div>
                  </div>
                  <div class="font-size24 fontf7 iti">
                    International Medical Park<br />Shanghai, China
                  </div>
                  <div class="font-size38 fontf7 iti">SPIRO Site</div>

                  <p class="font-size18 textColor txt-bold">
                    Integrated Laboratory Services Processand Analytical Method
                    DevelopmentResearch and Development Center
                  </p>
                  <router-link
                    to="/spiroSite"
                    class="read-more font-size18 fontf7"
                    >Read More</router-link
                  >
                </el-col>
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                  <div class="manufacturing-list bg-pinkbluelfr">
                    <div class="content">
                      <img
                        src="https://www.obio-tech.com/public/uploads/20231212/55a4fdd1f7a358da8a3de3e938f99114.jpg"
                        alt="PINE Site"
                      />
                    </div>
                  </div>
                  <div class="font-size24 fontf7 iti">
                    International Medical Park<br />Shanghai, China
                  </div>
                  <div class="font-size38 fontf7 iti">PINE Site</div>
                  <p class="font-size18 textColor txt-bold">
                    Process and Analytical Method Development Pre-clinical and
                    Clinical Manufacturing Three-building,<text
                      class="title-color txt-bold"
                      >10,000</text
                    >-square-meter campus
                  </p>
                  <router-link
                    to="/pineSite"
                    class="read-more font-size18 fontf7"
                    >Read More</router-link
                  >
                </el-col>
              </el-row>
            </div></el-col
          >
        </div>
      </div>
      <section id="callout" class="">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">
            CDMO Service
          </h1>
          <el-row class="image--callout">
            <el-col :span="8" :xs="24" class="visible-xs-block">
              <div
                class="image--callout_image"
                style="
                  background-image: url(https://www.genezen.com/wp-content/uploads/2021/07/AdobeStock_76101021.jpg);
                "
              ></div>
            </el-col>
            <el-col
              :span="16"
              :xs="24"
              class="cdmo-txt bg-pinkbluelfr font-size24 fontf3"
              >We provide comprehensive CDMO services encompassing process
              development, analytical methods, IND-enabling CMC (Chemistry,
              Manufacturing, and Controls), as well as clinical and commercial
              manufacturing for viral vector, oncolytic virus, and cell therapy
              products. Our expertise extends to offering holistic solutions
              tailored to support the industrialization and commercialization of
              various products at the Pre-IND stage and beyond.</el-col
            >
            <el-col :span="8" :xs="24" class="hidden-xs">
              <div
                class="image--callout_image"
                style="
                  background-image: url(https://www.genezen.com/wp-content/uploads/2021/07/AdobeStock_76101021.jpg);
                "
              ></div>
            </el-col>
          </el-row>

          <el-row class="news--slider row" :gutter="10">
            <el-col
              :xs="24"
              :span="6"
              class="news--slider-i"
              v-for="(item, index) in cdmoList"
              :key="index"
            >
              <router-link
                to="/spiroSite"
                class="block tans service--box_link bg-pinkbluelfr"
              >
                <div class="service--box align-items-start">
                  <div class="service--box_icon mb-3 min-width-70">
                    <img
                      class="icon--white"
                      :src="item.actImgUrl"
                      alt="GMP Vector Manufacturing icon"
                    />
                    <img
                      class="icon--colour"
                      :src="item.imgUrl"
                      alt="GMP Vector Manufacturing icon"
                    />
                  </div>
                  <h3 class="font-bold p-large mb-3 font-size24 fontf8">
                    {{ item.title }}
                  </h3>
                  <div style="height: 200px" class="cdmo-cont">
                    <ul class="txt-ul">
                      <!-- <h4 v-if="item.headTit">{{ item.headTit }}</h4> -->
                      <li
                        v-for="(i, idx) in item.list"
                        :key="idx"
                        class="fontf2 font-size18"
                      >
                        {{ i }}
                      </li>
                    </ul>
                  </div>
                  <!-- <span class="mt-auto flex-shrink-0 btn--underline blog-btn"
                    >Read More</span
                  > -->
                  <router-link
                    to="/cdmo"
                    class="mt-auto flex-shrink-0 btn--underline blog-btn font-size18 fontf7"
                    >Read More</router-link
                  >
                </div>
              </router-link>
            </el-col>
          </el-row>
        </el-col>
      </section>
      <section id="CROout" class="">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <h1 class="p-title font-size50 txt-bold fontf8 mb-0 mt-5">
            CRO Service
          </h1>
          <div class="wysiwyg--content colour-white mb-3">
            <p class="textColor fontf4 font-size24">
              OBiO provides an integrated portfolio of plasmid construction,
              viral packaging, <br />
              cell biology and animal study services for biomedical researchers
            </p>
          </div>
          <el-row class="cro--service row" :gutter="20">
            <el-col
              :xs="24"
              :span="5"
              class="cro--service-i"
              v-for="(item, index) in croList"
              :key="index"
            >
              <router-link to="/sys" class="block tans">
                <div class="animate-imgxx uof img">
                  <img :src="item.imgUrl" alt="SPIRO Site" />
                </div>
              </router-link>
              <h4 class="font-size24 fontf7 iti">
                {{ item.title }}
              </h4>
              <p class="font-size18 cro-p">
                {{ item.text }}
              </p>
              <router-link to="/sys" class="read-more font-size18 fontf7"
                >Read More</router-link
              >
            </el-col>
          </el-row>
        </el-col>
      </section>
      <section id="Ourout" class="">
        <!-- <div class="pub-title-p ub ub-ver ub-pe">
          <i class="line"></i>
          <div class="p font-size18"></div>
        </div> -->
        <el-col
          :span="24"
          style="margin: auto"
          class="container CDMO-Solutions-wrap CDMO-Solutions-wrap-line"
        >
          <h1 class="p-title font-size50 txt-bold fontf8 mb-0 mt-5">
            Our Commitment
          </h1>
          <div class="section-2">
            <div class="list">
              <el-row class="row">
                <el-col
                  :span="6"
                  class="item"
                  v-for="(i, k) in ViralList"
                  :key="k"
                  :class="activeIndex === i.id ? 'active' : ''"
                  @mouseenter="activeIndex = i.id"
                  ><a href="#" class="boxs block">
                    <div class="img1">
                      <div class="icos">
                        <img :src="i.imgUrl" class="icos-a" :alt="i.title" />
                      </div>
                    </div>
                    <div class="font-size50 t fontf8 p-title txt-bold">
                      {{ i.title }}
                    </div>
                  </a>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </section>

      <section id="Seeout" class="">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-3">
            See Our Capabilities
          </h1>
          <el-row :gutter="20" class="mb-4">
            <!-- https://youtu.be/EqjpDvB0zJY?si=6NRlH_2xp7an93Xr
            https://youtu.be/otK0yzBYHZ0?si=YtjJ-M8Q8EUxg93m
            https://youtu.be/CZaS7IvYMJc?si=8go0JVTGqKO03r5l -->
            <el-col :span="8" :xs="24">
              <!-- <iframe
                width="100%"
                height="615"
                src="https://youtu.be/EqjpDvB0zJY?si=6NRlH_2xp7an93Xr"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe> -->

              <div class="manufacturing-list bg-pinkbluelfr video-list">
                <div class="content">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/EqjpDvB0zJY?si=eOSNuif51qAlIRjt"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p class="video-p font-size20 textColor">
                    Experience Innovation: Explore OBiO Tech's Intelli-M
                    GMP-Compliant Plasmid Production Line Today!
                  </p>
                </div>
              </div></el-col
            >
            <el-col :span="8" :xs="24">
              <div class="manufacturing-list bg-pinkbluelfr video-list">
                <div class="content">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/otK0yzBYHZ0?si=X_V-n6mUrJiF9n23"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>

                  <!-- <iframe
                    width="100%"
                    height="300"
                    src="https://www.youtube.com/embed/R6UtDlJShKo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe> -->
                  <p class="video-p font-size20 textColor">
                    Exciting Milestone: OBiO Lingang Facility Launches
                    Operations in 2023!
                  </p>
                </div>
              </div></el-col
            >
            <el-col :span="8" :xs="24">
              <div class="manufacturing-list bg-pinkbluelfr video-list">
                <div class="content">
                  <!-- height="300" -->
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/CZaS7IvYMJc?si=ROl6eljt6sLjkmb_"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <!-- <iframe
                    width="100%"
                    src="https://youtu.be/EqjpDvB0zJY?si=-Yg1_knqtXA8v-Xb"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe> -->
                  <p class="video-p font-size20 textColor">
                    Elevate Your Production Efficiency Today! OBiO Intelli-M GMP
                    offers Capacities from 20L to 2000L
                  </p>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </section>
      <Events />
      <!-- <section id="newsout" class="news-container">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <h1 class="p-title font-size50 txt-bold fontFamily">
            News and Events
          </h1>
          <el-row class="image--callout" :gutter="40">
            <el-col :span="10" :xs="24" class="left-content">
              <img class="img" src="@/assets/icons/news.png" alt="" />
            </el-col>
            <el-col :span="14" :xs="24" class="font-size20 news-list">
              <div class="news-i">
                <h3 class="title-color font-size24 fontFamily">
                  Jan.13th 2024
                </h3>
                <p class="font-size24 fontFamily textColor">
                  Focusing on efficient gene delivery of NK cells, The First
                  Condor Lifeand OBi0 Technology reach a strategic cooperation!
                </p>
                <div class="btn bg-pinkbluelfr">Read More</div>
              </div>
              <div class="news-i">
                <h3 class="title-color font-size24 fontFamily">
                  Oct. 24th 2023
                </h3>
                <p class="font-size24 fontFamily textColor">
                  0Bi0 Announces Strategic Partnership with Refreshgene to
                  RealizeCommercialization of Gene Therapy Product
                </p>
                <div class="btn bg-pinkbluelfr">Read More</div>
              </div>
              <div class="news-i">
                <h3 class="title-color font-size24 fontFamily">
                  Oct. 10th-12th 2023
                </h3>
                <p class="font-size24 fontFamily textColor">
                  Cell&Gene meeting on the Mesa
                </p>
                <div class="btn bg-pinkbluelfr">Read More</div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </section> -->
      <Career />
      <!-- <section id="careerout" class="career-container">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <h1 class="p-title font-size50 txt-bold fontFamily">
            Career and CultureOur Culture
          </h1>
          <div class="wysiwyg--content colour-white">
            <p class="fontFamily textColor">
              Mission: Enable gene therapy for a better lives Value: Customer
              First, Efficient Execution, Pursuit of Excellence, lnnovation
              Breakthroughs, integrity and Pragmatism
            </p>
          </div>
          <el-row class="news--slider row" :gutter="10">
            <el-col :xs="24" :span="12" class="news--slider-i">
              <router-link
                to="/spiroSite"
                class="block tans service--box_link bg-pinkbluelfr career-a"
              >
                <el-row
                  :gutter="20"
                  class="service--box align-items-start career-i"
                >
                  <el-col :span="8" class="career-i"
                    ><div class="service--box_icon mb-3 min-width-70">
                      <img
                        class="icon--white"
                        src="https://www.genezen.com/wp-content/uploads/2021/08/gmp-vector-white-2.svg"
                        alt="GMP Vector Manufacturing icon"
                      />
                      <img
                        class="icon--colour"
                        src="https://www.genezen.com/wp-content/uploads/2021/08/gmp-vector-colour-1.svg"
                        alt="GMP Vector Manufacturing icon"
                      /></div
                  ></el-col>
                  <el-col :span="16" class="career-i">
                    <h1
                      class="font-bold p-large mb-3 font-size30 txt-bold fontFamily"
                    >
                      Life in OBIO
                    </h1></el-col
                  >
                </el-row>
              </router-link>
            </el-col>
            <el-col :xs="24" :span="12" class="news--slider-i">
              <router-link
                to="/spiroSite"
                class="block tans service--box_link bg-pinkbluelfr career-a"
              >
                <el-row
                  :gutter="20"
                  class="service--box align-items-start career-i"
                >
                  <el-col :span="8" class="career-i"
                    ><div class="service--box_icon mb-3 min-width-70">
                      <img
                        class="icon--white"
                        src="https://www.genezen.com/wp-content/uploads/2021/08/gmp-vector-white-2.svg"
                        alt="GMP Vector Manufacturing icon"
                      />
                      <img
                        class="icon--colour"
                        src="https://www.genezen.com/wp-content/uploads/2021/08/gmp-vector-colour-1.svg"
                        alt="GMP Vector Manufacturing icon"
                      /></div
                  ></el-col>
                  <el-col :span="16" class="career-i">
                    <h1
                      class="font-bold p-large mb-3 font-size30 txt-bold fontFamily"
                    >
                      Job Opening
                    </h1></el-col
                  >
                </el-row>
              </router-link>
            </el-col>
          </el-row>
        </el-col>
      </section> -->

      <!-- <div class="home-contact">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <div class="pub-title ub ub-ver ub-pe">
            <i class="line"></i
            ><span class="fontf8 font-size70">Contact Us</span>
          </div>
          <el-row>
            <el-col :span="12" :xs="24">
              <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                label-width="180px"
                class="form-contact-main"
                :label-position="'top'"
                status-icon
              >
                <el-row :gutter="20">
                  <el-col :span="12" :xs="24">
                    <el-form-item label="First Name" required>
                      <el-input v-model="ruleForm.fname" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" :xs="24">
                    <el-form-item label="Last Name" required>
                      <el-input
                        v-model="ruleForm.lname"
                      /> </el-form-item></el-col
                ></el-row>
                <el-form-item label="Company" required>
                  <el-input v-model="ruleForm.company" />
                </el-form-item>
                <el-row :gutter="20">
                  <el-col :span="12" :xs="24">
                    <el-form-item label="Email" required>
                      <el-input v-model="ruleForm.email" /> </el-form-item
                  ></el-col>
                  <el-col :span="12" :xs="24">
                    <el-form-item label="Phone Number" required>
                      <el-input v-model="ruleForm.dh" /> </el-form-item></el-col
                ></el-row>
                <el-form-item label="I'm interested in…" required>
                  <el-select v-model="ruleForm.xq" placeholder="">
                    <el-option
                      label="General Inquiry"
                      value="General Inquiry"
                    />
                    <el-option
                      label="Laboratory Sciences"
                      value="Laboratory Sciences"
                    />
                    <el-option
                      label="Process Development"
                      value="Process Development"
                    />
                    <el-option
                      label="Analytical/Formulation Development"
                      value="Analytical/Formulation Development"
                    />
                    <el-option
                      label="Non-IND (IIT) Service"
                      value="Non-IND (IIT) Service"
                    />
                    <el-option
                      label="IND-Enabling CMC (IND-CMC) Service"
                      value="IND-Enabling CMC (IND-CMC) Service"
                    />
                    <el-option
                      label="Clinical Manufacturing"
                      value="Clinical Manufacturing"
                    />
                    <el-option
                      label="Commercial Manufacturing"
                      value="Commercial Manufacturing"
                    />
                    <el-option
                      label="Extended Services (Pre-IND/Post-IND)"
                      value="Extended Services (Pre-IND/Post-IND)"
                    />
                    <el-option
                      label="Investor Relations"
                      value="Investor Relations"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="Questions or Comments" prop="content">
                  <el-input v-model="ruleForm.content" type="textarea" />
                </el-form-item>
                <el-form-item label="Security Code" required>
                  <el-col :span="11">
                    <el-input v-model="ruleForm.verify" />
                  </el-col>
                  <el-col :span="11">
                    <div class="put ub-f1" style="margin-left: 12px">
                      <img
                        class="verifyImg"
                        id="captcha"
                        src="@/assets/icons/captcha.png"
                        alt="verifyImg"
                        style="width: 150px; cursor: pointer; height: 38px"
                      />
                    </div>
                  </el-col>
                </el-form-item>
                <el-form-item label="I AGREE" required>
                  <div class="checks_text">
                    <el-checkbox
                      v-model="ruleForm.checked"
                      size="large"
                      class="checks_inpt"
                    />
                    <div class="checks_txt">
                      By submitting this form I agree that OBiO may process my
                      data in the manner described in OBiO’s<a
                        xhref="/cn/home/ys/cid/861"
                        target="_blank"
                        style="color: #25b096"
                        >Privacy Policy</a
                      >
                    </div>
                  </div>
                </el-form-item>
                <el-form-item label="">
                  <div class="lab fontf3 font-size18">
                    We won’t share your information.
                  </div>
                </el-form-item>
                <div class="sub fontf3 font-size14">
                  <input
                    lay-submit=""
                    lay-filter="dataPost"
                    type="button"
                    value="SUBMIT"
                  />
                </div>
              </el-form>
            </el-col>
            <el-col :span="12" :xs="24">
              <div class="right-wrap">
                <div class="ico-r6">
                  <img
                    src="@/assets/icons/ico6.png"
                    class="img-responsive"
                    style="max-width: 100%"
                    alt=""
                  />
                </div>
                <div class="ico-rline"></div>
                <ul class="right-mes">
                  <li>
                    <div class="labr fontf3">Main</div>
                    <div class="ms ico1 fontf3 font-size18">
                      +86 400-151-5198
                    </div>
                  </li>
                  <li>
                    <div class="labr fontf3">Tel</div>
                    <div class="ms icn1 fontf3 font-size18">
                      +1-408-807-5641
                    </div>
                  </li>
                  <li>
                    <div class="labr fontf3">For General Inquiry</div>
                    <div class="ms ico2 fontf3 font-size18">
                      oobio@obiosh.com
                    </div>
                  </li>
                  <li>
                    <div class="labr fontf3">For Business Inquiry</div>
                    <div class="ms ico2 fontf3 font-size18">bd@obiosh.com</div>
                  </li>
                  <li>
                    <div class="labr fontf3">Address</div>
                    <div class="ms icn2 fontf3 font-size18">
                      446 S Hillview Dr Milpitas, CA 95035 U.S.A
                    </div>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts" setup name="Home">
import "wow.js/css/libs/animate.css";
import WOW from "wow.js";
import Banner from "@/components/Banner.vue";
import ObioFooter from "@/components/ObioFooter.vue";
import { homeFacilitiesData, insightsData } from "@/data/HomePage";
import { handleViteImages, goRouter } from "@/utils";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { releases, events } from "@/views/insights/data/Index";
import Events from "@/components/Events.vue";
import Career from "@/components/Career.vue";

type FormItem = {
  [key: string]: string;
};
const router = useRouter();
const BannerHeight = ref(0);

const InsightsType = ref(1);
const InsightsList = ref([]);
function handleInsightsType(params) {
  InsightsType.value = params;
  if (params === 1) {
    InsightsList.value = releases.value.slice(0, 3);
  } else if (params === 2) {
    InsightsList.value = events.value.slice(0, 3);
  }
}
const ruleForm = ref<FormItem>({});
const rules = ref([]);
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
const cdmoList = ref([
  {
    imgUrl: handleViteImages("@/assets/icons/cdmo_service1.png"),
    actImgUrl: handleViteImages("@/assets/icons/cdmo_service_act1.png"),
    title: "Viral Vectors",
    list: [
      "AAV",
      "Adenoviral vector for delivery of genes",
      "Lentiviral vectors",
      "Retroviral vectors",
    ],
  },
  {
    imgUrl: handleViteImages("@/assets/icons/cdmo_service2.png"),
    actImgUrl: handleViteImages("@/assets/icons/cdmo_service_act2.png"),
    title: "Oncolytic Virus",
    list: [
      "Oncolytic adenoviruses",
      "Oncolytic herpes simplex virus",
      "Oncolytic vaccinia viruses",
      "Oncolytic vesicular",
    ],
  },
  {
    imgUrl: handleViteImages("@/assets/icons/cdmo_service3.png"),
    actImgUrl: handleViteImages("@/assets/icons/cdmo_service_act3.png"),
    title: "Cell Therapy Products",
    headTit: "Autologous and homologous immunocyte therapies",
    list: [
      "Autologous and homologous immunocyte therapies",
      "CAR-TTherapy",
      "NK Cell Therapy",
      "TCR-T Therapy",
      "DC Therapy",
      "ГóT Therapy",
      "Treg Therapy",
      "Stem cell therapy",
    ],
  },
  {
    imgUrl: handleViteImages("@/assets/icons/cdmo_service4.png"),
    actImgUrl: handleViteImages("@/assets/icons/cdmo_service_act4.png"),
    title: "Plasmid & Nucleotides",
    list: [
      "Plasmid DNA",
      "Minicircle plasmids",
      "dsDNA",
      "ssDNA",
      "mRNA drug substance",
    ],
  },
]);
const croList = ref([
  {
    imgUrl: handleViteImages("@/assets/icons/croIcon1.png"),
    title: "Plasmid",
    text: `At OBiO, our dedicated
development team is
committed to assisting
you in designing,
constructing, and
manufacturing plasmids
for fuctional genomics
research, as well as 
providingexpertise in
viral packaging.`,
  },
  {
    imgUrl: handleViteImages("@/assets/icons/croIcon2.png"),
    title: "Viral Vector",
    text: `We specialize in offering
comprehensive services
encompassing the
design, construction, and
packaging of various
types of viral vectors.
Additionally, we assist in
executing a diverse 
range of biomolecular
operations tailored to 
your specific gene of
interest, ensuring
thorough support
throughout the process.`,
  },
  {
    imgUrl: handleViteImages("@/assets/icons/croIcon3.png"),
    title: "Experiment Solutions",
    text: `We offer an extensive 
array of contract 
research services 
tailored for functional 
genomics studies.`,
  },
  {
    imgUrl: handleViteImages("@/assets/icons/croIcon4.png"),
    title: "Related Products",
    text: `We offer a 
comprehensive range of
in-stock virus vectors, 
proteins, gRNA libraries, 
and relevant reagents, 
catering to diverse 
research needs across 
various aspects of your 
project.`,
  },
  {
    imgUrl: handleViteImages("@/assets/icons/croIcon5.png"),
    title: "Extracellular Vesicle",
    text: `Our services for extracellular vesicle include isolation, 
identification, and functional 
research at the laboratory stage. For samples from different sources, our scientist team has developed multiple isolation solutions which have been 
successfully applied in samples of cells, body fluids and tissue exosomes such as cerebrospinal fluid, urine, brain tissue and liver.
`,
  },
]);
type ViralItem = {
  id: number;
  imgUrl: string;
  title: string;
  path: string;
};
const ViralList = ref<ViralItem[]>([
  {
    id: 0,
    imgUrl: handleViteImages("@/assets/icons/cdmo_icon1.png"),
    title: "Focus",
    path: "/process",
  },
  {
    id: 1,
    imgUrl: handleViteImages("@/assets/icons/cdmo_icon2.png"),
    title: "Acceleration",
    path: "/cgmp",
  },
  {
    id: 2,
    imgUrl: handleViteImages("@/assets/icons/cdmo_icon3.png"),
    title: "Standardization",
    path: "/quality",
  },
  {
    id: 3,
    imgUrl: handleViteImages("@/assets/icons/cdmo_icon4.png"),
    title: "Team",
    path: "/logistics",
  },
]);

onMounted(() => {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {},
    scrollContainer: null,
    resetAnimation: true,
  });

  wow.init();
  window.addEventListener("resize", setBannerHeight);
  setBannerHeight();
  handleInsightsType(1);
});

onUnmounted(() => {
  window.removeEventListener("resize", setBannerHeight);
});
const activeIndex = ref(-1);
function changeActive(index) {
  activeIndex.value = index;
}
function setBannerHeight() {
  BannerHeight.value = window.innerHeight;
}
</script>
<style lang="scss" scoped>
.banner-wrap {
  overflow: hidden;
  position: relative;
}
.overlay {
  z-index: 666;
}

.wrap-block {
  position: relative;
  padding-top: 54px;
}
.shaw-bg {
  background-repeat: no-repeat;
  background: no-repeat center/cover;
}
.home-facilities-mob .list .item {
  display: flex;
  justify-content: center;
}
// .image--callout_image {
//   // position: absolute;
//   // top: 0;
//   // right: 0;
//   // bottom: 0;
//   // left: 0;
//   height: 100%;
// }
// .p-lg-3 {
//   padding: 1.5rem;
// }
// .p-md-5 {
//   padding: 4.5rem;
// }
// .order-md-1 {
// }
// .bg-pinkbluelfr {
//   background: linear-gradient(50deg, #014c97 0, #00818b 66%);
// }
</style>
