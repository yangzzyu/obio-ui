<!--
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-18 08:59:26
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-01-27 15:36:03
 * @FilePath: \obio-ui\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cdmo">
    <Focus :focusObj="FocusData" />
    <div class="in-contact-wrap">
      <div class="section-1" style="padding-top: 0">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <div class="pub-title pub-title-p ub ub-ver ub-pe">
            <i class="line"></i>
            <span class="fontf8 font-size50">WE’D LOVE TO HEAR FROM YOU</span>
            <div class="p font-size18">
              If you have any questions or comments, please fill out the brief
              form below, and one of our friendly representatives will be in
              touch.
            </div>
          </div>
          <div class="in-contact-form">
            <el-col :span="24" :xs="24">
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
                    <!-- <el-form-item> -->
                    <el-input v-model="ruleForm.verify" />
                    <!-- </el-form-item> -->
                  </el-col>
                  <el-col :span="11">
                    <div class="put ub-f1" style="margin-left: 12px">
                      <img
                        class="verifyImg"
                        alt="verifyImg"
                        id="captcha"
                        src="@/assets/icons/captcha.png"
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
                    <span
                      >By submitting this form I agree that OBiO may process my
                      data in the manner described in OBiO’s<a
                        xhref="/cn/home/ys/cid/861"
                        target="_blank"
                        style="color: #25b096"
                        >Privacy Policy</a
                      ></span
                    >
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
          </div>
        </el-col>
      </div>
      <div class="section-2" style="background-image: none">
        <el-col
          :xs="22"
          :sm="20"
          :md="20"
          :lg="20"
          :xl="22"
          style="margin: auto"
          class="container"
        >
          <div class="list ub ub-ac ub-pj">
            <div class="item">
              <div class="img">
                <div class="img1 animate-img">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220326/bede76194585b380479a536e89016d15.jpg"
                    alt="SPIRO Site"
                  />
                </div>
              </div>
              <div class="txt color666 text-center">
                <div class="fontf7 font-size24">SPIRO Site</div>
                <div class="font-size18 p">
                  Building No.19, Lane 908, Ziping Rd, <br />
                  Pudong New District,<br />
                  Shanghai, <br />
                  China<br />
                  Main：+86 400-151-5198
                </div>
              </div>
            </div>
            <div class="item">
              <div class="img">
                <div class="img1 animate-img">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220328/bc70243c9e3b452890584752dc766f43.png"
                    alt="OBiO Intelli-M"
                  />
                </div>
              </div>
              <div class="txt color666 text-center">
                <div class="fontf7 font-size24">OBiO Intelli-M</div>
                <div class="font-size18 p">
                  3888 Canghai Rd, Lin-Gang Free-Trade Zone,<br />
                  Pudong New District, <br />
                  Shanghai, <br />
                  China<br />
                  Main: +86 400-151-5198
                </div>
              </div>
            </div>
            <div class="item">
              <div class="img">
                <div class="img1 animate-img">
                  <img
                    src="https://www.obio-tech.com/public/uploads/20220328/33d875548c6c5f84df64d612a629afe4.png"
                    alt="PINE Site"
                  />
                </div>
              </div>
              <div class="txt color666 text-center">
                <div class="fontf7 font-size24">PINE Site</div>
                <div class="font-size18 p">
                  Building No.8, Lane 100, Banxia Rd,<br />
                  Pudong New District,<br />
                  Shanghai, <br />
                  China<br />
                  Main：+86 400-151-5198
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </div>
    </div>
    <Events />
  </div>
</template>

<script lang="ts" setup name="CdmoIndex">
import Events from "@/components/Events.vue";
import Focus from "@/components/Focus.vue";
import { useRouter } from "vue-router";
import { computed, onBeforeMount, ref, toRefs, watch } from "vue";
type FormItem = {
  [key: string]: string;
};
const router = useRouter();
const FocusData = ref({
  title: "Contact Us",
  hiddenXsImgUrl:
    "https://www.obio-tech.com/public/uploads/20220328/d8ba4b5c00df5c25ba5c242f186d0cbd.jpg",
  visibleXsImgUrl:
    "https://www.obio-tech.com/public/uploads/20220401/252db05533e1f9c457f58a33d5c8c994.jpg",
});
const ruleForm = ref<FormItem>({});
const rules = ref([]);
</script>

<style></style>
