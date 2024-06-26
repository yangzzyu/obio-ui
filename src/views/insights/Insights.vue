<template>
  <div class="Insights-wrap">
    <section id="cro" class="cro-list">
      <div class="cro-list-item row" v-for="(item, index) in releasesList" :key="index">
        <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
          <div v-if="item.subPic">
            <el-row :gutter="100">
              <el-col :xs="24" :span="6" style="padding: 0px">
                <div class="animate-imgxx uof img" style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                  ">
                  <img :src="item.subPic" alt="SPIRO Site" style="width: 100%" />
                </div>
              </el-col>
              <el-col :xs="24" :span="18">
                <p class="font-size18 iti textColor">
                  {{ item.categoryId == "1" ? formatDate(item.pubDate) : item.eventTime }}
                </p>
                <h1 class="title fontf4 font-size18 title-color">
                  {{ item.title }}
                </h1>
                <div v-if="item.summary" class="font-size18 ut-s4">
                  {{ item.summary }}
                </div>
                <div v-if="item.categoryId == '2'">
                  <div class="font-size18 ut-s2" v-if="item.eventTime">
                    <b>Time:</b> {{ item.eventTime }}
                  </div>
                  <div class="font-size18 ut-s2" v-if="item.location">
                    <b>Location:</b> {{ item.location }}
                  </div>
                </div>
                <router-link :to="item.categoryId == '1'
        ? '/news-details/releases/' + item.id
        : '/news-details/events/' + item.id
        " class="read-more font-size18 fontf7">Read More</router-link>
              </el-col>
            </el-row>
          </div>
          <div v-else>
            <p class="font-size18 iti textColor">
              {{ item.categoryId == "1" ? formatDate(item.pubDate) : item.eventTime }}
            </p>
            <h1 class="title fontf4 font-size18 title-color">
              {{ item.title }}
            </h1>
            <div class="font-size18 ut-s2">
              {{ item.summary }}
            </div>
            <div v-if="item.categoryId == '2'">
              <div class="font-size18 ut-s2" v-if="item.eventTime">
                <b>Time:</b> {{ item.eventTime }}
              </div>
              <div class="font-size18 ut-s2" v-if="item.location">
                <b>Location:</b> {{ item.location }}
              </div>
            </div>
            <router-link :to="item.categoryId == '1'
        ? '/news-details/releases/' + item.id
        : '/news-details/events/' + item.id
        " class="read-more font-size18 fontf7">Read More</router-link>
          </div>
        </el-col>
      </div>
      <router-link to="/insight/news" class="btn-a font-size18 fontf7 bg-pinkbluelfr mb-5">
        All Press Releases
      </router-link>
    </section>
    <Events :isShow="true" />
    <section id="productions" class="productions-list">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="22" style="margin: auto" class="container">
        <h1 class="p-title font-size50 txt-bold fontf8 mb-3 mt-5">Inquiry</h1>
        <el-row :gutter="50" class="cdmo-top">
          <el-col :xs="24" :span="12">
            <h2 class="title-color font-size18 txt-bold fontf7">
              Laboratory Sciences
            </h2>

            <el-checkbox-group v-model="form.laboratory" @change="changeLaboratory" class="check-txt fontf4 font-size18"
              style="
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
              ">
              <el-checkbox value="AAV PACKAGING SERVICES" label="AAV PACKAGING SERVICES">
                AAV PACKAGING SERVICES
              </el-checkbox>
              <el-checkbox value="LENTIVIRUS PACKAGING SERVICES" label="LENTIVIRUS PACKAGING SERVICES">
                LENTIVIRUS PACKAGING SERVICES
              </el-checkbox>
              <el-checkbox value="AAV-Lung X AAV-Lung M3" label="AAV-Lung X AAV-Lung M3">
                AAV-Lung X AAV-Lung M3
              </el-checkbox>
              <el-checkbox value="AAVneO + AAVMeta Platform" label="AAVneO + AAVMeta Platform">
                AAVneO + AAVMeta Platform
              </el-checkbox>
              <el-checkbox value="Off-the-Shelf AAV PRODUCTS" label="Off-the-Shelf AAV PRODUCTS">
                Off-the-Shelf AAV PRODUCTS
              </el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col :xs="24" :span="12">
            <h2 class="title-color font-size18 txt-bold fontf7">
              CDMO Solutions
            </h2>
            <el-checkbox-group v-model="form.cdmo" @change="changeCdmo" class="check-txt fontf4 font-size18" style="
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
              ">
              <el-checkbox value="GENE AND CELL THERAPY CDMO SOLUTIONS AT OBiO"
                label="GENE AND CELL THERAPY CDMO SOLUTIONS AT OBiO">
                GENE AND CELL THERAPY CDMO SOLUTIONS AT OBiO
              </el-checkbox>
              <el-checkbox value="CELL THERAPY CDMO SOLUTIONS" label="CELL THERAPY CDMO SOLUTIONS">
                CELL THERAPY CDMO SOLUTIONS
              </el-checkbox>
              <el-checkbox value="ADENO-ASSOCIATED VIRUS CDMO SOLUTIONS" label="ADENO-ASSOCIATED VIRUS CDMO SOLUTIONS">
                ADENO-ASSOCIATED VIRUS CDMO SOLUTIONS
              </el-checkbox>
              <el-checkbox value="iPSC CDMO SERVICES" label="iPSC CDMO SERVICES">
                iPSC CDMO SERVICES
              </el-checkbox>
              <el-checkbox value="PHASE-APPROPRIATE PLASMID CDMO SOLUTIONS"
                label="PHASE-APPROPRIATE PLASMID CDMO SOLUTIONS">
                PHASE-APPROPRIATE PLASMID CDMO SOLUTIONS
              </el-checkbox>
              <el-checkbox value="LENTIVIRAL VECTOR CDMO SOLUTIONS" label="LENTIVIRAL VECTOR CDMO SOLUTIONS">
                LENTIVIRAL VECTOR CDMO SOLUTIONS
              </el-checkbox>
              <el-checkbox value="ONCOLYTIC VIRUS CDMO SOLUTIONS" label="ONCOLYTIC VIRUS CDMO SOLUTIONS">
                ONCOLYTIC VIRUS CDMO SOLUTIONS
              </el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" :xs="24">
            <el-form ref="ruleFormRef" :model="form" label-width="200px" class="form-contact-main font-size18 fontf4"
              :label-position="'top'" :rules="rules" status-icon>
              <el-row :gutter="20">
                <el-col :span="4" :xs="24">
                  <el-form-item label="First Name" required prop="first_name">
                    <el-input v-model="form.first_name" />
                  </el-form-item>
                </el-col>
                <el-col :span="5" :xs="24">
                  <el-form-item label="Last Name" required prop="last_name">
                    <el-input v-model="form.last_name" /> </el-form-item></el-col>
                <el-col :span="5" :xs="24">
                  <el-form-item label="Company" required prop="company">
                    <el-input v-model="form.company" /> </el-form-item></el-col>
                <el-col :span="5" :xs="24">
                  <el-form-item label="Email" required prop="email">
                    <el-input v-model="form.email" /> </el-form-item></el-col>
                <el-col :span="5" :xs="24">
                  <el-form-item label="Phone Number" required prop="phone">
                    <el-input v-model="form.phone" /> </el-form-item></el-col></el-row>
              <el-form-item label="Comments">
                <el-input v-model="form.inquired_item" type="textarea" :rows="10" />
              </el-form-item>
              <!-- <el-form-item label="Security Code" required prop="verify">
                <el-col :span="11">
                  <el-input v-model="form.verify" />
                </el-col>
                <el-col :span="11">
                  <div class="put ub-f1" style="margin-left: 12px">
                    <img class="verifyImg" id="captcha" :src="handleViteImages('captcha.png')" alt="verifyImg"
                      style="width: 150px; cursor: pointer; height: 38px" />
                  </div>
                </el-col>
              </el-form-item>
              <el-form-item label="I AGREE" required>
                <div class="checks_text">
                  <el-checkbox v-model="form.checked" size="large" class="checks_inpt" />
                  <div class="checks_txt">
                    By submitting this form I agree that OBiO may process my
                    data in the manner described in OBiO’s
                    <a xhref="/cn/home/ys/cid/861" target="_blank" style="color: #15705f">Privacy Policy</a>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="">
                <div class="lab fontf3 font-size18">
                  We won’t share your information.
                </div>
              </el-form-item> -->
              <div class="fontf3 font-size14">
                <el-button :loading="loading" round class="btn-a font-size18 fontf7"
                  @click.prevent="sendEmail(ruleFormRef)">
                  Submit
                </el-button>
              </div>
            </el-form>
          </el-col>
        </el-row>
      </el-col>
    </section>
  </div>
