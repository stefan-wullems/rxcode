import {Margin} from './margin'

export default {title: 'Margin'}

export const Default = () => {
  const margin = new Margin()

  return margin.render()
}
