<template>
  <div class="in-contact-form">
    <section id="Inquiry" class="productions-list">
      <el-col
        :xs="22"
        :sm="20"
        :md="20"
        :lg="20"
        :xl="22"
        style="margin: auto"
        class="container"
      >
        <h1 class="p-title font-size50 txt-bold fontf8 mb-3">Inquiry</h1>
        <!--
        <el-row :gutter="50" class="cdmo-top">
          <el-col :xs="24" :span="24"> 
            -->
        <h2 class="title-color font-size18 txt-bold fontf7">CDMO Solutions</h2>
        <el-checkbox-group
          v-model="form.cdmo"
          @change="changeCdmo"
          class="check-txt fontf4 font-size18"
          style="
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
          "
        >
          <el-checkbox
            value="GENE AND CELL THERAPY CDMO SOLUTIONS AT OBiO"
            label="GENE AND CELL THERAPY CDMO SOLUTIONS AT OBiO"
          >
            GENE AND CELL THERAPY CDMO SOLUTIONS AT OBiO
          </el-checkbox>
          <el-checkbox
            value="CELL THERAPY CDMO SOLUTIONS"
            label="CELL THERAPY CDMO SOLUTIONS"
          >
            CELL THERAPY CDMO SOLUTIONS
          </el-checkbox>
          <el-checkbox
            value="ADENO-ASSOCIATED VIRUS CDMO SOLUTIONS"
            label="ADENO-ASSOCIATED VIRUS CDMO SOLUTIONS"
          >
            ADENO-ASSOCIATED VIRUS CDMO SOLUTIONS
          </el-checkbox>
          <el-checkbox value="iPSC CDMO SERVICES" label="iPSC CDMO SERVICES">
            iPSC CDMO SERVICES
          </el-checkbox>
          <el-checkbox
            value="PHASE-APPROPRIATE PLASMID CDMO SOLUTIONS"
            label="PHASE-APPROPRIATE PLASMID CDMO SOLUTIONS"
          >
            PHASE-APPROPRIATE PLASMID CDMO SOLUTIONS
          </el-checkbox>
          <el-checkbox
            value="LENTIVIRAL VECTOR CDMO SOLUTIONS"
            label="LENTIVIRAL VECTOR CDMO SOLUTIONS"
          >
            LENTIVIRAL VECTOR CDMO SOLUTIONS
          </el-checkbox>
          <el-checkbox
            value="ONCOLYTIC VIRUS CDMO SOLUTIONS"
            label="ONCOLYTIC VIRUS CDMO SOLUTIONS"
          >
            ONCOLYTIC VIRUS CDMO SOLUTIONS
          </el-checkbox>
          <el-checkbox value="mRNA CDMO SOLUTIONS" label="mRNA CDMO SOLUTIONS">
            mRNA CDMO SOLUTIONS
          </el-checkbox>
          <el-checkbox
            value="EXOSOME CDMO SOLUTIONS"
            label="EXOSOME CDMO SOLUTIONS"
          >
            EXOSOME CDMO SOLUTIONS
          </el-checkbox>

          <el-checkbox
            value="CAR-T CDMO SOLUTIONS"
            label="CAR-T CDMO SOLUTIONS"
          >
            CAR-T CDMO SOLUTIONS
          </el-checkbox>

          <el-checkbox
            value="NK CELL CDMO SOLUTIONS"
            label="NK CELL CDMO SOLUTIONS"
          >
            NK CELL CDMO SOLUTIONS
          </el-checkbox>
        </el-checkbox-group>
        <!-- 
          </el-col>

          <el-col :xs="24" :span="24">
            -->
        <br />
        <h2 class="title-color font-size18 txt-bold fontf7">
          scientific services
        </h2>
        <el-checkbox-group
          v-model="form.laboratory"
          @change="changeLaboratory"
          class="check-txt fontf4 font-size18"
          style="
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
          "
        >
          <el-checkbox value="Plasmid & siRNA" label="Plasmid & siRNA">
            <!-- AAV PACKAGING SERVICES -->
            Plasmid & siRNA
          </el-checkbox>
          <el-checkbox
            value="Adeno-associated Virus"
            label="Adeno-associated Virus"
          >
            <!-- LENTIVIRUS PACKAGING SERVICES -->
            Adeno-associated Virus
          </el-checkbox>
          <el-checkbox value="Adenovirus" label="Adenovirus">
            Adenovirus
          </el-checkbox>
          <el-checkbox value="Lentivirus" label="Lentivirus">
            Lentivirus
          </el-checkbox>
          <el-checkbox
            value="off-the-shelf-AAV products"
            label="off-the-shelf-AAV products"
          >
            off-the-shelf-AAV products
          </el-checkbox>
          <el-checkbox
            value="CRISPR Library Servics"
            label="CRISPR Library Servics"
          >
            CRISPR Library Servics
          </el-checkbox>
          <el-checkbox value="Cell Experimental" label="Cell Experimental">
            Cell Experimental
          </el-checkbox>
          <el-checkbox value="Animal Experimental" label="Animal Experimental">
            Animal Experimental
          </el-checkbox>
          <el-checkbox value="Reagents" label="Reagents">
            Reagents
          </el-checkbox>
        </el-checkbox-group>
        <!--
          </el-col>
        </el-row> -->
        <el-row>
          <el-col :span="24" :xs="24">
            <el-form
              ref="ruleFormRef"
              :model="form"
              label-width="200px"
              class="form-contact-main fontf4 font-size18"
              :label-position="'top'"
              :rules="rules"
              status-icon
            >
              <!-- @submit.prevent="sendEmail" -->
              <el-row :gutter="20">
                <el-col :span="12" :xs="24">
                  <el-form-item label="First Name" required prop="first_name">
                    <el-input v-model="form.first_name" />
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item label="Last Name" required prop="last_name">
                    <el-input v-model="form.last_name" /> </el-form-item
                ></el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12" :xs="24">
                  <el-form-item label="Company" required prop="company">
                    <el-input v-model="form.company" /> </el-form-item
                ></el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item label="Title" required prop="title">
                    <el-input v-model="form.title" /> </el-form-item
                ></el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12" :xs="24">
                  <el-form-item label="Email" required prop="email">
                    <el-input v-model="form.email" /> </el-form-item
                ></el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item label="Phone Number" required prop="phone">
                    <el-input v-model="form.phone" /> </el-form-item></el-col
              ></el-row>
              <el-form-item label="Inquired Items">
                <el-input
                  v-model="form.inquired_item"
                  type="textarea"
                  :rows="5"
                  readonly
                />
              </el-form-item>
              <el-form-item label="Comments">
                <el-input v-model="form.comment" type="textarea" :rows="5" />
              </el-form-item>
              <el-form-item>
                <el-button
                  :loading="loading"
                  round
                  class="btn-a font-size18 fontf7"
                  @click.prevent="sendEmail(ruleFormRef)"
                >
                  Submit
                </el-button>
              </el-form-item>
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
import { handleViteImages } from "@/utils";
import emailjs from "@emailjs/browser";
import type { FormInstance, FormRules } from "element-plus";
import { da } from "element-plus/es/locale";
import { sendMail } from "./api.ts";

