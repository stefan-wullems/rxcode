import {Margin} from './margin'
import {RowNumber} from './column'

export default {title: 'Margin'}

export const Default = () => {
  const margin = new Margin()

  return margin
}

export const LineNumberOverlay = () => {
  const margin = new Margin()
  margin.columns = [RowNumber]

  return margin
}
