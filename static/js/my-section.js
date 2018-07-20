Vue.component('my-section', {
  template: `<section :style="style"> My Section </section>`,
  data: () => ({
    style: {
      background: 'yellow'
    }
  })
})

