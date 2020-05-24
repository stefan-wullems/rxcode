import {render, screen} from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'

import Editor from '../../editor.svelte'

describe('The Editor component', () => {
  it('displays the value text', () => {
    render(Editor, {value: 'value'})

    expect(screen.getByRole('textbox')).toHaveDisplayValue('value')
  })

  it('notifies listener when value changes', () => {
    const handleChange = jest.fn()

    render(Editor, {props: {value: 'value', onChange: handleChange}})

    userEvent.clear(screen.getByRole('textbox'))
    userEvent.type(screen.getByRole('textbox'), 'Bla')

    expect(handleChange).toHaveBeenCalledWith('Bla')
  })
})
