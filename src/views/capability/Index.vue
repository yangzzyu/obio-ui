<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-04-22 10:55:18
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cap-sciences">
    <Focus :focusObj="FocusData" />
    <section id="cap" class="cap-section hero-style-top">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
        <h1 class="title-color font-size50 txt-bold section-title fontf8 mb-3 mt-5">
          Why Us
        </h1>
        <h2 class="title-color our-txt font-size30 section-title fontf7">
          Core“hard strength”+ “soft strength” for accelerating the development
          process of CGT drugs
        </h2>
        <el-row class="news--slider row us-list" :gutter="10">
          <el-col :xs="24" :span="4" class="news--slider-i us-list-i" v-for="(item, index) in cdmoList" :key="index">
            <a class="block tans service--box_link bg-pinkbluelfr">
              <div class="service--box align-items-start">
                <div class="service--box_icon mb-3 min-width-70">
                  <img class="icon--white" :src="item.actImgUrl" alt="GMP Vector Manufacturing icon" />
                  <img class="icon--colour" :src="item.imgUrl" alt="GMP Vector Manufacturing icon" />
                </div>
                <p class="textColor-hover font-size18">{{ item.text }}</p>
              </div>
            </a>
          </el-col>
        </el-row>
      </el-col>
    </section>
    <section class="in-about-wrap industrialize-box mb-3" id="industrialize-dom">
      <div class="section-3">
        <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
          <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">
            Industrialize Your Products
          </h1>

          <div class="fac-con">
            <el-row class="row" :gutter="10">
              <el-col :xs="24" :span="8" class="news--slider-i us-list-i" v-for="(item, index) in industrializeList"
                :key="index">
                <a class="tans service--box_link bg-pinkbluelfr">
                  <div class="service--box align-items-start">
                    <div class="manufacturing-list mt-3">
                      <div class="content">
                        <img :src="item.imgUrl" alt="" srcset="" />
                      </div>
                    </div>
                    <div class="font-size18 fontf7 iti">
                      {{ item.title }}
                    </div>
                    <ul class="txt-ul">
                      <li class="font-size18 txt-bold textColor" v-for="(i, idx) in item.txtList" :key="idx">
                        {{ i }}
                      </li>
                    </ul>
                    <router-link :to="item.path" class="read-more font-size18 fontf7 mt-3 service--box-a">Read
                      More</router-link>
                  </div>
                </a>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </div>
    </section>
    <section class="in-about-wrap quality-box cro-list mt-2" id="quality-dom">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
        <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">
          Quality & Regulatory: 
        </h1>
         <h2 class="title-color our-txt font-size30 section-title fontf7">
          International Compliant Quality Control System
        </h2>
      </el-col>
      <el-row class="row" :gutter="10">
        <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
          <div class="wysiwyg--content colour-white mb-3">
            <p class="fontf4 textColor">
              De-risk Your Regulatory Pathway
              <li>Competitive compensation and benefits</li>
              <li>
                We provide e-CTD ready CMC related documents writing and review for your submission
              </li>
              <li>Analytical Development</li>
            </p>
          </div>
          <router-link to="/" class="read-more font-size18 fontf7" style="justify-content: flex-start;">Read
            More</router-link>
        </el-col>
      </el-row>
    </section>
    <section class="in-about-wrap equipments-box cro-list mb-2" id="equipments-dom">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
        <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">
          GMP Devices
        </h1>
      </el-col>
      <div class="cro-list-item row" v-for="(item, index) in GMPDevicesList" :key="index">
        <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
          <el-row :gutter="40" class="equipments-box-row">
            <el-col :span="item.imgSpan" :xs="24" :class="index % 2 === 0 ? '' : 'visible-xs-block'" class="text-conent">
              <el-image style="width: 100%" v-for="(i,k) in item.imgUrl" :key="k" :src="i" fit="contain" />
            </el-col>
            <el-col :span="item.textSpan" :xs="24" class="font-size18 fontf3 text-conent">
              <div>
                <p class="font-size30 fontf7 iti item-tit">{{ item.title }}</p>
                <p class="font-size18 fontf3 textColor" v-html="item.text"></p>
              </div>
            </el-col>
            <el-col :span="item.imgSpan" :xs="24" class="hidden-xs text-conent" v-if="index % 2 !== 0">
              <el-image style="width: 100%" v-for="(i,k) in item.imgUrl" :key="k" :src="i" fit="contain" />
              <!-- <el-image style="width: 100%" :src="item.imgUrl" fit="contain" /> -->
            </el-col>
          </el-row>
        </el-col>
      </div>
      <!-- <div class="section-3"> 
        <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
          <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">
            GMP Devices
          </h1>
          <el-row :gutter="40" v-for="(item, index) in GMPDevicesList" :key="index" class="equipments-box-row cro-list-item">
            <el-col :span="4" :xs="24" :class="index % 2 === 0 ? '' : 'visible-xs-block'" class="text-conent">
              <el-image style="width: 100%" :src="item.imgUrl" fit="contain" />
            </el-col>
            <el-col :span="20" :xs="24" class="font-size18 fontf3 text-conent">
              <div>
                <p class="font-size30 fontf7 iti item-tit">{{ item.title }}</p>
                <p class="font-size18 fontf3 textColor" v-html="item.text"></p>
              </div>
            </el-col>
            <el-col :span="4" :xs="24" class="hidden-xs text-conent" v-if="index % 2 !== 0">
              <el-image style="width: 100%" :src="item.imgUrl" fit="contain" />
            </el-col>
          </el-row>
        </el-col>
      </div> -->
    </section>
    <Events />
    <Career />
  </div>
  <el-dialog v-model="dialogVisible" title="" width="60%" :before-close="handleClose">
    <div class="popLaboraBox-main">
      <div class="font-size30 fontf8 title title-color">
        <span>{{ Labora.title }}</span>
      </div>
      <div class="text color666 font-size18">
        <p>
          <span style="line-height: 2"> {{ Labora.txt }}</span>
        </p>
        <p>
          <br />
        </p>
        <p style="text-align: center">
          <img :src="Labora.imgUrl" :alt="Labora.title" />
        </p>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup name="LabSciences">
