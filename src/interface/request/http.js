import store from '@/store/index'
import router from '@/router/index'
import axios from 'axios'
import { Toast } from 'vant'

// 轻量级提示组件
const $message = msg => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true
  })
}

// 返回登录页
const toLogin = () => {
  router.replace({
    path: '/login',
    query: { redirect: router.currentRoute.fullPath }
  })
}

/*
  请求失败后根据状态码进行处理
  status  状态码
  errorMessage  错误信息
*/
const errorHandle = (status, errorMessage) => {
  switch (status) {
    case 401:
      toLogin()
      break
    case 403:
      $message('登录过期,请重新登录')
      localStorage.removeItem('token')
      store.commit('loginSuccess', null)
      setTimeout(() => { toLogin() }, 1000)
      break
    case 404:
      $message('网络请求不存在')
      break
    default:
      console.log(errorMessage)
      break
  }
}

// 创建 axios 实例,并设置 post 请求的 header 信息头
let instance = axios.create({ timeout: 10000 })
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 设置请求拦截 (对登录授权, post 数据提交进行处理)
instance.interceptors.request.use(config => {
  const token = store.state.token
  token && (config.headers.Authorization = token)
  return config
}, error => {
  return Promise.error(error)
})

// 设置响应拦截 
instance.interceptors.response.use(
  response => { return response.status === 200 ? Promise.resolve(response) : Promise.reject(response) },
  error => {
    const { response } = error
    if (response) {
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 断网处理
      if (!window.navigator.onLine) {
        store.commit('changeNetWork', false)
      } else {
        return Promise.reject(error)
      }
    }
  }
)

export default instance