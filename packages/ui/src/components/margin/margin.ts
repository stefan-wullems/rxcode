import {MarginColumnConstructor} from './column/interface'
import './column'

const marginTemplate = document.createElement('template')
marginTemplate.innerHTML = `
<style>
  #margin {
    position: absolute;
    background-color: #555;
  }
  #rows {
    position: absolute;
    width: 68px;
    letter-spacing: 0px;
  }
  .row {
    position: absolute;
    width: 100%;
  }
</style>

<div id="margin">
  <div id="rows"></div>
</div>
`

export class Margin extends HTMLElement {
  public rows = 30
  public columns: MarginColumnConstructor[] = []

  private _rowHeight = 20
  private _baseWidth = 20

  get _marginElement() {
    return this.shadowRoot?.querySelector('#margin') as HTMLDivElement
  }

  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.appendChild(marginTemplate.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'presentation')

    this._initialRender()
  }

  _initialRender() {
    this._marginElement.style.height = this.rows * this._rowHeight + 'px'
    this._marginElement.style.width = this._baseWidth + 'px'
    this._renderOverlays()
  }

  _renderOverlays() {
    const rowsElement = this.shadowRoot?.querySelector('#rows')

    this.columns.forEach(column => {
      this._marginElement.style.width =
        parseFloat(this._marginElement.style.width) +
        (column.reservedWidth || 0) +
        'px'
    })

    for (let rowNumber = 1; rowNumber <= this.rows; rowNumber++) {
      const rowElement = document.createElement('div')
      rowElement.classList.add('row')

      rowsElement?.appendChild(rowElement)

      rowElement.style.top = (rowNumber - 1) * this._rowHeight + 'px'
      rowElement.style.height = this._rowHeight + 'px'

      this.columns.forEach(column => {
        const columnElement = new column()

        rowElement.appendChild(columnElement)

        if (columnElement.connectedToMarginCallback) {
          columnElement.connectedToMarginCallback(rowNumber)
        }
      })
    }
  }
}

customElements.define('rx-margin', Margin)
