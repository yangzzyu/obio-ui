/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-06-24 10:57:47
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-06-24 11:10:49
 * @FilePath: \obio-ui\src\stores\Scientific.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia"

export const servicesStore = defineStore('Services', {
    state: () => {
        return {
            publicListData: []
        }
    },
    actions: {
        setPublicList(data:any[]) {
            this.publicListData = data

        }
    }
})