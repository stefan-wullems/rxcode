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

  it('colorizes text according to colors prop', () => {
    const handleChange = jest.fn()

    render(Editor, {
      props: {
        value: [
          'const x = 2',
          '',
          'console.log(x * x)'
        ].join('\n'),
        onChange: handleChange,
        colors: [
          {range: {row: 0, column: {start: 0, end: 4}}, color: 'purple'},
          {range: {row: 0, column: 6}, color: 'lightblue'},
          {range: {row: 0, column: 8}, color: 'white'},
          {range: {row: 0, column: 10}, color: 'yellow'},
          {range: {row: 2, column: {start: 0, end: 6}}, color: 'lightgreen'},
          {range: {row: 2, column: 7}, color: 'white'},
          {range: {row: 2, column: {start: 8, end: 10}}, color: 'lightgreen'},
          {range: {row: 2, column: 11}, color: 'white'},
          {range: {row: 2, column: 12}, color: 'lightblue'},
          {range: {row: 2, column: 14}, color: 'white'},
          {range: {row: 2, column: 16}, color: 'lightblue'},
          {range: {row: 2, column: 17}, color: 'white'}
        ]
      }
    })
    screen.getAllByText('x').forEach(variable => {
      expect(variable).toHaveStyle('color: lightblue;')
    })
    expect(screen.getByText('=')).toHaveStyle('color: white;')
    expect(screen.getByText('2')).toHaveStyle('color: yellow;')
    expect(screen.getByText('const')).toHaveStyle('color: purple;')
    expect(screen.getByText('console')).toHaveStyle('color: lightgreen;')
    expect(screen.getByText('log')).toHaveStyle('color: lightgreen;')
    expect(screen.getByText('(')).toHaveStyle('color: white;')
    expect(screen.getByText('*')).toHaveStyle('color: white;')
    expect(screen.getByText(')')).toHaveStyle('color: white;')
  })
})
