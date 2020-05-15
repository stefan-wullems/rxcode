import {render as litRender} from 'lit-html'
import {applyProps} from '../utils/elements/applyProps'

export function render(tag: string, props = {} as {[key: string]: any}) {
  const Element = customElements.get(tag)
  console.log(Element)
  const element = new Element() as HTMLElement

  litRender(applyProps(element, props), document)

  return new Promise(resolve => {
    function requestComponent() {
      const element = document.querySelector(tag)
      if (element) {
        resolve(element)
      } else {
        window.requestAnimationFrame(requestComponent)
      }
    }
    requestComponent()
  })
}
