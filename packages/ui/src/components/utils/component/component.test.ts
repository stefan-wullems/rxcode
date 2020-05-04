import {BaseComponent} from './component'

interface TestProps {
  prop1: string
  prop2: boolean
}

describe('The BaseComponent class', () => {
  const baseComponent = new BaseComponent<TestProps>()

  it('calls a registered handler when the corresponding prop changes', () => {
    const handleChangeProp1 = jest.fn()
    baseComponent.registerPropHandlers({
      prop1: handleChangeProp1,
    })

    baseComponent.updateProp('prop1', 'test')

    expect(handleChangeProp1).toBeCalledTimes(1)
    expect(handleChangeProp1).toBeCalledWith('test')
  })
})