</template>

<script lang="ts" setup name="Cdmo">
import { ref, reactive } from "vue";
import { releases, events } from "./data/Index";
import Events from "@/components/Events.vue";
import { handleViteImages } from "@/utils";
import emailjs from "@emailjs/browser";
import type { FormInstance, FormRules } from "element-plus";
import { articlesPages } from "./api.ts";
import { formatDate } from '@/utils/index'

let loading = ref(false);
const form = reactive({
  laboratory: [],
  cdmo: [],
  first_name: "",
  last_name: "",
  company: "",
  title: "",
  email: "",
  phone: "",
  inquired_item: "",
  verify: "",
  checked: false,
});
const changeLaboratory = (e) => {
  const arr = [...form.laboratory, ...form.cdmo];
  form.inquired_item = arr.join("\n");
};
const changeCdmo = (e) => {
  const arr = [...form.laboratory, ...form.cdmo];
  form.inquired_item = arr.join("\n");
};
const releasesList = ref([]);

function getNews() {
  return new Promise((resolve, reject) => {
    articlesPages("news", {
      page: 1,
      limit: 3,
    }).then((res) => {
      resolve(res?.data?.list || []);
    });
  });
}

function getEvents() {
  return new Promise((resolve, reject) => {
    articlesPages("event", {
      page: 1,
      limit: 2,
    }).then((res) => {
      resolve(res?.data?.list || []);
    });
  });
}

