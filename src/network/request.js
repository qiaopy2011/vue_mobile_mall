import axios from "axios";

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    //真实接口加VX coderwhy002 获取
    baseURL: '127.0.0.1',
    timeout: 5000
  })

  //2.axios的拦截器
  //2.1请求拦截的作用

  instance.interceptors.request.use(config => {
    //console.log(config)
    //1.比如config中的一些信息不符合服务器的要求
    //2.比如每次发送网络请求，都希望在界面中显示一个请求的图标
    //3.某些网络请求（比如登录token），必须携带一些特殊的信息

    return config
  }, error => {
    console.log(error);
  })


  //2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error);
  })

  //3.发送真正的网络请求,返回的是promise
  return instance(config)
}
