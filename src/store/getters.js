const getters = {
  token: state => state.app.token,
  currentUser: state => state.app.user
  // avatar: state => state.user.avatar,
  // name: state => state.user.name,
  // introduction: state => state.user.introduction,
  // status: state => state.user.status,
  // roles: state => state.user.roles,
  // setting: state => state.user.setting,
  // permission_routers: state => state.permission.routers,
  // addRouters: state => state.permission.addRouters,
  // errorLogs: state => state.errorLog.logs
}
export default getters