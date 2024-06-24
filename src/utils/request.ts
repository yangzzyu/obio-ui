/*
 * @Author: yangyu 1431330771@qq.com
 * @Date: 2024-06-20 14:38:18
 * @LastEditors: yangyu 1431330771@qq.com
 * @LastEditTime: 2024-06-20 14:48:30
 * @FilePath: \obio-ui\src\utils\request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'
const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,
})
//添加请求与响应拦截器
request.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})
request.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        let message = ''
        const status = error.response.status
        switch (status) {
            case 400:
                message = '请求错误(400)'
                break
            case 401:
                message = '未授权，请重新登录(401)'
                break
            case 403:
                message = '拒绝访问(403)'
                break
            case 404:
                message = '请求出错(404)'
                break
            case 408:
                message = '请求超时(408)'
                break
            case 500:
                message = '服务器错误(500)'
                break
            case 501:
                message = '服务未实现(501)'
                break
            case 502:
                message = '网络错误(502)'
                break
            case 503:
                message = '服务不可用(503)'
                break
            case 504:
                message = '网络超时(504)'
                break
            case 505:
                message = 'HTTP版本不受支持(505)'
                break
            case 1001:
                message = '验证失败'
                break
            default:
                message = `连接出错(${status})!`
        }
        ElMessage({
            type: 'error',
            message,
        })
        return Promise.reject(error)
    },
)
export default request