let loading = ref(false);
const ruleFormRef = ref<FormInstance>();
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
  comment: "",
  // checked: false,
});
interface RuleForm {
  laboratory: string[];
  cdmo: string[];
  first_name: string;
  last_name: string;
  title: string;
  company: string;
  email: string;
  phone: boolean;
  inquired_item: string;
  comment: string;
  // verify: string;
  // checked: boolean;
}
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
const rules = reactive<FormRules<RuleForm>>({
  first_name: [
    {
      required: true,
      message: "Please input First Name",
      trigger: "blur",
    },
  ],
  last_name: [
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
  // inquired_item: [
  //   {
  //     required: true,
  //     message: "Please input  Inquired Items",
  //     trigger: "blur",
  //   },
  // ],
  // comment: [
  //   {
  //     required: true,
  //     message: "Please input  Comments",
  //     trigger: "blur",
  //   },
  // ],
});
const changeLaboratory = (e) => {
  const arr = [...form.laboratory, ...form.cdmo];
  form.inquired_item = arr.join("\n");
};
const changeCdmo = (e) => {
  const arr = [...form.laboratory, ...form.cdmo];
  form.inquired_item = arr.join("\n");
};

/**
 * 提交表单
 * @param formEl
 */
const sendEmail = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  loading.value = true;
  const data = {
    firstName: form.first_name,
    lastName: form.last_name,
    email: form.email,
    company: form.company,
    title: form.title,
    phone: form.phone,
    inquiredItem: form.inquired_item || "",
    comment: form.comment,
  };
  console.log("data", data);
  await formEl.validate((valid, fields) => {
    if (valid) {
      //
      sendMail(data).then((res) => {
        if (res.code == 0) {
          alert("Inquiry submitted successfully!");
        }else{
          alert("Error sending email");
        }
        loading.value = false;
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

// .el-checkbox__label {
// }
.check-txt :deep(.el-checkbox__label) {
  color: #747475;
  // font-family: "puhuiti-2-45";
  font-size: inherit !important;
  // font-size: 18px;
}

.form-contact-main :deep(.el-form-item__label) {
  color: #747475;
  // font-family: "puhuiti-2-45";
  font-size: inherit !important;
}

.check-txt :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #1f757b;
  border-color: #1f757b;
}

.btn-a {
  color: #fff;
}
</style>
