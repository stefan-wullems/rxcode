import {render, screen, fireEvent} from '@testing-library/svelte'

import Editor from '../../editor.svelte'

describe('The Editor component', () => {
  it('displays the value text', () => {
    render(Editor, {value: 'value'})

    expect(screen.getByRole('textbox')).toHaveTextContent('value')
  })

  it('notifies listener when value changes', () => {
    const handleChange = jest.fn()

    render(Editor, {props: {value: 'test1', onChange: handleChange}})

    fireEvent.input(
      screen.getByRole('textbox'),
      {target: {innerText: 'test2'}}
    )

    expect(handleChange).toHaveBeenCalledWith('test2')
  })
})
