/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-01-27 21:06:22
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-06-24 10:55:14
 * @FilePath: \obio-ui\src\stores\counter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
