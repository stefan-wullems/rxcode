import {repeat} from 'lit-html/directives/repeat'
import {TemplateResult} from 'lit-html'

export function times(n: number, fn: (i: number) => TemplateResult) {
  return repeat(new Array<null>(n).fill(null, 0, n), (_, i) => fn(i))
}
