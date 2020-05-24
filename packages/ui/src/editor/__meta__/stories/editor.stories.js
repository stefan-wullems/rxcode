import Component from '../../editor.svelte'

export default {title: 'Editor', component: Component}

export const Default = () => ({
  Component,
  props: {
    value: [
      'const x = 2',
      '',
      'console.log(x * x)'
    ].join('\n'),
    onChange: console.log,
    colors: [
      {range: {row: 0, column: {start: 0, end: 4}}, color: 'purple'},
      {range: {row: 0, column: 6}, color: 'lightblue'},
      {range: {row: 0, column: 8}, color: 'white'},
      {range: {row: 0, column: 10}, color: 'yellow'},
      {range: {row: 2, column: {start: 0, end: 6}}, color: 'lightgreen'},
      {range: {row: 2, column: 7}, color: 'white'},
      {range: {row: 2, column: {start: 8, end: 10}}, color: 'lightgreen'},
      {range: {row: 2, column: 11}, color: 'red'},
      {range: {row: 2, column: 12}, color: 'lightblue'},
      {range: {row: 2, column: 14}, color: 'white'},
      {range: {row: 2, column: 16}, color: 'lightblue'},
      {range: {row: 2, column: 17}, color: 'red'}
    ]
  }
})
