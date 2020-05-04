type PropHandlers<P> = {[K in keyof P]?: (value: P[K]) => void}

export class BaseComponent<P> {
  private props: P = {} as P

  private _handlers: PropHandlers<P> = {}

  public updateProp<K extends keyof P>(name: K, value: P[K]) {
    const oldProps = {...this.props}
    const newProps = {...this.props, [name]: value}

    const handler = this._handlers[name]

    if (handler && oldProps[name] !== value) {
      handler(value)
    }

    this.props = newProps
  }

  public registerPropHandlers(handlers: PropHandlers<P>) {
    this._handlers = handlers
  }
}
