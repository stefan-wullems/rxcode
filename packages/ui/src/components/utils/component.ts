type PropHandlers<P> = {[K in keyof P]?: (value: P[K]) => void}

export abstract class Component<P> {
  public props: P = {} as P

  private _handlers: PropHandlers<P> = {}

  constructor() {}

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
