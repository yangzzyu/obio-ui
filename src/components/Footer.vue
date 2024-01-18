<template>
  <div class="foot-wrap">
    <div class="container">
      <el-col :xs="24" :sm="16" :md="18" :lg="20" :xl="22" class="container">
        <el-row class="row">
          <el-col :sm="6" :xs="24">
            <div class="foot-log">
              <img
                src="https://www.obio-tech.com/public/uploads/20230630/a4e158c16a5cb2bf4e6506a46adf9c57.png"
                alt="OBiO Technology (Shanghai) Corp., Ltd."
              />
            </div>
            <div class="p font-size18 fontf2"></div
          ></el-col>
          <el-col :sm="6" :xs="12"
            ><dl class="dl-foot-nav">
              <dt class="font-size20"><a href="/cn/home/about">About Us</a></dt>
              <dt class="font-size20">
                <a href="/cn/home/sys">Laboratory Services</a>
              </dt>
              <dt class="font-size20"><a href="/cn/home/news">Insights</a></dt>
              <dt class="font-size20"><a href="/cn/home/cx">Innovations</a></dt>
              <dt class="font-size20">
                <a href="https://www.obiosh.com/tzz/gg/" target="_blank"
                  >Investor Relations</a
                >
              </dt>
            </dl></el-col
          >
          <el-col :sm="6" :xs="12">
            <dl class="dl-foot-nav">
              <dt class="font-size20">
                <a href="/cn/home/cdmo">CDMO Solutions</a>
              </dt>
              <dd><a href="/cn/home/cdmo/cid/862">Process Development</a></dd>
              <dd><a href="/cn/home/cdmo/cid/868">cGMP Manufacturing</a></dd>
              <dd>
                <a href="/cn/home/cdmo/cid/875">Quality &amp; Regulatory</a>
              </dd>
              <dd><a href="/cn/home/cdmo/cid/879">Cold Chain Logistics</a></dd>
              <dt class="font-size20">
                <a xhref="/cn/home/ys/cid/861">Privacy Policy</a>
              </dt>
            </dl></el-col
          >
          <el-col :sm="6" :xs="24">
            <div class="foot-link ub ">
              <a
                href="https://www.linkedin.com/company/obiosh"
                target="_blank"
                class="k1"
              ></a>
              <a
                href="https://www.youtube.com/channel/UCFBQ9g386UNn_WluHw_GdOg"
                target="_blank"
                class="k2"
              ></a>
              <a
                href="https://mp.weixin.qq.com/s/SeARdjD_mAN8Uft4hBwQgg"
                target="_blank"
                class="k3"
              ></a></div
          ></el-col>
        </el-row>
      </el-col>
    </div>
    <div class="icp">
      © 2023 OBiO Technology (Shanghai) Corp., Ltd. All Rights Reserved
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { handleViteImages } from "@/utils";

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
  contact_way.value = [
    {
      name: "媒体问询",
      email: "aerowangue@126.com",
    },
    {
      name: "招聘相关",
      email: "aerowangue@126.com",
    },
    {
      name: "商务合作",
      email: "aerowangue@126.com",
    },
    {
      name: "广告相关",
      email: "aerowangue@126.com",
    },
  ];
  focus_icon.value = [
    {
      name: "weibo",
      path: handleViteImages("@/assets/img/focus/weibo.png"),
      qr: handleViteImages("@/assets/img/focus/qr_weibo.png"),
      info: "关注官方微博",
    },
    {
      name: "weixin",
      path: handleViteImages("@/assets/img/focus/weixin.svg"),
      qr: handleViteImages("@/assets/img/focus/qr_weixin.png"),
      info: "关注官方微信公众号",
    },
    {
      name: "bilibili",
      path: handleViteImages("@/assets/img/focus/bilibili.png"),
      qr: handleViteImages("@/assets/img/focus/qr_bilibili.png"),
      info: "关注官方 bilibili 号",
    },
  ];
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

      a {
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
</style>
