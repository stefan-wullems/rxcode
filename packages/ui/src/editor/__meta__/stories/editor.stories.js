import Component from '../../editor.svelte'

export default {title: 'Editor', component: Component}

export const Default = () => ({
  Component,
  props: {value: 'bla', onChange: console.log}
})
