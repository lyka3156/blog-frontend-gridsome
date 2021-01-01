// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


// 导入公共组件，并且注入到全局组件中
import DefaultLayout from '~/layouts/Default.vue'
// 导入elementUI
import ElementUI from 'element-ui'
// 导入elementUI组件的样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入自己手写的全局样式
import "./assets/css/index.css"

// 引入dayjs插件
import dayjs from "dayjs";
// 使用中文时间格式
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn') // use locale

export default function (Vue, { router, head, isClient }) {

  // 全局注入GRIDSOME_API_URL变量
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })

  // Set default layout as a global component
  // 注入默认全局组件
  Vue.component('Layout', DefaultLayout)

  /**
   * 定义全局过滤器来格式化时间
   */

  // {{ 表达式 | 过滤器 }}
  // 使用例子： {{ createAt | date("YYYY-MM-DD") }}
  // 第一个参数是过滤器的名称
  // 第二个参数是处理函数
  //     - 第二个参数的第一个参数是表达式
  //     - 第二个参数的第第一个参数后面的参数的过滤器的参数
  Vue.filter('date', (value, format = "YYYY-MM-DD HH:mm:ss") => {
    return dayjs(value).format(format);
  })

  // 注册elementUI
  Vue.use(ElementUI)
}
