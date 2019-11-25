// 函数的返回值是promise对象

import axios from 'axios'

export default function ajax(url, data = {}, type = 'get') {
  if (type === 'get') {
    // 发get请求
    return axios.get(url, {
      params: data //指定请求参数
    })
  } else {
    return axios.post(url, data)
  }
}
// ajax('/login', {
//   username: 'tom',
//   password: 12345
// }, 'post').then()

// ajax('/add', {
//   username: 'tom',
//   password: 123,
//   phone: '15624176511'
// },'post')