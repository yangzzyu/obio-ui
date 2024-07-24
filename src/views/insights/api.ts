/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-06-20 14:49:40
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-06-24 09:28:55
 * @FilePath: \obio-ui\src\views\insights\api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "@/utils/request";
import { da } from "element-plus/es/locale";


export function articlesPages(type, params) {
    return request({
        url: `/cms/public/articles/${type}/page`,
        method: "get",
        params
    });
}

export function articlesDetail(id) {
    return request({
        url: `/cms/public/articles/${id}`,
        method: "get",
    });
}
export function sendMail(data) {
    return request({
        url: `/cms/inquiry/save`,
        method: "post",
		timeout: 1000 * 60 * 3, //3分钟
        data:data
    });
}