export default {
  changeNetWork (state, bool) { state.hasNetWork = bool }, // 必须
  loginSuccess (state, token) { state.token = token }, // 必须
}