Vue.component('my-nav', {
  props: {
    message: {
      type: String,
      default: 'App title'
    }
  },
  template: `<nav> <button @click="$emit('toggle')">#</button> {{ message }} </nav>`,
})
