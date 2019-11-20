/* demo 模块接口 */
import domain from '../domain'
import axios from '../../request/http'
import Qs from 'qs'

const demo = {
  getDemoData () {
    return axios.get(`${domain.development}/mock/demo.json`)
  },
  postDemoData (params) {
    return axios.post(`${domain.development}/mock/demo.json`, Qs.stringify(params))
  }
}

export default demo