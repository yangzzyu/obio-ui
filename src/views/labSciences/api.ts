/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-06-20 14:49:40
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-06-24 09:32:02
 * @FilePath: \obio-ui\src\views\insights\api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "@/utils/request";


// /cms/service/public/list
// 服务列表
export function publicList() {
    return request({
        url: `/cms/service/public/list`,
        method: "get",
    });
}

// /cms/service/public/info
// 服务详情接口
export function publicInfo(params) {
    return request({
        url: `/cms/service/public/info`,
        method: "get",
        params
    });
}