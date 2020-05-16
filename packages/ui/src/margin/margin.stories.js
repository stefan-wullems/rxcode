import {number} from '@storybook/addon-knobs'

import Margin from './margin.svelte'
import LineNumber from './column/line-number.svelte'

export default {title: 'Margin', component: Margin}

export const Default = () => ({
  Component: Margin,
  props: {
    rows: number('Rows', 30),
    columns: [LineNumber],
  },
})
