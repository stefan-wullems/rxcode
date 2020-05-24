import Component from '../../editor.svelte'

export default {title: 'Editor', component: Component}

export const Default = () => ({
  Component,
  props: {value: 'bla'},
  on: {
    input: event => {
      console.log('changed', event)
    }
  }
})
