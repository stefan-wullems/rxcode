import {withKnobs, number} from '@storybook/addon-knobs'

import {Margin} from './margin'
import './column'
import {html} from 'lit-html'

export default {title: 'Margin', decorators: [withKnobs]}

const rowTemplate = html`<rxui-line-number></rxui-line-number>`.getTemplateElement()

export const Default = () => {
  const margin = new Margin()

  margin.rows = number('Rows', 30)
  margin.rowTemplate = rowTemplate

  return margin
}

Default.story = {name: 'default'}