function getReleasesList() {
  Promise.all([getNews(), getEvents()])
    .then(([news, events]: any) => {
      releasesList.value = [...news, ...events];
    })
    .catch((error) => { });
}
getReleasesList();
const validatePhone = (rule, value, callback) => {
  if (!value) {
    callback();
  } else {
    let regPone = /^\d{10}$/g;
    if (!regPone.test(value)) {
      callback(new Error("Please input correct phone number address！"));
    }
    callback();
  }
};
interface RuleForm {
  laboratory: string[];
  cdmo: string[];
  comment: string;
  fname: string;
  lname: string;
  company: string;
  email: string;
  phone: boolean;
  verify: string;
  checked: boolean;
}
const rules = reactive<FormRules<RuleForm>>({
  fname: [
    {
      required: true,
      message: "Please input First Name",
      trigger: "blur",
    },
  ],
  lname: [
    {
      required: true,
      message: "Please input Last Name",
      trigger: "blur",
    },
  ],
  company: [
    {
      required: true,
      message: "Please input Company",
      trigger: "blur",
    },
  ],
  email: [
    { required: true, message: "Please input Email", trigger: "blur" },
    {
      type: "email",
      message: "Please input correct email address",
      trigger: ["blur", "change"],
    },
  ],
  phone: [
    {
      required: true,
      message: "Please input Phone Number",
      trigger: "blur",
    },
    { validator: validatePhone, trigger: "blur" },
  ],
  comment: [
    {
      required: true,
      message: "Please input Comments",
      trigger: "blur",
    },
  ],
  verify: [
    {
      required: true,
      message: "Please input Security Code",
      trigger: "blur",
    },
  ],
});
const ruleFormRef = ref<FormInstance>();
/**
 * 提交表单
 * @param formEl
 */
const sendEmail = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  loading.value = true;
  const data = {
    from_name: "obio-tech.com",
    user: form.first_name ? form.first_name + " " + form.last_name : "",
    email: form.email,
    company: form.company,
    phone: form.phone,
    title: form.title || "",
    interest: form.inquired_item || "",
    from_email: "noreply@obio-tech.com",
  };

  await formEl.validate((valid, fields) => {
    if (valid) {
      emailjs
        .send("service_zf02rs5", "template_6mmf2na", data, "h7iu63GvkU7foPBMq")
        .then((response) => {
          loading.value = false;
          alert("Inquiry submitted successfully!");
        })
        .catch((error) => {
          loading.value = false;
          console.error("Error sending email:", error);
          alert(
            "An error occurred while submitting the inquiry. Please email us at obio.us@obiosh.com."
          );
        });
    } else {
      loading.value = false;
      console.log("error submit!", fields);
    }
  });
};
</script>

<style lang="scss" scoped>
.my-slide-visible {
  margin-right: 10px;
}

.Insights-wrap {
  .read-more {
    justify-content: flex-start;
    margin-top: 20px;
  }

  .btn-a {
    width: 255px;
    text-align: center;
    margin: 20px auto;
    display: flex;
    // width: fit-content;
    justify-content: center;
  }
}

.el-checkbox {
  font-size: inherit !important;
}

.check-txt :deep(.el-checkbox__label) {
  color: #747475;
  // font-family: "puhuiti-2-45";
  font-size: inherit !important;
  // font-size: 18px;
}

.check-txt :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #1f757b;
  border-color: #1f757b;
}

.form-contact-main :deep(.el-form-item__label) {
  color: #747475;
  // font-family: "puhuiti-2-45";
  font-size: inherit !important;
}

.btn-a {
  color: #fff;
}
</style>
