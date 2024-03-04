<template>
  <div class="foot-wrap">
    <el-col
      :xs="24"
      :sm="16"
      :md="18"
      :lg="20"
      :xl="22"
      class="container"
      style="margin: 0 auto"
    >
      <el-row class="row" :gutter="50">
        <el-col :span="6" :xs="24" class="wow fadeInLeft animated">
          <div class="foot-log">
            <img
              src="https://www.obio-tech.com/public/uploads/20230630/a4e158c16a5cb2bf4e6506a46adf9c57.png"
              alt="OBiO Technology (Shanghai) Corp., Ltd."
            />
          </div>

          <dl class="dl-foot-nav">
            <dt class="font-size20">Phone:4084228642</dt>
            <dt class="font-size20">General: 0Bi0.US@OBiOSH.COM</dt>
            <dt class="font-size20">Business:BD@OBiOSH.COM</dt>
            <dt class="font-size20">
              Address: 7133 Koll Center Parkway,Suite 200, Pleasanton, CA 94566
            </dt>
            <dt class="font-size20"></dt>
            <dd></dd>
          </dl>
          <div class="p font-size18 fontf2"></div
        ></el-col>
        <el-col :span="2" :xs="12" class="wow fadeInLeft animated"
          ><dl class="dl-foot-nav">
            <dt class="font-size30 first-tit">
              <router-link to="/about">About Us</router-link>
            </dt>
            <dt class="font-size20">
              <router-link to="/sys">History</router-link>
            </dt>
            <dt class="font-size20">
              <router-link to="/news">Facilities</router-link>
            </dt>
            <dt class="font-size20">
              <router-link to="/cx">Leadship Team</router-link>
            </dt>
            <dd></dd></dl
        ></el-col>
        <el-col :span="3" :xs="12" class="wow fadeInRight animated">
          <dl class="dl-foot-nav">
            <dt class="font-size30 first-tit">
              <router-link to="/cdmo">Capability & Commitment</router-link>
            </dt>
            <dd>
              <router-link to="/process">Industrialize</router-link>
            </dd>
            <dd><router-link to="/cgmp">Commitment</router-link></dd>
          </dl></el-col
        >
        <el-col :span="3" :xs="12" class="wow fadeInRight animated">
          Manufacturing CDMO Innovation
          <dl class="dl-foot-nav">
            <dt class="font-size30 first-tit">
              <router-link to="/cdmo">CDMO Solutions</router-link>
            </dt>
            <dd>
              <router-link to="/process">Manufacturing</router-link>
            </dd>
            <dd><router-link to="/cgmp">CDMO</router-link></dd>
            <dd>
              <router-link to="/logistics">Innovation</router-link>
            </dd>
          </dl></el-col
        >
        <el-col :span="3" :xs="12" class="wow fadeInRight animated">
          <dl class="dl-foot-nav">
            <dt class="font-size30 first-tit">
              <router-link to="/cdmo">News & Events</router-link>
            </dt>
            <dd>
              <router-link to="/process">News</router-link>
            </dd>
            <dd>
              <router-link to="/process">Events</router-link>
            </dd>
            <dd>
              <router-link to="/process">Learn More</router-link>
            </dd>
            <dd>
              <router-link to="/process">Partnership</router-link>
            </dd>
          </dl></el-col
        >
        <el-col :span="3" :xs="12" class="wow fadeInRight animated">
          <dl class="dl-foot-nav">
            <dt class="font-size30 first-tit">
              <router-link to="/cdmo">Careers & Culture</router-link>
            </dt>
            <dd>
              <router-link to="/process">Our Culture</router-link>
            </dd>
            <dd><router-link to="/cgmp">Mission</router-link></dd>
            <dd>
              <router-link to="/quality">Life at OBIO</router-link>
            </dd>
            <dd>
              <router-link to="/logistics">Job Opening</router-link>
            </dd>
            <dt class="font-size20">
              <!-- <router-link href="/cn/home/ys/cid/861">Privacy Policy</router-link> -->
            </dt>
          </dl></el-col
        >
        <el-col :span="3" :xs="12" class="wow fadeInRight animated">
          <dl class="dl-foot-nav">
            <dt class="font-size30 first-tit">
              <router-link to="/cdmo">CRO Service</router-link>
            </dt>
          </dl></el-col
        >
        <!-- <el-col :span="3" :xs="12" class="wow fadeInRight animated">
          <dl class="dl-foot-nav">
            <dt class="font-size30 first-tit">
              <router-link to="/cdmo">Contact</router-link>
            </dt>
          </dl></el-col
        > -->
        <!-- <el-col :sm="6" :xs="24" class="wow fadeInRight animated">
          <div class="foot-link ub">
            <a href="https://www.youtube.com/@obiotechnology">
              <font-awesome-icon
                class="footer-icon"
                size="lg"
                :icon="['fab', 'Youtube']"
              />
            </a>
            <a href="https://www.linkedin.com/company/41870372">
              <font-awesome-icon
                class="footer-icon"
                size="lg"
                :icon="['fab', 'linkedin']"
            /></a>
            <a href="https://www.facebook.com/profile.php?id=61555811491695">
              <font-awesome-icon
                class="footer-icon"
                size="lg"
                :icon="['fab', 'Facebook']"
            /></a>
          </div>
          <div class="foot-link ub">
            <router-link
              to="https://www.linkedin.com/company/obiosh"
              target="_blank"
              class="k1"
            ></router-link>
            <router-link
              to="https://www.youtube.com/channel/UCFBQ9g386UNn_WluHw_GdOg"
              target="_blank"
              class="k2"
            ></router-link>
            <router-link
              to="https://mp.weixin.qq.com/s/SeARdjD_mAN8Uft4hBwQgg"
              target="_blank"
              class="k3"
            ></router-link>
          </div>
        </el-col> -->
      </el-row>
    </el-col>
    <div class="icp">
      <!-- © 2023 OBiO Technology (Shanghai) Corp., Ltd. All Rights Reserved -->
      <!-- 7133 Koll Center Parkway, Suite 200, Pleasanton, CA 94566 -->
      © 2024 OBiO Technology (Shanghai) Corp., Ltd. All Rights Reserved
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { handleViteImages } from "@/utils";
import "wow.js/css/libs/animate.css";
import WOW from "wow.js";

