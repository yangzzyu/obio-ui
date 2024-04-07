<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-03-27 16:45:27
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="in-contact-form">
    <el-col :span="24" :xs="24">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="180px"
        class="form-contact-main"
        @submit.prevent="sendEmail"
        :label-position="'top'"
        status-icon
      >
        <el-row :gutter="20">
          <el-col :span="12" :xs="24">
            <el-form-item label="First Name" required>
              <el-input v-model="ruleForm.first_name" />
            </el-form-item>
          </el-col>
          <el-col :span="12" :xs="24">
            <el-form-item label="Last Name" required>
              <el-input
                v-model="ruleForm.last_name"
              /> </el-form-item></el-col
        ></el-row>
        <el-form-item label="Company" required>
          <el-input v-model="ruleForm.company" />
        </el-form-item>
        <el-row :gutter="20">
        <el-col :span="12" :xs="24">
          <el-form-item label="Company" required>
            <el-input v-model="ruleForm.company" /> </el-form-item
        ></el-col>
        <el-col :span="12" :xs="24">
          <el-form-item label="Title">
            <el-input v-model="ruleForm.title" /> </el-form-item
        ></el-col>
      </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :xs="24">
            <el-form-item label="Email" required>
              <el-input v-model="ruleForm.email" /> </el-form-item
          ></el-col>
          <el-col :span="12" :xs="24">
            <el-form-item label="Phone Number" required>
              <el-input v-model="ruleForm.phone" /> </el-form-item></el-col
        ></el-row>
        <el-form-item label="I'm interested in…" required>
          <el-select v-model="ruleForm.interest" placeholder="">
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
          <el-input v-model="ruleForm.comment" type="textarea" />
        </el-form-item>
        <button class="btn-a font-size18 fontf7" type="submit">Submit</button>
      </el-form>
    </el-col>
  </div>
</template>

<script lang="ts" setup name="CdmoIndex">
import { computed, onBeforeMount, ref, toRefs, watch, reactive } from "vue";
import { releases, events } from "./data/Index";
import emailjs from '@emailjs/browser';

type FormItem = {
  [key: string]: string;
};

const ruleForm = reactive({
  comment: "",
});
const rules = ref([]);

const sendEmail = () => {
  const data = {
  from_name: "obio-tech.com",
  user: ruleForm.first_name + ' ' + ruleForm.lastname,
  email: ruleForm.email,
  company: ruleForm.company,
  phone: ruleForm.phone,
  title: ruleForm.title || "",
  interest: ruleForm.interest || "",
  comment: ruleForm.comment
}
  emailjs.send('service_ume7cyy', 'template_6mmf2na', data, 'h7iu63GvkU7foPBMq')
    .then(response => {
      alert('Form submitted successfully!');
    })
    .catch(error => {
      console.error('Error sending email:', error);
      alert('An error occurred while submitting the form. Please email us at obio.us@obiosh.com.');
    });
};

</script>

<style></style>
