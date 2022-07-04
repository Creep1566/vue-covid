/***
 * 所有的请求的方法
 */
import axios from 'axios'
import base from './base'
import md5 from 'md5-js'
const api = {
    /**
     * 病毒信息获取
     */
    getCovIofo() {
        return axios.get(base.covidInfo)
    },
    getChinaData() {
        return axios.get(base.wapiBase + base.wapiChina)
    },
    getWorldData() {
        return axios.get(base.wapiBase + base.wapiWorld)
    },
    getCity(city_name) {
        let rules = md5("appid17310city_name" + city_name + 'formatjsona011ce744435228d65e27d76b1a4fea6')
        let res = 'format=json&appid=17310&city_name=' + city_name + '&sign=' + rules;
        return axios.get(base.wapiBase + base.wapiCity + '?' + res)
    },
    getCovSwiper() {
        return axios.get(base.covSwiper);
    },
    getTravel() {
        return axios.get(base.travel)
    },
    getTravelQuery(params) {
        return axios.get(base.TravelQuery, {
            params
        })
    }
}

export default api