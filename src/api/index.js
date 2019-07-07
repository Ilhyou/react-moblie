// 1 引入axios
import axios from "axios";

axios.defaults.baseURL = 'http://react.zbztb.cn/site'

// 过滤器 
// axios 请求过滤器
// axios 响应过滤器 
// 1 判断状态码
// 2 不希望多了一层嵌套

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response.data.status === 0){
    return response.data.message
  }else{
    return response;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

/**
 * 获取首页轮播图的数据
 */
export const getGoods = () => axios.get("/goods/gettopdata/goods");

/**
 * 获取商品列表
 */
export const getGoodsGroup = () => axios.get("/goods/getgoodsgroup");

/**
 * 获取商品详情
 * @param {Number} id 商品的id
 */
export const getGoodsInfo = (id) => axios.get("/goods/getgoodsinfo/"+id);
