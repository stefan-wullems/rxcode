import {html} from 'lit-html'
import {AbstractMarginColumn} from './row/interface'
import './row'

const marginTemplate = document.createElement('template')
marginTemplate.innerHTML = html`
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
  </style>

  <div id="margin">
    <div slot="rows" id="rows"></div>
  </div>
`.getHTML()

export class Margin extends HTMLElement {
  public columnTypes: string[] = []
  public rows = 30

  private _rowHeight = 20
  private _baseWidth = 20
  private _margin: HTMLDivElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.appendChild(marginTemplate.content.cloneNode(true))

    this._margin = this.shadowRoot?.querySelector('#margin') as HTMLDivElement
  }

  connectedCallback() {
    this.setAttribute('role', 'presentation')

    this._initialRender()
  }

  _initialRender() {
    this._margin.style.height = this.rows * this._rowHeight + 'px'
    this._margin.style.width = this._baseWidth + 'px'
    this._renderOverlays()
  }

  _renderOverlays() {
    const lineOverlays = this.shadowRoot?.querySelector('#rows')

    this.columnTypes.forEach(type => {
      const constructor = customElements.get(type)
      this._margin.style.width =
        parseFloat(this._margin.style.width) +
        (constructor.reservedWidth || 0) +
        'px'
    })

    for (let rowNumber = 1; rowNumber <= this.rows; rowNumber++) {
      lineOverlays?.appendChild(this._createRow(rowNumber))
    }
  }

  _createRow(row: number) {
    const rowElement = document.createElement('rxui-margin-row')

    this.columnTypes.forEach(elementType => {
      const lineOverlayElement = document.createElement(
        elementType,
      ) as HTMLElement & Partial<AbstractMarginColumn>

      rowElement.appendChild(lineOverlayElement)

      rowElement.style.top = (row - 1) * this._rowHeight + 'px'
      rowElement.style.height = this._rowHeight + 'px'

      if (lineOverlayElement.connectedToMarginCallback) {
        lineOverlayElement.connectedToMarginCallback(row)
      }

      lineOverlayElement.slot = 'column'
    })

    return rowElement
  }
}

customElements.define('rx-margin', Margin)