type ConcatItem = {
  name: string;
  email: string;
};

type FocusItem = {
  name: string;
  path: NodeRequire;
  qr: NodeRequire;
  info: string;
};

const footerHeight = ref("");
const curWidth = ref("");
const logo_url = ref<any>();
logo_url.value = handleViteImages("@/assets/img/index/logoColor.png");
const contact_way = ref<ConcatItem[]>([]);
const focus_icon = ref<FocusItem[]>([]);

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
});
</script>
<style lang="scss" scoped>
h2 {
  font-size: 100%;
  font-weight: 400;
  font-variant: normal;
}

.footer_container {
  width: 100%;
  background: #1f2329;
  padding-bottom: 60px;
}

.footer_content {
  max-width: 1440px;
  color: #fff;
  margin: 0 auto;
  padding: 69px 0 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  h2 {
    font-size: 14px;
    line-height: 22px;
    margin: 4px 0;
    color: #7b7e81;
  }

  .footer-content-column {
    flex: 1 1;
    color: #d2d3d4;
    position: relative;
    text-align: center;

    h2 {
      margin-bottom: 18px;
      font-size: 16px;
      font-weight: bold;
    }

    .about_list,
    .contact_list {
      text-align: center;
      font-size: 14px;
      line-height: 22px;

      li {
        margin-bottom: 15px;
      }

      router-link {
        color: #d2d3d4;
      }
    }
  }

  .about_us {
    max-width: 202px;
  }

  .contact_us {
    max-width: 202px;
  }

  .focus_us {
    text-align: left;
    padding-left: 10px;

    .media {
      margin-top: 18px;
      display: flex;
      justify-content: space-evenly;
    }

    span {
      margin-right: 18px;
      flex: 0 0 auto;
    }

    h2 {
      text-align: left;
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 4px;
    }
  }

  .footer_logo {
    margin-left: 96px;
    height: 55px;
    text-align: left;
    max-width: 382px;
    min-width: 350px;

    h2 {
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 4px;
    }

    .logo-container {
      display: flex;
      margin-bottom: 9px;

      img {
        height: 50px;
      }

      .logo-text {
        margin-left: 15px;
        position: relative;
        bottom: -6px;
      }

      .text1 {
        font-size: 21px;
        font-weight: bold;
        margin: 0;
      }

      .text2 {
        font-size: 12px;
        margin: 0;
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .footer_content {
    flex-direction: column;

    .footer-content-column {
      text-align: center;
      margin: 0 auto 0;

      h2 {
        text-align: center;
      }

      padding-left: 0;
    }

    .focus_us div:last-of-type > span {
      margin-right: 0;
    }

    .media {
      justify-content: center;
    }

    .logo-container {
      justify-content: center;
      text-align: left;
    }
  }
}

.qr_popover {
  //  width: 130px;
  //height: 130px;
  text-align: center;

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  //margin-left: 30px;
}
.foot-log {
  margin-bottom: 20px;
}
</style>
