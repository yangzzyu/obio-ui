<template>
<div class="float-btn">
  <a href="/insight/inquiry" style="color:#12d7d5;" >
    <font-awesome-icon :icon="['fas', 'fa-comment-dots']" style="font-size: 50px; z-index: 999999;"/>
    <div style="font-size:20px; font-weight:bold;">REQUEST NOW</div>
  </a>    
</div>
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
      <div class="link-list">
        <div class="link-list-i">
          <div class="foot-log">
            <img
              :src="handleViteImages('footer_logo.png')"
              alt="OBiO Tech, Inc."
            />
          </div>

          <dl class="dl-foot-nav">

            <dd class="link-list-i">
              <dl class="dl-foot-nav">
                <dt class="font-size20 first-tit">
                  <router-link to="/contact">CONTACT</router-link>
                </dt>
              </dl>
            </dd>

            <dt class="font-size14">
              Phone: 408-422-9864
              <br />
              Email: obio.us@obiosh.com
              <br />
              Address: 132 Charles Street, Suite 202, Auburndale, MA 02466
            </dt>
            
          </dl>
        </div>
        <div class="link-list-i">
          <dl class="dl-foot-nav">
            <dt class="font-size20 first-tit">
              <router-link to="/about">About Us</router-link>
            </dt>
            <dd class="font-size14">
              <router-link to="/about/history">History</router-link>
            </dd>
            <dd class="font-size14">
              <router-link to="/about/facilities">Facilities</router-link>
            </dd>
            <dd class="font-size14">
              <router-link to="/about/who">Who We Are</router-link>
            </dd>
            <dd class="font-size14">
              <router-link to="/about/commitment">Our Commitment</router-link>
            </dd>
            <dd class="font-size14">
              <router-link to="/about/life">Life at OBiO</router-link>
            </dd>
            <!-- <dd class="font-size14">
              <router-link to="/about/mission">Mission</router-link>
            </dd> -->
            <!-- <dt class="font-size14">
              <router-link to="/team">Leadship Team</router-link>
            </dt> -->
            <dd></dd>
          </dl>
        </div>
        <div class="link-list-i">
          <dl class="dl-foot-nav">
            <dt class="font-size20 first-tit">
              <router-link to="/capability"
                >Capability</router-link
              >
            </dt>
            <dd class="font-size14">
              <router-link to="/capability/whyus">
                Why Us
              </router-link>
            </dd>
            <dd class="font-size14">
              <router-link to="/capability/industrialized">
                Industrialize Your Products
              </router-link>
            </dd>
            <dd class="font-size14">
              <router-link to="/capability/quality">
                Quality & Regulatory
              </router-link>
            </dd>
            <dd class="font-size14">
              <router-link to="/capability/equipments">
                GMP Devices
              </router-link>
            </dd>
            <!-- <dd class="font-size14">
              <router-link to="/capability/commitment">
                Commitment
              </router-link>
            </dd> -->
          </dl>
        </div>
        <div class="link-list-i">
          <dl class="dl-foot-nav">
            <dt class="font-size20 first-tit">
              <router-link to="/cdmo">CDMO</router-link>
            </dt>
            <dd class="font-size14">
              <router-link to="/cdmo/cdmo">CDMO Service</router-link>
            </dd>
            <dd class="font-size14">
              <router-link to="/cdmo/manufacturing">
                Facilities
              </router-link>
            </dd>
            <dd class="font-size14">
              <router-link to="/cdmo/innovation"> Innovation </router-link>
            </dd>
          </dl>
        </div>
        <div class="link-list-i">
          <dl class="dl-foot-nav">
            <dt class="font-size20 first-tit">
              <router-link to="/cro">CRO</router-link>
            </dt>
            <dd></dd>
          </dl>
        </div>
        <div class="link-list-i">
          <dl class="dl-foot-nav">
            <dt class="font-size20 first-tit">
              <router-link to="/insight">News</router-link>
            </dt>
            <dd class="font-size14">
              <router-link to="/insight/news">News</router-link>
            </dd>
            <dd class="font-size14">
              <router-link to="/insight/events">Events</router-link>
            </dd>
            <dd class="font-size14">
              <router-link to="/insight/inquiry">Inquiry</router-link>
            </dd>
            <dd class="font-size14">
              <a href="https://www.obiosh.com/tzz/gg/" target="_blank"
                >Partnerships</a
              >
            </dd>
          </dl>
        </div>
        <div class="link-list-i">
          <dl class="dl-foot-nav">
            <dt class="font-size20 first-tit">
              <router-link to="/careers"
                >Careers</router-link
              >
            </dt>
            <dd class="font-size14">
              <router-link to="/careers/culture">Our Culture</router-link>
            </dd>

            <dd class="font-size14">
              <router-link to="/careers/life">Life at OBiO</router-link>
            </dd>
            <dd class="font-size14">
              <router-link to="/careers/job">Job Openings</router-link>
            </dd>
            <dt class="font-size14">
              <!-- <router-link href="/cn/home/ys/cid/861">Privacy Policy</router-link> -->
            </dt>
          </dl>
        </div>
      </div>
      <div class="foot-link ub">
        <a href="https://www.linkedin.com/company/41870372" aria-label="Company LinkedIn">
          <font-awesome-icon
            class="footer-icon"
            size="2xl"
            :icon="['fab', 'linkedin']"
        /></a>
        <a href="https://www.youtube.com/@obiotechnology" aria-label="Company YouTube">
          <font-awesome-icon class="footer-icon" size="2xl" :icon="['fab', 'youtube']"
        /></a>
        <a href="https://www.facebook.com/profile.php?id=61555811491695" aria-label="Company Facebook">
          <font-awesome-icon class="footer-icon" size="2xl" :icon="['fab', 'facebook']" />
        </a>
      </div>
    </el-col>
    <div class="icp">
      <!-- © 2023 OBiO Tech, Inc. All Rights Reserved -->
      <!-- 7133 Koll Center Parkway, Suite 200, Pleasanton, CA 94566 -->
      © {{ new Date().getFullYear() }} OBiO Tech, Inc. All Rights Reserved
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { handleViteImages } from "@/utils";
import "wow.js/css/libs/animate.css";
import WOW from "wow.js";
import { useRouter } from "vue-router";

const router = useRouter();
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
logo_url.value = handleViteImages("logoColor.png");
const contact_way = ref<ConcatItem[]>([]);
const focus_icon = ref<FocusItem[]>([]);
function goPage(params) {
  router.push(params);
}

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
.float-btn {
  position: fixed;
  text-align: center;
  z-index: 999999;
  flex-wrap: wrap-reverse;
  flex-direction: row-reverse;
  bottom:50px;
  right: 50px;
}
.footer-icon {
  color: #12d7d5
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
.link-list {
  display: grid;
  grid-template-columns: repeat(8, auto); /* 设置8列 */
  gap: 10px; /* 添加间距（可选）*/
}
.foot-link {
  justify-content: end;
}
</style>
