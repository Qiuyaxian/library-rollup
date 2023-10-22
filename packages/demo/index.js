import Main from './src/index.vue';

/* istanbul ignore next */
Main.install = function(Vue) {
  Vue.component(Demo.name, Demo);
};

export default Main;
