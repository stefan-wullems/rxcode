import {Margin} from './margin'

export default {title: 'Margin'}

export const Default = () => {
  const margin = new Margin()

  margin.updateProp('height', 1000)
  margin.updateProp('backgroundColor', '#555')

  return margin.render()
}