import { ref, reactive } from "vue";
import Focus from "@/components/Focus.vue";
import Events from "@/components/Events.vue";
import Career from "@/components/Career.vue";
import { handleViteImages, goRouter } from "@/utils";

const FocusData = ref({
  title: "Capability & Commitment",
  hiddenXsImgUrl: handleViteImages("head_bg.jpg"),
  visibleXsImgUrl: handleViteImages("head_bg.jpg"),
});
const dialogVisible = ref(false);
function handleClose() {
  Labora.value = {};
  dialogVisible.value = false;
}
const cdmoList = ref([
  {
    imgUrl: handleViteImages("cap1.png"),
    actImgUrl: handleViteImages("cap_act1.png"),
    text: `Experienced experts with
over 10 years in GCT,
ensuring timely
support across the
product lifecycle.
`,
  },
  {
    imgUrl: handleViteImages("cap2.png"),
    actImgUrl: handleViteImages("cap_act2.png"),
    text: `Efficient technology
transfer with optimized
process validation
`,
  },
  {
    imgUrl: handleViteImages("cap3.png"),
    actImgUrl: handleViteImages("cap_act3.png"),
    text: `State-of-the-art facilities
with cGMP compliant
quality systems
`,
  },
  {
    imgUrl: handleViteImages("cap4.png"),
    actImgUrl: handleViteImages("cap_act4.png"),
    text: `130+ process
development projects,
230+ analytical
methods developed.
`,
  },
  {
    imgUrl: handleViteImages("cap5.png"),
    actImgUrl: handleViteImages("cap_act5.png"),
    text: `High standard and
comprehensive quality
controls.
`,
  },
  {
    imgUrl: handleViteImages("cap6.png"),
    actImgUrl: handleViteImages("cap_act6.png"),
    text: `End-to-End regulatory
support with guided
navigation
`,
  },
]);
const industrializeList = reactive([
  {
    imgUrl: handleViteImages("facilities1.jpg"),
    title: `Development: Efficient and Customized Process Development with
                  BoardProduct Spectrum`,
    path: "/cdmo/process_development",
    txtList: [
      "Upstream Process",
      "Downstream Process",
      "Analytical Developmen",
      "Process Validation",
    ],
  },
  {
    imgUrl: handleViteImages("facilities2.jpg"),
    title: `cGMP Manufacturing: Flexible Large-Scale GMP Manufacturing
                  Platform:`,
    path: "/cdmo/cgmp",
    txtList: [
      "End-to-End Offerin",
      "Pre-IND services",
      "Post-IND service",
      "Capacity for Global",
    ],
  },
  {
    imgUrl: handleViteImages("pine_site.jpg"),
    title: `Cold Chain Logistic: 
Traceable 
Cold-Chain Logistics with 
Controllable Risk`,
    path: "/cdmo/cold_chain",
    txtList: [
      ` Preserve gene and cell 
therapy products integrity and 
ensure timely delivery within 
specified temperature ranges. `,
    ],
  },
]);
const GMPDevicesList = ref([
  {
    imgUrl:[ handleViteImages("gmp_img1.png")],
    imgSpan: 12,
    textSpan: 12,
    title: "Stainless Steel 100 L Fermentation Tank",
    text: ` High automation, closed end-to-end process culture design.<br /><br />
                The stainless steel fermentation system is extensively employed for the amplification and cultivation of
                microorganisms.Itentails automatic control of pH, dissolved oxygen, stirring, fed-batch, temperature,
                air,
                and oxygen to ensure an ideal growth environment for microorganisms and facilitate the expression of the
                target product. The tank body and tubing are fully enclosed, maintaining an aseptic state throughout the
                culturing process, making it suitable for use in a grade D environment.`,
  },
  {
    imgUrl: [handleViteImages("gmp_img2.png")],
    imgSpan: 12,
    textSpan: 12,
    title: "Triple-tank stainless steel fermentation system",
    text: `Accommodate multiple culture volumes, offer versatility and scalability for various production requirements.`,
  },
  {
    imgUrl: [handleViteImages("gmp_img3.png")],
    imgSpan: 6,
    textSpan: 18,
    title: "Single-use Continuous Flow Centrifuge",
    text: ` Mitigate cross-contamination risks between different batches.<br/><br />
Enhanced recovery of the target product, with a maximum processing capacity of 240 L/h.<br/><br />
Unique closed design and gentle treatment effectively minimize cell lysis, prevent bubbling, and facilitate subsequent product processing.<br/><br />
Allows for flexible inter-product and inter-batch switching, reducing validation time and costs, and shortening inter-batch intervals.<br/><br />
Substantially reduces cell separation costs while ensuring the activity and high yield of biological products.<br/><br />
Mitigates production risks, suitable for use at various scales and across multiple batches.`,
  },
  {
    imgUrl: [handleViteImages("gmp_img4.png")],
    imgSpan: 12,
    textSpan: 12,
    title: "Stainless steel ultrafiltration system",
    text: `ideal for pilot-scale operations and industrial production processes.<br/><br />
Efficient particle, colloid, bacteria, pyrogen, and high-molecular-weight organic substance removal from aqueous solutions.<br/><br />
Easy assembly and operation: Simply connect the tangential-flow ultrafiltration device, pump, pressure gauge, and tubing fittings, then add the sample to the tank to begin operation.<br/><br />
Fast and efficient: Compared to dialysis, this system offers simpler assembly and faster processing speed. Additionally, it achieves higher concentration levels in a shorter period compared to centrifugal concentrating devices or stirring ultrafiltration devices.<br/><br />
Scalability: The construction materials and fluid path of theUFcassette allow laboratory-scale conditions to be applied to production-scale processes.`,
  },
  {
    imgUrl: [handleViteImages("gmp_img5_1.png"),handleViteImages("gmp_img5.png")],
    imgSpan: 12,
    textSpan: 12,
    title: "AKTA Ready ",
    text: `A single-use chromatography system equipped with 2 sets of flow paths, including the Low Flow Kit and High Flow Kit. The single-use system mitigates the risk of  cross-contamination.`,
  },
  {
    imgUrl: [handleViteImages("gmp_img6.png")],
    imgSpan: 12,
    textSpan: 12,
    title: "KR2i",
    text: `A benchtop Tangential Flow Ultrafiltration (TFUF). Combined with adisposable flow path, it can concentrate and diafiltrate vectors in a biosafety cabinet to meet the project requirements in downstream purification`,
  },
  {
    imgUrl: [handleViteImages("gmp_img7.png")],
    imgSpan: 12,
    textSpan: 12,
    title: "Fully sealed cell preparation in a Class C+A environment",
    text: `Cellular products must be produced in an aseptic environment to ensure the sterility assurance level required for safe transfusion back to patients.<br/><br />
The isolator and incubator management system utilize the RTP (Rapid Transfer Port) device for aseptic docking, facilitating rapid and straightforward operation, enabling the seamless exchange of internal resources within a sealed, aseptic environment, meeting the requirements for spatial and temporal isolation in the production of cellular products.
    `,
  },
  {
    imgUrl: [handleViteImages("gmp_img8.png"),handleViteImages("gmp_img8_1.png")],
    imgSpan: 12,
    textSpan: 12,
    title: "Magnetic separation",
    text: ``,
  },
  {
    imgUrl: [handleViteImages("gmp_img9.png")],
    imgSpan: 12,
    textSpan: 12,
    title: "Efficient gas-phase liquid nitrogen tank",
    text: `
    The Biosafe smart intelligent control system integrates liquid level control and container monitoring functions, displaying container safety monitoring information throughout the entire process from warehouse entry to exit.
The 8.8 inch color touch screen features vibrant colors and powerful functions.<br/><br />
The system maintains a low liquid nitrogen evaporation rate of 0.9% per day. It can be sustained for several days even after the liquid nitrogen level drops below the platform.<br/><br />
It has the capacity to accommodate 43,120 vials of 2 mL cryovials and 720 bags of 500 mL cryopreservation bags.<br/><br />
Equipped with a 3-tier authorization control mechanism, the recorded information meets the GMP FDA CRF 21 part 11 certification requirements.. `,
  },
]);
const Labora = ref(<any>{});
</script>

<style lang="scss" scoped>
.cap-section {
  margin-top: -100px;
  position: relative;
}

.us-list {
  .service--box_link {
    height: 330px;
  }
}

.us-list-i:hover {
  .textColor-hover {
    color: #fff;
  }
}

.industrialize-box {
  margin: 0;
}

.industrialize-box {
  .service--box_link {
    height: 680px;
  }

  .service--box_link:hover .service--box {
    background-color: #fff;
    color: #747475;
  }
}

@media (max-width: 765px) {
  .us-list {
    .service--box_link {
      height: 200px !important;
    }
  }

  .industrialize-box {
    .service--box_link {
      height: 600px !important;
    }
  }
}

.equipments-box {
  margin: 0;

  .text-conent {
    display: flex;
    align-items: center;
  }

  .item-tit {
    color: #1f757b;
  }
}

.equipments-box-row {
  margin-bottom: 20px;
}

// text-conent</style>
