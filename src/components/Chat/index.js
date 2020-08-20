// 导入组件，组件必须声明 name
import MChat from './index.vue'


MChat.install = function (Vue) {
  Vue.component(MChat.name, MChat)
}

export default MChat