import ajax from "./ajax";
const BASE = ''
// 定义接口请求函数
// 根据接口文档定义接口请求函数
// 每一个函数的返回值是promise对象
export const  reqLogin = (username, password) => ajax(BASE + '/login', {
  username,
  password
}, 'post')

export const reqAdd = (user) => ajax(BASE + '/manage/user/add', user, 'post')