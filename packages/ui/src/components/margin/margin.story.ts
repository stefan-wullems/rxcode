import {Margin} from './margin'

export default {title: 'Margin'}

export const Default = () => {
  const margin = new Margin()

  margin.updateProp('contentLeft', 40)

  margin.updateProp('height', Math.min(1000, 1000000))
  margin.updateProp('backgroundColor', '#555')

  margin.render()

  return margin.getNode()
}
