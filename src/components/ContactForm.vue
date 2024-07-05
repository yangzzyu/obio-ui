<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-07-05 09:09:51
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="in-contact-form">
    <el-col :span="24" :xs="24">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="180px"
        class="form-contact-main fontf4 font-size18" :label-position="'top'" status-icon>
        <!-- @submit.prevent="sendEmail(ruleFormRef)" -->
        <el-row :gutter="20">
          <el-col :span="12" :xs="24">
            <el-form-item label="First Name" required prop="first_name">
              <el-input v-model="ruleForm.first_name" />
            </el-form-item>
          </el-col>
          <el-col :span="12" :xs="24">
            <el-form-item label="Last Name" required prop="last_name">
              <el-input v-model="ruleForm.last_name" /> </el-form-item></el-col></el-row>
        <!-- <el-form-item label="Company" required>
          <el-input v-model="ruleForm.company" />
        </el-form-item> -->
        <el-row :gutter="20">
          <el-col :span="12" :xs="24">
            <el-form-item label="Company" required prop="company">
              <el-input v-model="ruleForm.company" /> </el-form-item></el-col>
          <el-col :span="12" :xs="24">
            <el-form-item label="Title">
              <el-input v-model="ruleForm.title" /> </el-form-item></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :xs="24">
            <el-form-item label="Email" required prop="email">
              <el-input v-model="ruleForm.email" /> </el-form-item></el-col>
          <el-col :span="12" :xs="24">
            <el-form-item label="Phone Number" required prop="phone">
              <el-input v-model="ruleForm.phone" /> </el-form-item></el-col></el-row>
        <el-form-item label="I'm interested in…" required prop="interest">
          <el-select v-model="ruleForm.interest" placeholder="">
            <el-option label="General Inquiry" value="General Inquiry" />
            <el-option label="scientific services" value="scientific services" />
            <el-option label="Process Development" value="Process Development" />
            <el-option label="Analytical/Formulation Development" value="Analytical/Formulation Development" />
            <el-option label="Non-IND (IIT) Service" value="Non-IND (IIT) Service" />
            <el-option label="IND-Enabling CMC (IND-CMC) Service" value="IND-Enabling CMC (IND-CMC) Service" />
            <el-option label="Clinical Manufacturing" value="Clinical Manufacturing" />
            <el-option label="Commercial Manufacturing" value="Commercial Manufacturing" />
            <el-option label="Extended Services (Pre-IND/Post-IND)" value="Extended Services (Pre-IND/Post-IND)" />
            <el-option label="Investor Relations" value="Investor Relations" />
          </el-select>
        </el-form-item>
        <el-form-item label="Questions or Comments" prop="content">
          <el-input v-model="ruleForm.comment" type="textarea" />
        </el-form-item>
        <!-- type="submit" -->
        <!-- :disabled="loading" -->
        <div class="fontf3 font-size14" style="text-align: center;">
          <el-button :loading="loading" round class="btn-a font-size18 fontf7" @click.prevent="sendEmail(ruleFormRef)">
            Submit
          </el-button>
        </div>
        <!-- <el-button :loading="loading" round class="btn-a font-size18 fontf7" @click.prevent="sendEmail(ruleFormRef)">
          Submit
        </el-button> -->
      </el-form>
    </el-col>
  </div>
</template>

<script lang="ts" setup name="CdmoIndex">
import { computed, onBeforeMount, ref, toRefs, watch, reactive } from "vue";
import { releases, events } from "./data/Index";
import emailjs from "@emailjs/browser";
import type { FormInstance, FormRules } from "element-plus";

let loading = ref(false);
type FormItem = {
  [key: string]: string;
};

const ruleForm = reactive<FormItem>({
  comment: "",
});
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
const rules = ref({
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
  interest: [
    {
      required: true,
      message: "Please select I'm interested in…",
      trigger: "change",
    },
  ],
});
const ruleFormRef = ref<FormInstance>();
const sendEmail = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  loading.value = true;
  const data = {
    from_name: "obio-tech.com",
    user: ruleForm.first_name + " " + ruleForm.last_name,
    email: ruleForm.email,
    company: ruleForm.company,
    phone: ruleForm.phone,
    title: ruleForm.title || "",
    interest: ruleForm.interest || "",
    comment: ruleForm.comment,
  };
  await formEl.validate((valid, fields) => {
    if (valid) {
      emailjs
        .send("service_zf02rs5", "template_6mmf2na", data, "h7iu63GvkU7foPBMq")
        .then((response) => {
          loading.value = false;
          alert("Form submitted successfully!");
        })
        .catch((error) => {
          loading.value = false;
          console.error("Error sending email:", error);
          alert(
            "An error occurred while submitting the form. Please email us at obio.us@obiosh.com."
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
.form-contact-main :deep(.el-form-item__label) {
  color: #747475;
  // font-family: "puhuiti-2-45";
  font-size: inherit !important;
}

.btn-a {
  color: #fff;
}
</style>
