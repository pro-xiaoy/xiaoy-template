// 导入所有组件
import countDown from '@/components/countDown/index.js'
import Notice from '@/components/Notice/index.js'

const components = [countDown, Notice]
const install = function(vue) {
  /* istanbul ignore if */
  if (install.installed) return;
  /*eslint-disable*/
  components.map((component) => {
    vue.component(component.name, component); //component.name 此处使用到组件vue文件中的 name 属性
  });
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  countDown,
  Notice
}
