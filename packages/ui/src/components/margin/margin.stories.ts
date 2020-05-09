import {withKnobs, optionsKnob, number} from '@storybook/addon-knobs'

import {Margin} from './margin'
import {RowNumber} from './column'

export default {title: 'Margin', decorators: [withKnobs]}

const columns = {
  'Row number': RowNumber,
}

export const Default = () => {
  const margin = new Margin()

  margin.rows = number('Rows', 30)
  const selectedColumns = [
    optionsKnob(
      'Columns',
      Object.keys(columns).reduce((acc, key) => ({...acc, [key]: key}), {}),
      'Row number',
      {display: 'multi-select'},
    ),
  ]

  if (selectedColumns) {
    margin.columns = selectedColumns.map(col => columns[col])
  }

  return margin
}

Default.story = {
  name: 'default',
}
