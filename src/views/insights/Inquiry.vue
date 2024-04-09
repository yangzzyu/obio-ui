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
        <el-row :gutter="50" class="cdmo-top">
          <el-col :xs="24" :span="12">
            <h3 class="title-color font-size18 txt-bold fontf7">
              Laboratory Sciences
            </h3>
            <el-checkbox-group
              v-model="form.laboratory"
              @change="changeLaboratory"
              class="check-txt fontf2 font-size18"
              style="
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
              "
            >
              <el-checkbox
                value="AAV PACKAGING SERVICES"
                label="AAV PACKAGING SERVICES"
              >
                AAV PACKAGING SERVICES
              </el-checkbox>
              <el-checkbox
                value="LENTIVIRUS PACKAGING SERVICES"
                label="LENTIVIRUS PACKAGING SERVICES"
              >
                LENTIVIRUS PACKAGING SERVICES
              </el-checkbox>
              <el-checkbox
                value="AAV-Lung X AAV-Lung M3"
                label="AAV-Lung X AAV-Lung M3"
              >
                AAV-Lung X AAV-Lung M3
              </el-checkbox>
              <el-checkbox
                value="AAVneO + AAVMeta Platform"
                label="AAVneO + AAVMeta Platform"
              >
                AAVneO + AAVMeta Platform
              </el-checkbox>
              <el-checkbox
                value="Off-the-Shelf AAV PRODUCTS"
                label="Off-the-Shelf AAV PRODUCTS"
              >
                Off-the-Shelf AAV PRODUCTS
              </el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col :xs="24" :span="12">
            <h3 class="title-color font-size18 txt-bold fontf7">
              CDMO Solutions
            </h3>
            <el-checkbox-group
              v-model="form.cdmo"
              @change="changeCdmo"
              class="check-txt fontf2 font-size18"
              style="
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
              "
            >
              <el-checkbox
                value="GENE AND CELL THERAPY CDMO SOLUTIONS AT OBIO"
                label="GENE AND CELL THERAPY CDMO SOLUTIONS AT OBIO"
              >
                GENE AND CELL THERAPY CDMO SOLUTIONS AT OBIO
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
              <el-checkbox
                value="iPSC CDMO SERVICES"
                label="iPSC CDMO SERVICES"
              >
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
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" :xs="24">
            <el-form
              ref="formRef"
              :model="form"
              label-width="200px"
              class="form-contact-main fontf2"
              :label-position="'top'"
              @submit.prevent="sendEmail"
              status-icon
            >
              <el-row :gutter="20">
                <el-col :span="12" :xs="24">
                  <el-form-item label="First Name" required>
                    <el-input v-model="form.first_name" />
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item label="Last Name" required>
                    <el-input v-model="form.last_name" /> </el-form-item
                ></el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12" :xs="24">
                  <el-form-item label="Company" required>
                    <el-input v-model="form.company" /> </el-form-item
                ></el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item label="Title">
                    <el-input v-model="form.title" /> </el-form-item
                ></el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12" :xs="24">
                  <el-form-item label="Email" required>
                    <el-input v-model="form.email" /> </el-form-item
                ></el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item label="Phone Number" required>
                    <el-input v-model="form.phone" /> </el-form-item></el-col
              ></el-row>
              <el-form-item label="Inquired Items" prop="content">
                <el-input v-model="form.inquired_item" type="textarea" :rows="5" readonly />
              </el-form-item>
              <el-form-item label="Comments" prop="content">
                <el-input v-model="form.comment" type="textarea" :rows="5" />
              </el-form-item>
              <el-form-item>
                <button class="btn-a font-size18 fontf7" type="submit">Submit</button>
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
import emailjs from '@emailjs/browser';

const form = reactive({
  laboratory: [],
  cdmo: [],
  comment: "",
  fname: "",
  lname: "",
  company: "",
  email: "",
  phone: "",
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

const sendEmail = () => {
  const data = {
  from_name: "obio-tech.com",
  user: form.first_name ? form.first_name + ' ' + form.lastname : "",
  email: form.email,
  company: form.company,
  phone: form.phone,
  title: form.title || "",
  interest: form.inquired_item || "",
  comment: form.comment,
  from_email: "noreply@obio-tech.com"
}
  emailjs.send('service_zf02rs5', 'template_6mmf2na', data, 'h7iu63GvkU7foPBMq')
    .then(response => {
      alert('Inquiry submitted successfully!');
    })
    .catch(error => {
      console.error('Error sending email:', error);
      alert('An error occurred while submitting the inquiry. Please email us at obio.us@obiosh.com.');
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
// .el-checkbox__label {
// }
.check-txt :deep(.el-checkbox__label) {
  color: #747475;
  // font-size: 18px;
}
.form-contact-main :deep(.el-form-item__label) {
  color: #747475;
}
.check-txt :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #1f757b;
  border-color: #1f757b;
}
</style>
