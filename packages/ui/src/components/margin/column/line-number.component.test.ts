import {litFixture, html, expect} from '@open-wc/testing'
import {LineNumber} from './line-number.component'

describe('the line-number component', () => {
  let element: LineNumber

  beforeEach(async () => {
    element = await litFixture(html` ${new LineNumber()} `)
  })

  it('renders', async () => {
    expect(Boolean(element.shadowRoot)).to.equal(true)
  })

  it('displays row property', async () => {
    element.row = 6
    expect(element).shadowDom.to.equalSnapshot()
  })
})
